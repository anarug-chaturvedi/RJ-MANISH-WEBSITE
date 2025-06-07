import { connectToDB } from "@/lib/dbConnect";
import { authMiddleware } from "@/middleware/auth";
import Course from "@/schema/Courses";
import User from "@/schema/User";

export async function GET(req) {
  try {
    await connectToDB();

    const userDetails = await authMiddleware(req);
    // if (user.status === 511) {
    //   return Response.json({ message: "Unauthorized" }, { status: 511 });
    // }

    const courses = await Course.aggregate([
      {
        $project: {
          title: 1,
          description: 1,
          thumbnail: 1,
          price: 1,
          content: {
            $map: {
              input: "$content",
              as: "item",
              in: {
                type: "$$item.type",
                title: "$$item.title",
              },
            },
          },
        },
      },
    ]);

    if (!userDetails) {
      return Response.json(
        { message: "Courses fetched successfully", courses },
        { status: 200 }
      );
    }

    const user = await User.findById(userDetails.id);

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
