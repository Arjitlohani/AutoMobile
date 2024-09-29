'use client';

import { Banner } from "@/components";
import DashboardNav from "@/components/utils/DashboardNav";


import Navbar from "@/components/utils/Navbar";
import { useState } from "react";

export default function Home() {
  const [isOpenProfileCard, setIsOpenProfileCard] = useState(false);

  const handelProfileCard = () => {
    setIsOpenProfileCard(!isOpenProfileCard);
  }

  return (
    <div className="flex flex-col min-h-screen">  {/* Full-height flex container */}
    <div>
      
    </div>
      <Navbar handelProfileCard={handelProfileCard} isOpenProfileCard={isOpenProfileCard} />
      <DashboardNav />
      
      <div className="flex flex-auto"> 
        <Banner />
      </div>

      
     
      
     
    </div>
  );
}
