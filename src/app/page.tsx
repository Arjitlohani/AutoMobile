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
    <div>
      <Navbar handelProfileCard={handelProfileCard} isOpenProfileCard={isOpenProfileCard} />
      <DashboardNav />
      <Banner />
    </div>
  );
}
