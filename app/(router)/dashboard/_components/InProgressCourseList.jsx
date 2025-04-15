import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import ProgressCourseItem from "./ProgressCourseItem";

function InProgressCourseList({ userEnrolledCourses }) {
  const pathname = usePathname(); // Get the current pathname

  // Function to handle the button click to redirect to the /courses page
  const handleViewAllCourses = () => {
    // Redirect to /courses page
    window.location.href = "/courses";
  };

  return (
    <div className="p-5 bg-white mt-3 rounded-sm">
      <h2 className="text-primary text-[18px] font-semibold">
        Жақында Қатысқан Курстар
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-3 gap-5">
        {userEnrolledCourses.length > 0
          ? userEnrolledCourses.map((item, index) => (
              <ProgressCourseItem key={index} course={item} />
            ))
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                className="h-[200px] w-[230px] bg-slate-200 animate-pulse"
                key={index}
              ></div>
            ))}
      </div>
      <button
        onClick={handleViewAllCourses} // Add click event handler
        className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Барлық Курстарды Көру
      </button>
    </div>
  );
}

export default InProgressCourseList;
