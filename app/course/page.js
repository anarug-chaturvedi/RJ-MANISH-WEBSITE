"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, FileText, Video, X } from "lucide-react";
import axios from "axios";

// Sample course data based on your schema
// const courses? = [
//   {
//     _id: "1",
//     title: "Complete React Development Course",
//     description:
//       "Master React from basics to advanced concepts including hooks, context, Redux, and modern React patterns. Build real-world projects and become a React expert.",
//     // thumbnail: "/placeholder.svg?height=200&width=300",
//     price: 99.99,
//     content: [
//       {
//         title: "Introduction to React",
//         type: "video",
//         url: "/videos/intro-react.mp4",
//       },
//       {
//         title: "Setting up Development Environment",
//         type: "video",
//         url: "/videos/setup-env.mp4",
//       },
//       {
//         title: "Your First React Component",
//         type: "video",
//         url: "/videos/first-component.mp4",
//       },
//       {
//         title: "Understanding JSX",
//         type: "document",
//         url: "/docs/jsx-guide.pdf",
//       },
//       {
//         title: "State and Props Deep Dive",
//         type: "video",
//         url: "/videos/state-props.mp4",
//       },
//       {
//         title: "React Hooks Masterclass",
//         type: "video",
//         url: "/videos/hooks-masterclass.mp4",
//       },
//     ],
//   },
//   {
//     _id: "2",
//     title: "Node.js Backend Development",
//     description:
//       "Learn to build scalable backend applications with Node.js, Express, MongoDB, and modern authentication systems. Perfect for full-stack development.",
//     // thumbnail: "/placeholder.svg?height=200&width=300",
//     price: 89.99,
//     content: [
//       {
//         title: "Node.js Fundamentals",
//         type: "video",
//         url: "/videos/nodejs-fundamentals.mp4",
//       },
//       {
//         title: "Express.js Setup and Routing",
//         type: "video",
//         url: "/videos/express-setup.mp4",
//       },
//       {
//         title: "Database Integration with MongoDB",
//         type: "video",
//         url: "/videos/mongodb-integration.mp4",
//       },
//       {
//         title: "Authentication and Authorization",
//         type: "document",
//         url: "/docs/auth-guide.pdf",
//       },
//       {
//         title: "RESTful API Design",
//         type: "video",
//         url: "/videos/restful-api.mp4",
//       },
//     ],
//   },
//   {
//     _id: "3",
//     title: "Full-Stack Next.js Development",
//     description:
//       "Build modern web applications with Next.js 14, including server-side rendering, API routes, authentication, and deployment strategies.",
//     // thumbnail: "/placeholder.svg?height=200&width=300",
//     price: 129.99,
//     content: [
//       {
//         title: "Next.js App Router Introduction",
//         type: "video",
//         url: "/videos/nextjs-intro.mp4",
//       },
//       {
//         title: "Server Components vs Client Components",
//         type: "video",
//         url: "/videos/server-client-components.mp4",
//       },
//       {
//         title: "Dynamic Routing and Layouts",
//         type: "video",
//         url: "/videos/dynamic-routing.mp4",
//       },
//       {
//         title: "API Routes and Server Actions",
//         type: "document",
//         url: "/docs/api-routes.pdf",
//       },
//       {
//         title: "Database Integration",
//         type: "video",
//         url: "/videos/database-integration.mp4",
//       },
//       {
//         title: "Authentication with NextAuth",
//         type: "video",
//         url: "/videos/nextauth.mp4",
//       },
//       {
//         title: "Deployment and Optimization",
//         type: "video",
//         url: "/videos/deployment.mp4",
//       },
//     ],
//   },
//   {
//     _id: "4",
//     title: "Python Data Science Bootcamp",
//     description:
//       "Comprehensive data science course covering Python, pandas, NumPy, matplotlib, machine learning, and data visualization techniques.",
//     // thumbnail: "/placeholder.svg?height=200&width=300",
//     price: 79.99,
//     content: [
//       {
//         title: "Python Basics for Data Science",
//         type: "video",
//         url: "/videos/python-basics.mp4",
//       },
//       {
//         title: "NumPy and Pandas Fundamentals",
//         type: "video",
//         url: "/videos/numpy-pandas.mp4",
//       },
//       {
//         title: "Data Cleaning and Preprocessing",
//         type: "video",
//         url: "/videos/data-cleaning.mp4",
//       },
//       {
//         title: "Statistical Analysis",
//         type: "document",
//         url: "/docs/statistics.pdf",
//       },
//       {
//         title: "Machine Learning Algorithms",
//         type: "video",
//         url: "/videos/ml-algorithms.mp4",
//       },
//     ],
//   },
//   {
//     _id: "5",
//     title: "UI/UX Design Masterclass",
//     description:
//       "Learn modern UI/UX design principles, Figma, user research, prototyping, and create stunning user interfaces that convert.",
//     // thumbnail: "/placeholder.svg?height=200&width=300",
//     price: 69.99,
//     content: [
//       {
//         title: "Design Thinking Process",
//         type: "video",
//         url: "/videos/design-thinking.mp4",
//       },
//       {
//         title: "User Research Methods",
//         type: "video",
//         url: "/videos/user-research.mp4",
//       },
//       {
//         title: "Wireframing and Prototyping",
//         type: "video",
//         url: "/videos/wireframing.mp4",
//       },
//       {
//         title: "Color Theory and Typography",
//         type: "document",
//         url: "/docs/color-typography.pdf",
//       },
//       {
//         title: "Figma Advanced Techniques",
//         type: "video",
//         url: "/videos/figma-advanced.mp4",
//       },
//       {
//         title: "Usability Testing",
//         type: "video",
//         url: "/videos/usability-testing.mp4",
//       },
//     ],
//   },
//   {
//     _id: "6",
//     title: "DevOps and Cloud Computing",
//     description:
//       "Master DevOps practices with Docker, Kubernetes, AWS, CI/CD pipelines, and infrastructure as code for modern application deployment.",
//     // thumbnail: "/placeholder.svg?height=200&width=300",
//     price: 149.99,
//     content: [
//       {
//         title: "DevOps Fundamentals",
//         type: "video",
//         url: "/videos/devops-fundamentals.mp4",
//       },
//       {
//         title: "Docker Containerization",
//         type: "video",
//         url: "/videos/docker-basics.mp4",
//       },
//       {
//         title: "Kubernetes Orchestration",
//         type: "video",
//         url: "/videos/kubernetes.mp4",
//       },
//       {
//         title: "AWS Cloud Services",
//         type: "document",
//         url: "/docs/aws-services.pdf",
//       },
//       {
//         title: "CI/CD Pipeline Setup",
//         type: "video",
//         url: "/videos/cicd-pipeline.mp4",
//       },
//     ],
//   },
// ];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCousrses] = useState([]);
  const fetchCourses = async () => {
    try {
      const { data } = await axios.get("/api/courses", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzY5MThiOWE2OWUzYTNkODRjZTlmNyIsImVtYWlsIjoiYWFrYXNoQGdtYWlsLmNvbSIsImlhdCI6MTc0ODQwNjY4NiwiZXhwIjoxNzQ5MDExNDg2fQ.xnw53C7jwHtmH5s13-FWBwkHZJhXw2idsq0t32LDXUE",
        },
      });
      console.log(data?.courses);
      setCousrses(data?.courses);
    } catch (error) {
      console.log(error);
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
          <h1 className="text-3xl font-bold text-gray-900">Our Courses</h1>
          <p className="mt-2 text-gray-600">
            Discover our comprehensive collection of professional courses
          </p>
        </div>
      </div>

      {/* Course Grid */}
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
                  onClick={() => setSelectedCourse(course)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  {course?.isEnrolled ? "Already Enrolled" : "Buy Now"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                    ${selectedCourse.price}
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
                        index <= 2
                          ? "bg-green-50 border-green-200"
                          : "bg-gray-50 border-gray-200 opacity-60"
                      }`}
                    >
                      <div
                        className={`${
                          index <= 2 ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        {getContentIcon(item.type)}
                      </div>
                      <span
                        className={`flex-1 ${
                          index <= 2 ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {item.title}
                      </span>
                      {index > 2 && (
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                          Locked
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {selectedCourse.content.length > 3 && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Preview:</strong> You can access the first 3
                      lessons. Purchase the course to unlock all{" "}
                      {selectedCourse.content.length} lessons.
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
                    alert(
                      `Purchasing ${selectedCourse.isEnrolled} for $${selectedCourse.price}`
                    );
                  }}
                >
                  {selectedCourse?.isEnrolled === true
                    ? "Already Enrolled"
                    : `Purchase Course - Rs ${selectedCourse.price}`}
                  {/* Purchase Course - Rs {selectedCourse.price} */}
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
