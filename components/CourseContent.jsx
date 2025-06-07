"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, FileText, Lock } from "lucide-react";

export default function CourseContent({ courseId, content, currentContentId }) {
  const [expandedSection, setExpandedSection] = useState(true);

  const getIcon = (type, isLocked) => {
    if (isLocked) {
      return <Lock className="h-5 w-5 text-gray-400" />;
    }

    switch (type) {
      case "video":
        return <Play className="h-5 w-5 text-purple-600" />;
      case "document":
        return <FileText className="h-5 w-5 text-blue-600" />;
      default:
        return <Play className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="divide-y divide-gray-200">
      <div className="p-4 bg-gray-50">
        <h2 className="text-xl font-bold">Course Content</h2>
        <p className="text-sm text-gray-600 mt-1">
          {content?.length ?? 0} lessons •{" "}
          {content?.filter?.((item) => item?.type === "video")?.length ?? 0}{" "}
          videos •{" "}
          {content?.filter?.((item) => item?.type === "document")?.length ?? 0}{" "}
          documents
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        <div className="p-4">
          <h3 className="font-medium mb-4">Course Materials</h3>

          <ul className="space-y-2">
            {content?.map?.((item, index) => {
              const isActive = currentContentId === item?._id;

              return (
                <li key={item?._id}>
                  <Link
                    href={`/course/${courseId?.id || courseId}?content=${
                      item?._id
                    }`}
                    className={`flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors ${
                      isActive ? "bg-purple-50 border border-purple-200" : ""
                    } `}
                  >
                    <div className="mr-3">{getIcon(item?.type)}</div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-medium truncate ${
                          isActive ? "text-purple-900" : "text-gray-900"
                        }`}
                      >
                        {item?.title}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        {item?.type}
                      </p>
                    </div>

                    {isActive && (
                      <div className="ml-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
