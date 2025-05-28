import { connectToDB } from "@/lib/dbConnect";
import { authMiddleware } from "@/middleware/auth";
import Courses from "@/schema/Courses.js";
import User from "@/schema/User.js";

export async function GET(req, { params }) {
  try {
    await connectToDB();
    const userInfo = await authMiddleware(req);
    if (!userInfo)
      return Response.json({ message: "Unauthorized" }, { status: 401 });

    const user = await User.findById(userInfo.id);
    if (!user.enrolledCourses.includes(params.id)) {
      return Response.json(
        { message: "Not enrolled in this course" },
        { status: 403 }
      );
    }

    const course = await Courses.findById(params.id);
    return Response.json({ course }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Fetch failed", error: err.message },
      { status: 500 }
    );
  }
}
