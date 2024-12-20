'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleClick=()=>{
    setIsReadMore(!isReadMore);
  }
  return (
    <div >
      <div className='flex w-full bg-slate-100 h-[130px] gap-7 justify-center p-5 '>
        <div  >
          <div className='flex gap-4'>
          <Image className=' ml-3 hover:scale-125  ' src='/images/playstore.webp' alt='appstore' width={10} height={2} />
          <FaApple className=' hover:scale-125' />
          </div>
          <h1>Download App</h1>
        </div>
        <div>
        <SocialIcon id='whatsappicon' style={{height:"35px" , width:"35px"}}  className='mt-1 hover:scale-125 ' network="youtube" />
        <h1>Watch Us</h1>
          
        </div>
        <div>
        <div className='flex gap-4'>
        <SocialIcon id='whatsappicon' style={{height:"35px" , width:"35px"}}  className='mt-1 hover:scale-125 ' network="facebook" />
        <SocialIcon id='whatsappicon' style={{height:"35px" , width:"35px"}}  className='mt-1 hover:scale-125 ' network="twiter" />
        <SocialIcon id='whatsappicon' style={{height:"35px" , width:"35px"}}  className='mt-1 hover:scale-125 ' network="pinterest" />
        <SocialIcon id='whatsappicon' style={{height:"35px" , width:"35px"}}  className='mt-1 hover:scale-125 ' network="linkedin" />
        <SocialIcon id='whatsappicon' style={{height:"35px" , width:"35px"}}  className='mt-1 hover:scale-125 ' network="instagram" />
          
        </div>
        <h1>Follow Us</h1>
        </div>
        <div>
        <input type="text" placeholder="Enter Email" className='border-2 border-black rounded-2xl h-9' />
          <h1>Submit Your Email for Latest Offers</h1>
        </div>
        <div className='mb-4'>
        <Image
        src='/images/navbann.webp'
        alt="navCert"
        height="80"
        width="65"
        
      />
        </div>

        </div>
      <footer className="bg-gray-200 text-gray-700 py-10">
        <div className='flex'>
          <div className='flex-1'>
            
          </div>
          <div className='flex-2'></div>
          <div className='flex-3'></div>
          <div className='flex-4'></div>

        </div>
        <div className="container mx-auto px-4">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-left font-bold mb-4">Droom for Individuals</h4>
              <ul className="space-y-2">
                <li>Buy | Sell | Exchange</li>
                <li>Loan | Get Insurance</li>
                <li>Buy Certification Services</li>
                <li>How Droom Works</li>
                <li>How Droom Builds Trust</li>
                <li>FAQs</li>
                <li>Buyers Guide</li>
                <li>Droom Discovery</li>
                <li>Vehicle Finder</li>
                <li>Make Most of Droom</li>
                <li>Tips and Advice</li>
                <li>Buyer Surety</li>
                <li>Individual Fee and Charges</li>
                <li>Return, Refund and Cancellation Policy</li>
                <li>Testimonials</li>
                <li>Concierge</li>
              </ul>
            </div>

            <div>
              <h4 className="text-left font-bold mb-4">Droom for Dealers & OEM</h4>
              <ul className="space-y-2">
                <li>Sign-Up As Dealer And Seller</li>
                <li>ProSeller Services: Dealer | OEM</li>
                <li>Plans & Pricing</li>
                <li>How Droom works for Dealers</li>
                <li>Why Droom</li>
                <li>Why E-Commerce</li>
                <li>FAQs</li>
                <li>Seller Policies & Rules</li>
                <li>Dealer Fee & Charges</li>
                <li>Dealer Tips & Advice</li>
                <li>Payment Policies</li>
                <li>Seller Screening System</li>
                <li>StoreManager Highlights</li>
                <li>Droom University</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div>
              <h4 className="text-left font-bold mb-4">Droom for Business</h4>
              <ul className="space-y-2">
                <li>Automobile Certification Services</li>
                <li>E-Commerce Solutions</li>
                <li>Advertise with DroomHot</li>
                <li>Marketing Services</li>
                <li>Financial Services</li>
                <li>Industry Research</li>
              </ul>
            </div>

            <div>
              <h4 className="text-left font-bold mb-4">About Us</h4>
              <ul className="space-y-2">
                <li>About Droom</li>
                <li>Careers</li>
                <li>Press Kit</li>
                <li>Blogs</li>
                <li>News</li>
                <li>Videos</li>
                <li>Investor Relations</li>
                <li>Impact</li>
                <li>Droom Labs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-1'>
            <h3 className='mt-4 text-lg md:text-xl'><strong>About Dhroom</strong></h3>
            {isReadMore ? (
  <div className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]  space-y-2 '>
    <p className="mb-4">
      Droom is a tech and AI-driven 21st-century futuristic online platform revolutionizing the Indian automotive market. Droom is the only online automobile platform in India that sells both used and new 
      automobiles and everything from bicycles to planes. Droom has helped 2.5 million+ customers buy,
      sell, finance, insure, or inspect/certify vehicles with trust, convenience, and peace of mind backed by Droom’s managed marketplace platform and proprietary tech & AI-driven ecosystem of products and services.
    </p>

    <p className="mb-4">
      Droom offers India’s largest selection of automobiles online with over 250k automobiles across 
      12 categories in 1,174 cities with trust, selection, low price, and convenience second to none.
      Every vehicle sold at Droom goes through a proprietary and technology-driven rigorous 1,100-point 
      inspection and certification for its condition, pricing, and history. Because Droom invests in technology and AI vs. physical dealerships and people-heavy operations, the automobiles sold at Droom are cheaper than other options available 
      to consumers. Droom offers loans, insurance, escrow payments, warranty, return, last-mile delivery, 
      and ownership transfer. For individual sellers, Droom offers QuickSell, a highly innovative, transparent, and convenient solution to sell or exchange pre-owned vehicles at lightning-fast speed and fair price via our vast network of 23k+ dealers in 1,174 cities.
    </p>

    <p className="mb-4">
      Droom has built a highly advanced managed marketplace platform online that is category, geography, and condition agnostic offering unparalleled selection. In order to build trust and convenience, Droom has built a proprietary technology and AI-driven ecosystem of products and services including Orange Book Value 
      (algorithmic pricing engine | 776 Mn+ Queries I US Patent), ECO (tech, AI and IoT driven 1,100+ points vehicle inspection, 16k+ auto mechanics in 1k+ cities), History (India’s largest repository for used vehicle historical records | 
      Database of 250 Mn+ vehicles | up to 50 vehicle historical records), Droom Fintech (Loan & Insurance), and Velocity (last mile fulfillment and delivery services). Droom’s tech stack is used as SaaS by some of the largest enterprises in the automobile sector including HDFC, IDFC, Yamaha, TVS, Toyota, etc.
    </p>

    <p className="mb-4">
      <strong>Disclaimer:</strong> Please be aware that certain individuals might approach you by falsely presenting themselves as our employees, affiliates, agents, or representatives. Under this false pretense, they might try to gain access to your personal information or to acquire money or other valuables from you by offering to sell, buy, invest, review listings, 
      finance, or any other business opportunities by claiming that they are contacting you on our (Droom’s) behalf. The contacting individual or organization may, for example, invite you to participate in an investment opportunity. Such fraudulent offers and claims are usually received via Telegram, WhatsApp, email, text message, etc. Please note that Droom does not have any policy to ask for any investment or provide money into your accounts for any sweepstakes, contests, reviews, schemes, or lotteries. Someone/some individuals are impersonating representatives of Droom and asking for advance money and may even send some money into your account for sweepstakes or contests lotteries or deals. These claims and offers are fraudulent and invalid, and you are strongly advised to exercise great caution and disregard such offers and invitations. Please note that under no circumstances shall, Droom Technology Private Limited and/or its affiliates and subsidiaries, Founder/CEO, directors, or employees be held liable or responsible for any claims, losses, damages, expenses, or other inconvenience resulting from or in any way connected to the actions of these imposters. Please be alert and do not fall for such traps.
    </p>

    <button className="text-blue-500" onClick={handleClick}>Read less</button>
  </div>
) : (
  <div>
    <p className="mb-4">
      Droom is a tech and AI-driven 21st-century futuristic online platform revolutionizing the Indian automotive market. Droom is the only online automobile platform in India that sells both used and new 
      automobiles and everything from bicycles to planes. Droom has helped 2.5 million+ customers buy,
      sell, finance, insure, or inspect/certify vehicles with trust, convenience, and peace of mind backed by Droom’s managed marketplace platform and proprietary tech & AI-driven ecosystem of products and services.
    </p>

    <p className="mb-4">
      Droom offers India’s largest selection of automobiles online with over 250k automobiles across 
      12 categories in 1,174 cities with trust, selection, low price, and convenience second to none.
      Every vehicle sold at Droom goes through a proprietary and technology-driven rigorous 1,100-point 
      inspection and certification for its condition, pricing, and history. Because Droom invests in technology and AI vs. physical dealerships and people-heavy operations, the automobiles sold at Droom are cheaper than other options available 
      to consumers. Droom offers loans, insurance, escrow payments, warranty, return, last-mile delivery, 
      and ownership transfer. For individual sellers, Droom offers QuickSell, a highly innovative, transparent, and convenient solution to sell or exchange pre-owned vehicles at lightning-fast speed and fair price via our vast network of 23k+ dealers in 1,174 cities.
    </p>

    <button className="text-blue-500" onClick={handleClick}>Read more</button>
  </div>
)}

            

          </div>

          {/* Footer Bottom */}
          <div className="mt-10 text-center">
            <p>&copy; 2024 Droom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
