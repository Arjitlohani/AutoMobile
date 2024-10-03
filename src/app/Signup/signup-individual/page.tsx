import React from 'react';
import Image from "next/image";
import Navbar from '@/components/utils/Navbar';
import IndSiginCard from '@/components/utils/IndSiginCard';
import Footer from '@/components/utils/Footer';

const Page = () => {
  const handleProfileCard = () => {
    console.log("Profile card handled");
  };

  const isOpenProfileCard = false;

  return (
    <div>
      {/* Navbar */}
      <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />

      {/* Background Image Wrapper */}
      <div className="relative w-full h-[570px]"> {/* Adjust the height as needed */}
        <Image
          src="/images/ind-banner.jpg"
          alt="Banner Image"
          layout="fill" // Make the image fill the entire container
          objectFit="cover" // Cover the container area
          className="z-0"
        />

        {/* Content on top of the background */}
        <div className="absolute inset-0 flex justify-between items-center px-10 z-10">
          {/* Left Column: Text and Icons */}
          <div className="w-1/2 text-white space-y-6">
            <h1 className="text-4xl font-bold">Why Droom for Individuals</h1>
            <p className="text-xl">Get updates on WhatsApp</p>
            <div className="flex items-center space-x-4">
              
              <p>Connect with us on WhatsApp for the latest updates.</p>
            </div>
          </div>

          {/* Right Column: IndSiginCard */}
          <div className="w-1/2 flex justify-center">
            <IndSiginCard />
          </div>
        </div>
      </div>
      <Footer/>
      
    </div>
    
  );
};

export default Page;
