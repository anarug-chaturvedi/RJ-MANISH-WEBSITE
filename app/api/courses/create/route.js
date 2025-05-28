import { connectToDB } from "@/lib/dbConnect";
import Course from "@/schema/Courses.js";
import { authMiddleware } from "@/middleware/auth";

export async function POST(req) {
  try {
    await connectToDB();
    const user = await authMiddleware(req);

    if (!user)
      return Response.json({ message: "Unauthorized" }, { status: 401 });

    const body = await req.json();
    const course = await Course.create(body);

    return Response.json(
      { message: "Course created", course },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: "Creation failed", error: err.message },
      { status: 500 }
    );
  }
}
