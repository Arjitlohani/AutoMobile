import Navbar from '@/components/utils/Navbar'
import SignupDealer from '@/components/Forms/SignupDealer'
import React from 'react'
import Image from 'next/image';
import Footer from '@/components/utils/Footer';

const page = () => {
    const handleProfileCard = () => {
        console.log("Profile card handled");
      };
    
      const isOpenProfileCard = false;
  return (
    <>
    <div>
    <div className="fixed top-0 left-0 right-0  z-50 bg-white shadow-lg p-1">
      <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard}  />
      </div>
        <div className="relative w-full h-[570px] mt-[60px]"> {/* Adjust the height as needed */}
        <Image
          src="/images/ind-banner.jpg"
          alt="Banner Image"
          layout="fill" // Make the image fill the entire container
          objectFit="cover" // Cover the container area
          className="z-0"
        />
        <div className='absolute inset-0 flex justify-between items-center px-10 z-10'>
        <div className='w-3/5 text-white space-y-6'>
        <h1 className='text-4xl font-bold'>
        Be Part of India’s Largest Automobile
        Dealers Community
        </h1>
           
            </div>
            <div className='w-2/5 inset-0 flex justify-center z-10'>
            <SignupDealer/>
            </div>

           
        </div>
        
        
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default page
