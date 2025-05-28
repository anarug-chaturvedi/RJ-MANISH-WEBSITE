import { connectToDB } from "@/lib/dbConnect";
import Course from "@/schema/Courses";

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const course = await Course.findById(params.id);

    const classTitles = course.content.map((item) => item.title);
    return Response.json({
      courseId: course._id,
      title: course.title,
      classes: classTitles,
    });
  } catch (err) {
    return Response.json(
      { message: "Course fetch failed", error: err.message },
      { status: 500 }
    );
  }
}
