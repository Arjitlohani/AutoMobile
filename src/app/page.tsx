'use client'

// import Test from "@/components/landingpage/test";
import { Banner } from "@/components";
import DashboardNav from "@/components/utils/DashboardNav";
import Footer from "@/components/utils/Footer";
import Navbar from "@/components/utils/Navbar";






export default function Home() {
  const handleProfileCard = () => {
    console.log("Profile card handled");
  };

  const isOpenProfileCard = false;
  
  return (
    <>
    
    <div>
      <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />
      <DashboardNav/>
      <Banner/>
      {/* <Test/> */}
      <Footer/>
    
    </div>
    </>
  );
}
