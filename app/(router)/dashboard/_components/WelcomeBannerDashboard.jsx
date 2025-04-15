import Image from "next/image";
import React from "react";

function WelcomeBannerDashboard({ user }) {
  return (
    <div className="bg-purple-100 rounded-sm p-5 flex flex-col sm:flex-row gap-5 items-center sm:items-start text-center sm:text-left">
      <Image
        src="/hi-panda.png"
        alt="panda"
        width={150}
        height={150}
        className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
      />
      <div>
        <h2 className="text-[24px] sm:text-[32px] font-light leading-snug">
          Қош келдіңіз, <br />
          <span className="font-bold text-primary">{user?.fullName}</span>
        </h2>
        <h2 className="text-[14px] sm:text-[16px] font-light text-slate-500 mt-2 leading-relaxed">
          Қайда тоқтағаныңызды Білуге Кірісейік, <br />
          Оны жалғастырыңыз және прогресті жақсартыңыз
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBannerDashboard;
