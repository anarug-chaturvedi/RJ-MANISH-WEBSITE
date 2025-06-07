"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, FileText, Video, X, CloudCog, Loader } from "lucide-react";
import axios from "axios";
import api from "@/lib/axiox";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CoursesPage() {
  const [loading, setloading] = useState(null);
  const [courses, setCousrses] = useState([]);
  const router = useRouter();
  const fetchCourses = async () => {
    setloading(true);
    try {
      const { data } = await api.get("/api/user/courses");
      console.log(data?.courses);
      setCousrses(data?.courses);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const truncateDescription = (description, maxLength = 120) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + "...";
  };

  const getContentIcon = (type) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />;
      case "document":
        return <FileText className="w-4 h-4" />;
      default:
        return <Play className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Courses</h1>
          <p className="mt-2 text-gray-600">
            Discover our comprehensive collection of professional courses
          </p>
        </div>
      </div>

      {/* Course Grid */}
      {loading ? (
        <div className="flex w-full mt-10 items-center justify-center">
          <Loader size={50} className="animate-spin" />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses?.map((course) => (
              <div
                key={course._id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    Rs {course.price}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {truncateDescription(course.description)}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{course.content.length} lessons</span>
                  </div>
                  <button
                    onClick={() => router.push(`/course/${course._id}`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
            {courses?.length === 0 && (
              <p>
                Please Buy Course to View{" "}
                <Link
                  href={"/course"}
                  replace={true}
                  className="underline mx-3 text-blue-500"
                >
                  Explore Course
                </Link>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
