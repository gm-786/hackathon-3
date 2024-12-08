import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="bg-black text-[#FFFFFF] py-8 px-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm mt-6">
            <li><Link href="#" className="hover:underline mt-6">BECOME A MEMBER</Link></li>
            <li><Link href="#" className="hover:underline mt-6">SIGN UP FOR EMAIL</Link></li>
            <li><Link href="#" className="hover:underline mt-6">Send Us Feedback</Link></li>
            <li><Link href="#" className="hover:underline mt-6">STUDENT DISCOUNTS</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li><Link href="#" className="hover:underline">Order Status</Link></li>
            <li><Link href="#" className="hover:underline">Delivery</Link></li>
            <li><Link href="#" className="hover:underline">Returns</Link></li>
            <li><Link href="#" className="hover:underline">Payment Options</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold mb-4 ">ABOUT NIKE</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li><Link href="#" className="hover:underline">News</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Investors</Link></li>
            <li><Link href="#" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>

        {/* Column 4 (Social Media Icons) */}
        <div className="flex justify-start lg:justify-end items-start gap-4 text-[#7E7E7E]">
          <a href="#" aria-label="Twitter"><FaTwitter className="text-lg cursor-pointer hover:text-gray-400" /></a>
          <a href="#" aria-label="Facebook"><FaFacebook className="text-lg cursor-pointer hover:text-gray-400" /></a>
          <a href="#" aria-label="YouTube"><FaYoutube className="text-lg cursor-pointer hover:text-gray-400" /></a>
          <a href="#" aria-label="Instagram"><FaInstagram className="text-lg cursor-pointer hover:text-gray-400" /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
        {/* Country and Copyright */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <IoLocationOutline className="text-lg text-white" />
          <p className='text-white'>India</p>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          <Link href="#" aria-label="Guides" className="hover:underline">Guides</Link>
          <Link href="#" aria-label="Terms of Sale" className="hover:underline">Terms of Sale</Link>
          <Link href="#" aria-label="Terms of Use" className="hover:underline">Terms of Use</Link>
          <Link href="#" aria-label="Nike Privacy Policy" className="hover:underline">Nike Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;