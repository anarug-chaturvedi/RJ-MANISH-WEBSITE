import { connectToDB } from "@/lib/dbConnect";
import User from "@/schema/User.js";
import { authMiddleware } from "@/middleware/auth";

export async function GET(req) {
  try {
    await connectToDB();
    const userInfo = await authMiddleware(req);
    if (!userInfo || userInfo.status === 511)
      return Response.json({ message: "Unauthorized" }, { status: 511 });

    const user = await User.findById(userInfo.id).populate("enrolledCourses");

    return Response.json({ courses: user.enrolledCourses }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Failed to fetch courses", error: err.message },
      { status: 500 }
    );
  }
}
