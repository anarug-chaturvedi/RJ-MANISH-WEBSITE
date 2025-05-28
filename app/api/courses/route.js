import { connectToDB } from "@/lib/dbConnect";
import { authMiddleware } from "@/middleware/auth";
import Course from "@/schema/Courses";

export async function GET(req) {
  try {
    await connectToDB();

    const user = await authMiddleware(req);

    const courses = await Course.find({}).lean();

    if (!user) {
      return Response.json(
        { message: "Courses fetched successfully", courses },
        { status: 200 }
      );
    }

    const userEnrolledCourses =
      user?.enrolledCourses?.map((id) => id?.toString()) || [];

    const coursesWithFlag =
      courses?.map((course) => ({
        ...course,
        isEnrolled:
          userEnrolledCourses?.includes(course?._id?.toString()) || false,
      })) || [];

    return Response.json(
      { message: "Courses fetched successfully", courses: coursesWithFlag },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Fetch failed", error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
