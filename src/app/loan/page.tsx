'use client'
import { useState } from "react";
import LoanNav from "@/components/utils/LoanNav";
import Navbar from "@/components/utils/Navbar";

const Page = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleProfileCard = () => {
        console.log("Profile card handled");
    };
    
    const isOpenProfileCard = false;

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <>
            <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />
            <LoanNav />
            <h3 className="ml-7">Home / Loan</h3>
            <div className="w-full flex bg-gray-200">
                <div className="w-full">
                    <button 
                        onClick={handleDropdownToggle} 
                        className=" bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600
                         dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                        type="button"
                    >
                        Why Millions Choose Droom for Vehicle Loan? 
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L9 1" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                        <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-1/2 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                    <div >
                      <button className="flex bg-white items-center">
                      <h3>Lending Partners at Droom</h3>
                      <svg className="w-2.5 h-2.5 ms-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L9 1" />
                        </svg>
                        
                      </button>
                    </div>
                </div>

                <div className="">
                    <form className="w-full max-w-lg m-5 bg-white p-4 shadow-md">
                        {/* Form fields */}
                        {/* First Name and Last Name */}
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    First Name
                                </label>
                                <input 
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                    id="grid-first-name" 
                                    type="text" 
                                    placeholder="Jane"
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Last Name
                                </label>
                                <input 
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="grid-last-name" 
                                    type="text" 
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        
                        {/* Additional form fields (e.g., Email and Mobile No.) */}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Page;
