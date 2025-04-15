import Image from "next/image";
import React from "react";

function WelcomeBannerDashboard({ user }) {
  return (
    <div className="bg-purple-100 rounded-sm p-5 flex gap-5 items-center">
      <Image src={"/hi-panda.png"} alt="panda" width={150} height={150} />
      <div>
        <h2 className="text-[32px] font-light">
          Қош келдіңіз, <br></br>
          <span className="font-bold text-primary">{user?.fullName}</span>
        </h2>
        <h2 className="text-[16px] font-light text-slate-500">
          Қайда тоқтағаныңызды Білуге Кірісейік, <br></br>
          Оны жалғастырыңыз және прогресті жақсартыңыз
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBannerDashboard;
