import { connectToDB } from "@/lib/dbConnect";
import User from "@/schema/User.js";

export async function GET({ params }) {
  await connectToDB();
  const user = await User.findById(params.id).populate("enrolledCourses");
  return Response.json(user.enrolledCourses);
}
