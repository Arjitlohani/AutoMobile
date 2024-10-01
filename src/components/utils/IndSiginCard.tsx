'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';


const IndSiginCard = () => {
    const [isUpdateonWhatapp, setIsUpdateonWhatapp] = useState(false);
     const handleUpdateonWhatapp = () => {
        setIsUpdateonWhatapp(!isUpdateonWhatapp);
     }
  return (
    <>
    <div>
        
        <div className='bg-blue-600 text-white flex items-center justify-center h-24'>
  <div className="text-center">
    <h2>Looks like you are new here!</h2>
    <h2>Sign up to get started</h2>
  </div>
</div>

            {/* Pop-up card */}
            <form className="bg-white  shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Create Your Individual Account</h2>
            <div className="flex mb-4 space-x-4">
  {/* Email */}
  <div className="w-1/2">
    <input 
      type="email" 
      name="floating_email" 
      id="floating_email" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder="Email" 
      required 
    />
  </div>

  {/* Password */}
  <div className="w-1/2">
    <input 
      type="password" 
      name="floating_password" 
      id="floating_password" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder="Password" 
      required 
    />
  </div>
</div>
<div className="flex mb-4 space-x-4">
  {/* Email */}
  <div className="w-1/2">
    <input 
      type="email" 
      name="floating_email" 
      id="floating_email" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder="Mobile Number" 
      required 
    />
  </div>

  {/* Password */}
  <div className="w-1/2">
    <input 
      type="confirm-password" 
      name="floating_password" 
      id="floating_password" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder="confirm password" 
      required 
    />
  </div>
</div>

            <p className='text-gray-600 text-sm m-2'>Please verify both your mobile number and email address through One Time Password</p>
            <div className="flex items-center mb-4 gap-2 p-3">
  {/* Toggle Button */}
  <div className="flex flex-col items-center mb-2">
    {isUpdateonWhatapp ? (
      <Image
        src="/buttons/off-button.png"
        alt="off-button"
        width={50}
        height={50}
        onClick={handleUpdateonWhatapp}
        className="mb-1"
      />
    ) : (
      <Image
        src="/buttons/on-button.png"
        alt="on-button"
        width={50}
        height={50}
        onClick={handleUpdateonWhatapp}
        className="mb-1"
      />
    )}
  </div>

  {/* Text and Icon */}
  
    <p className='text-gray-600 text-sm'>Get updates on WhatsApp</p>
    <button className='w-[20%] '><SocialIcon  className='' network="whatsapp" /></button>
    
 
</div>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-[60px] rounded-xl w-[250px]">Create Account</button>
                

            
            </form>
            
        </div>
        
      
</>
  )
}

export default IndSiginCard
