import { connectToDB } from "@/lib/dbConnect";
import Course from "@/schema/Courses.js";

export async function GET(req, { params }) {
  try {
    await connectToDB();
    console.log(params);
    if (!params?.id) {
      return Response.json({ message: "Update failed" }, { status: 500 });
    }

    const course = await Course.findByIdAndUpdate(
      params.id,
      {
        price: 2,
      },
      {
        new: true,
      }
    );

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
