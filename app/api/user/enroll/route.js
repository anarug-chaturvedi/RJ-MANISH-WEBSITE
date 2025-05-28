import { connectToDB } from "@/lib/dbConnect";
import User from "@/schema/User.js";
import { authMiddleware } from "@/middleware/auth";

export async function POST(req) {
  try {
    await connectToDB();
    const userInfo = await authMiddleware(req);
    if (!userInfo)
      return Response.json({ message: "Unauthorized" }, { status: 401 });

    const { courseId } = await req.json();
    const user = await User.findById(userInfo.id);

    if (!user.enrolledCourses.includes(courseId)) {
      user.enrolledCourses.push(courseId);
      await user.save();
    }

    return Response.json({ message: "Enrolled successfully" });
  } catch (err) {
    return Response.json(
      { message: "Enrollment failed", error: err.message },
      { status: 500 }
    );
  }
}
