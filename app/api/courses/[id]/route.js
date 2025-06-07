import { connectToDB } from "@/lib/dbConnect";
import { authMiddleware } from "@/middleware/auth";
import Course from "@/schema/Courses";

export async function GET(req, { params }) {
  try {
    await connectToDB();
    const user = authMiddleware(req);
    if (!user || user.status == "511") {
      return Response.json(
        {
          message: "Unauthorized",
        },
        { status: 511 }
      );
    }
    const course = await Course.findById(params.id);
    return Response.json(
      {
        course,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: "Course fetch failed", error: err.message },
      { status: 500 }
    );
  }
}
