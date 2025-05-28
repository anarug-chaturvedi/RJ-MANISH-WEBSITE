import { connectToDB } from "@/lib/dbConnect";
import User from "@/schema/User.js";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectToDB();
    const { name, email, password } = await req.json();

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return Response.json({ message: "User already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    return Response.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: "Registration failed", error: err.message },
      { status: 500 }
    );
  }
}
