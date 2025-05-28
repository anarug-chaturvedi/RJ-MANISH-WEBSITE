import { connectToDB } from "@/lib/dbConnect";
import Course from "@/schema/Courses.js";
import { authMiddleware } from "@/middleware/auth";

export async function DELETE(req, { params }) {
  try {
    await connectToDB();
    const user = await authMiddleware(req);
    if (!user || !user.isAdmin)
      return Response.json({ message: "Unauthorized" }, { status: 401 });

    await Course.findByIdAndDelete(params.id);
    return Response.json({ message: "Course deleted" }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: "Delete failed", error: err.message },
      { status: 500 }
    );
  }
}
