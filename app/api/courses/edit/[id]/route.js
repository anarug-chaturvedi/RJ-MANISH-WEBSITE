import { connectToDB } from "@/lib/dbConnect";
import Course from "@/schema/Courses.js";
import { authMiddleware } from "@/middleware/auth";

export async function PUT(req, { params }) {
  try {
    await connectToDB();
    const user = await authMiddleware(req);
    if (!user || !user.isAdmin)
      return Response.json({ message: "Unauthorized" }, { status: 401 });

    const data = await req.json();
    const course = await Course.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return Response.json(
      { message: "Course updated", course },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: "Update failed", error: err.message },
      { status: 500 }
    );
  }
}
