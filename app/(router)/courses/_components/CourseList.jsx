import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";
function CourseList() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);

  //Fetch Course List
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };
  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      {/* Title and Filter  */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">Барлық курстар</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Сұрыптау" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Барлығы</SelectItem>
            <SelectItem value="dark">Қазақша</SelectItem>
            <SelectItem value="system">Орысша</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display Course List  */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
              <Link href={"/course-preview/" + item.slug}>
                <div key={index}>
                  <CourseItem course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="w-full h-[240px]
          rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
