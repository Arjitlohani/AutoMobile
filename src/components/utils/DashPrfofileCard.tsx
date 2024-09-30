import Link from 'next/link';
import React from 'react';

const DashPrfofileCard: React.FC = () => {
  return (
    <div className="w-[350px] p-6 bg-white border border-gray-200 rounded shadow-lg max-w-full">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Hi, Guest
        </h5>
      </a>
      <p>Login to get your dream vehicle</p>
      
      <Link href="/login"
        className="inline-flex items-center justify-center w-full px-3 py-2 mt-4 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        style={{ padding: '10px' }}
      >
        Login
        
      </Link>
      <div className='mt-5 flex justify-between text-left p-2'>
        <Link href="Signup/signup-individual" className='text-blue-500'>Create an individual account</Link>

        <Link href="Signup/signup-dealer" className='text-blue-500'>Create an Dealer account</Link>

      </div>
    </div>
  );
}

export default DashPrfofileCard;
