"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, FileText, Video, X, Loader } from "lucide-react";
import axios from "axios";
import api from "@/lib/axiox";
import { load } from "@cashfreepayments/cashfree-js";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CoursesPage() {
  const router = useRouter();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [courses, setCousrses] = useState([]);
  const [cashfree, setCashfree] = useState(null);
  const [version, setVersion] = useState("");
  const [loading, setLoading] = useState(false);

  const getSessionId = async () => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
    // setLoading(true);
    try {
      const { data } = await api.post("/api/payment/new-order", {
        version,
        courseId: selectedCourse._id,
        price: selectedCourse.price,
      });

      return data.payment_session_id; // assuming res.data is the session ID
    } catch (err) {
      console.error("Failed to get session ID", err);
    } finally {
      // setLoading(false);
    }
  };
  const handlePayment = async () => {
    try {
      const sessionId = await getSessionId();

      if (!cashfree || !sessionId) {
        alert("Cashfree not loaded or session ID missing");
        return;
      }

      const checkoutOptions = {
        paymentSessionId: sessionId,
        returnUrl: "https://www.rjmanish.shop/my-course",
      };

      cashfree.checkout(checkoutOptions).then((result) => {
        if (result.error) {
          alert(result.error.message);
        }
        if (result.redirect) {
          console.log("Redirection", result);
        }
      });
    } catch (error) {
      alert(error);
    }
  };
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/api/courses");
      setLoading(false);
      setCousrses(data?.courses);
      toast.success("All courses fetched successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error occured while fetching course");
    }
  };

  useEffect(() => {
    // Load Cashfree client-side
    const initCashfree = async () => {
      const cf = await load({ mode: "production" });
      setCashfree(cf);
      setVersion(cf?.version());
    };
    initCashfree();
  }, [sessionId]);

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
          <h1 className="text-3xl font-bold text-gray-900">Our Courses</h1>
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
                    onClick={() => {
                      if (course.isEnrolled) {
                        router.push("/my-course");
                      } else {
                        setSelectedCourse(course);
                      }
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                  >
                    {course?.isEnrolled ? "Already Enrolled" : "Buy Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCourse?.title}
              </h2>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Course Image and Price */}
              <div className="relative">
                <Image
                  src={selectedCourse.thumbnail || "/placeholder.svg"}
                  alt={selectedCourse.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-md text-lg font-semibold">
                    Rs {selectedCourse.price}
                  </div>
                </div>
              </div>

              {/* Course Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  About This Course
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Course Content */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Course Content
                </h3>
                <div className="space-y-2">
                  {selectedCourse.content.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg border ${
                        index <= 0
                          ? "bg-green-50 border-green-200"
                          : "bg-gray-50 border-gray-200 "
                      }`}
                    >
                      <div
                        className={`${
                          index <= 0 ? "text-green-600" : "text-green-600"
                        }`}
                      >
                        {getContentIcon(item.type)}
                      </div>
                      <span
                        className={`flex-1 ${
                          index <= 0 ? "text-gray-900" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </span>
                      {/* {index > 0 && ( */}
                      <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        Locked
                      </span>
                      {/* )} */}
                    </div>
                  ))}
                </div>

                {selectedCourse.content.length > 3 && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Preview:</strong> . Purchase the course to unlock
                      all {selectedCourse.content.length} lessons.
                    </p>
                  </div>
                )}
              </div>

              {/* Purchase Button */}
              <div className="flex space-x-4 pt-4 border-t">
                <button
                  className={` ${
                    selectedCourse?.isEnrolled === false ? "" : ""
                  } flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg py-3 px-6 rounded-md transition-colors duration-200`}
                  onClick={() => {
                    // Handle purchase logic here
                    handlePayment();
                  }}
                >
                  {selectedCourse?.isEnrolled === true
                    ? "Already Enrolled"
                    : `Purchase Course - Rs ${selectedCourse.price}`}
                </button>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
