"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import SideBanners from "../courses/_components/SideBanners";
import WelcomeBannerDashboard from "./_components/WelcomeBannerDashboard";
import InProgressCourseList from "./_components/InProgressCourseList";
import GlobalApi from "@/app/_utils/GlobalApi";

function Dashboard() {
  const { user } = useUser();
  const [userEnrolledCourses, setUserEnrolledCourse] = useState([]);

  useEffect(() => {
    if (user) {
      getAllUserEnrolledCourses();
    }
  }, [user]);

  /**
   * Get All User Enrolled Course List
   */
  const getAllUserEnrolledCourses = () => {
    GlobalApi.getUserAllEnrolledCourseList(
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      console.log(resp);
      setUserEnrolledCourse(resp.userEnrollCourses);
    });
  };

  return (
    <div className="p-4 space-y-5">
      {/* Banner */}
      <WelcomeBannerDashboard user={user} />

      {/* Grid for content and side banners */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        {/* Left/Main content */}
        <div className="lg:col-span-3 space-y-5">
          <InProgressCourseList userEnrolledCourses={userEnrolledCourses} />
        </div>

        {/* Right/sidebar */}
        <div>
          <SideBanners />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
