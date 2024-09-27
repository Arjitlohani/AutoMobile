import Image from 'next/image';
import Link from 'next/link';
import { CgProfile } from 'react-icons/cg';
import { CiLocationOn } from 'react-icons/ci';
import { FaHeadset, FaSearch } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { SocialIcon } from 'react-social-icons';
import DashPrfofileCard from './DashPrfofileCard';

// Define the props interface
interface NavbarProps {
  handelProfileCard: () => void;  // Function type for toggling profile card
  isOpenProfileCard: boolean;     // Boolean type for showing profile card
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="relative"> {/* Make this div relative to position the image inside */}
      <header className='bg-white shadow-md sticky w-full z-10'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 w-full'>
          <div className='flex items-center space-x-3'>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt="logo"
                height="100"
                width="100"
                className="md:w-[5.5rem] lg:w-[130px] lg:h-12"
              />
            </Link>
            <div className="hidden lg:flex flex-col">
              <p>Nepal Most Trusted</p>
              <p>MoterPlace</p>
            </div>
          </div>

          <form id='search' className="bg-slate-100 p-3 rounded-lg flex items-center md:w-[237px] w-full max-w-xs">
            <input
              type='text'
              placeholder='Search...'
              className="bg-transparent focus:outline-none w-full"
            />
            <FaSearch className='text-blue-700' />
          </form>

          <button className='flex items-center bg-white border border-gray-950 rounded-lg px-4 py-2 mx-4 hover:bg-gray-300'>
            <CiLocationOn className='mr-2' /> Location
          </button>

          <ul className='flex gap-4 items-center'>
            <li id='whatsapp'><SocialIcon className='w-4 h-4' network="whatsapp" /></li>
            <li><IoCartOutline className='w-9 h-8' /></li>
            <li><FaHeadset className='w-9 h-8' /></li>

            {/* Profile Icon with Hover-triggered Profile Card */}
            <li className='relative group'>
              <CgProfile className='w-9 h-8 cursor-pointer' />
              {/* Profile Card shows on hover */}
              <div className="absolute hidden group-hover:block mt-2 right-0 z-50"> 
                {/* z-50 ensures the profile card appears above other elements */}
                <div className="relative z-50">
                  <DashPrfofileCard />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </header>

      {/* Add the overlapping navCert image */}
      <Image
        src='/images/navCert.png'
        alt="navCert"
        height="80"
        width="65"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block z-30" // Position at the end of the navbar, centered vertically
      />
    </div>
  );
}

export default Navbar;
