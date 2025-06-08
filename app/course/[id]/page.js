"use client";

import CourseContent from "@/components/CourseContent";
import api from "@/lib/axiox";
import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "next/navigation";

export default function CoursePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const courseId = params?.id;

  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await api.get("/api/courses/" + courseId);
        setCourse(data?.course);
      } catch (err) {
        console.error("Failed to fetch course:", err);
      }
    };

    if (courseId) {
      fetchCourse();
    }
  }, []);

  const currentContentId =
    searchParams?.get("content") ||
    course?.content?.find((item) => item?.type === "video")?._id;

  const currentContent =
    course?.content?.find((item) => item?._id === currentContentId) ||
    course?.content?.[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {currentContent?.url && (
              <div className="w-full h-full">
                <iframe
                  loading="lazy"
                  title="Gumlet video player"
                  src={currentContent?.url}
                  className="border-0 h-full w-full"
                  allow="accelerometer; gyroscope; encrypted-media; fullscreen;"
                ></iframe>
              </div>
            )}

            <div className="mt-6 bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold mb-4">About this lesson</h2>
              <h3 className="text-lg font-semibold mb-2">
                {currentContent?.title}
              </h3>
              <p className="text-gray-700">{course?.description}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <CourseContent
              courseId={courseId}
              content={course?.content}
              currentContentId={currentContent?._id}
              isEnrolled={course?.isEnrolled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
