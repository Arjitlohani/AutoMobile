// Page.tsx
'use client'
import { useState, ChangeEvent } from "react";
import LoanNav from "@/components/utils/LoanNav";
import Navbar from "@/components/utils/Navbar";
import CustomInput from "@/components/common/CustomeInput";


const Page = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [vehicleType, setVehicleType] = useState(false);

    const handleProfileCard = () => {
        console.log("Profile card handled");
    };
    
    const isOpenProfileCard = false;

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };
    const handleVehicleType = () => {
        setVehicleType((prev) => !prev);
    };

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
        if (e.target.value) {
            setError('');
        } else {
            setError('Please enter something');
        }
    };

    return (
        <div className="max-w-screen overflow-hidden">
            <Navbar handelProfileCard={handleProfileCard} isOpenProfileCard={isOpenProfileCard} />
            <LoanNav />
            <h3 className="ml-7">Home / Loan</h3>
            <div className="w-full flex bg-gray-200">
                <div className="w-full">
                    <button 
                        onClick={handleDropdownToggle} 
                        className="bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 
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
                    <div>
                      <button className="flex bg-white items-center">
                        <h3>Lending Partners at Droom</h3>
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L9 1" />
                        </svg>
                      </button>
                    </div>
                </div>

                <div className="w-full max-w-screen px-4">
                    <form className="w-full max-w-lg m-5 bg-white p-4 shadow-md">
                        <h1 className="text-center text-[24px] m-3 text-gray-600">Apply for Loan & Take Your Vehicle Home</h1>
                        {/* Form fields */}
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <CustomInput 
                                    id="firstname" 
                                    label="First Name" 
                                    value={firstname} 
                                    onChange={handleInputChange(setFirstname)} 
                                    error={error} 
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <CustomInput 
                                    id="lastname" 
                                    label="Last Name" 
                                    value={lastname} 
                                    onChange={handleInputChange(setLastname)} 
                                    error={error} 
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <CustomInput 
                                    id="email" 
                                    label="Email" 
                                    value={email} 
                                    onChange={handleInputChange(setEmail)} 
                                    error={error} 
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <CustomInput 
                                    
                                    id="mobile" 
                                    label="Mobile No" 
                                    value={mobile} 
                                    onChange={handleInputChange(setMobile)} 
                                    error={error} 
                                />
                            </div>
                        </div>
                        <button 
                        onClick={handleVehicleType} 
                        className=" -z-10 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600
                        dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                        type="button"
                    >
                        Vechile Type 
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1L5 5L9 1" />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {vehicleType && (
                        <div id="vehicleType" className="z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-1/2 dark:bg-gray-700">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <h3 className="block px-4 py-2 hover:bg-blue-300 dark:hover:bg-gray-600 dark:hover:text-white">Used</h3>
                                </li>
                                <li>
                                    <h3 className="block px-4 py-2 hover:bg-blue-300 dark:hover:bg-gray-600 dark:hover:text-white">New</h3>
                                </li>
                                
                            </ul>
                        </div>
                    )}
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
  
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
