import { connectToDB } from "@/lib/dbConnect";
import User from "@/schema/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/auth";

export async function POST(req) {
  try {
    await connectToDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user)
      return Response.json({ message: "User not found" }, { status: 404 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return Response.json({ message: "Invalid credentials" }, { status: 401 });

    const token = await generateToken(user);
    return Response.json({ token ,userId:user._id }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Login failed", error: err.message },
      { status: 500 }
    );
  }
}
