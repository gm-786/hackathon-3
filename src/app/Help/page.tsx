import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import { FaSearch } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="uppercase text-xl font-bold mt-8">Get Help</h2>
      <div className="relative flex px-4 py-3 rounded-md w-[30%] border-2 border-gray-300 mt-4 justify-between">
        <input
          className="focus-visible:outline-none w-[64%]"
          type="text"
          placeholder="What can we help you with?"
        />
        <FaSearch className="absolute right-3 top-4. text-gray-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-8 md:px-16 py-8 bg-white text-gray-800">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-9 md:pr-6 border-r border-gray-300">
          <h2 className="text-2xl font-bold mb-4">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </h2>
          <p className="mb-4">
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
            <li>
              PayTM or a local credit/debit card via PAN information at checkout.
            </li>
            <li>Apple Pay</li>
          </ul>
          <p className="mb-6">
            <Link href="#" className="underline font-semibold">
              Nike Members
            </Link>{" "}
            can store multiple debit or credit cards for faster checkout. If
            you are not a Member,{}
            <Link href="#" className="underline font-semibold">
              join us
            </Link>{" "}
            today.
          </p>
          <div className="flex mt-4 gap-4">
            <Button text="Join Us" classNames="rounded-full py-2" />
            <Button text="Shop Nike" classNames="rounded-full py-2" />
          </div>
          {/* FAQs */}
          <h3 className="text-xl font-semibold mb-4 mt-6">FAQs</h3>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">
              Does my card need international purchases enabled?
            </h4>
            <p>
              Yes, ensure your bank enables international purchases. Some banks
              may charge a small fee for international orders.
            </p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">
              Can I pay for my order with multiple methods?
            </h4>
            <p>No, payment for Nike orders can`&apos;`t be split between methods.</p>
          </div>
          <div className="mb-6">
            <h4 className="text-lg font-bold mb-2">
              Why don`&apos;`t I see Apple Pay as an option?
            </h4>
            <p>
              Use a compatible Apple device, signed in to iCloud with a
              supported card in your Wallet, and Safari browser.
            </p>
          </div>
          {/* Thumbs Section */}
          <div className="mb-6">
            <p className="mb-2">Was this answer helpful?</p>
            <div className="flex space-x-2">
              <Image
                src="/images/thumbsup.png"
                alt="Thumbs Up"
                width={24}
                height={24}
                className="cursor-pointer"
              />
              <Image
                src="/images/thumbsdown.png"
                alt="Thumbs Down"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </div>
          </div>
          <h4 className="text-lg font-bold mt-8 mb-4 text-gray-500">RELATED</h4>
          <ul className="space-y-2 ml-6">
            <li>
              <Link href="#" className="underline font-bold">
                WHAT ARE NIKE`&apos;`S DELIVERY OPTIONS?
              </Link>
            </li>
            <li>
              <Link href="#" className="underline font-bold">
                HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
              </Link>
            </li>
          </ul>
        </div>
        {/* Right Content */}
        <div className="col-span-12 md:col-span-3 flex flex-col space-y-8">
          <h2 className="uppercase font-bold text-xl text-center">Contact Us</h2>
          {/* Phone Section */}
          <div className="flex flex-col items-center space-y-2 text-center ">
            <Image src="/images/mobileimage.png" alt="Phone" width={40} height={40} />
            <p className="font-bold">000 800 919 0566</p>
            <p>Products & Orders: 24 hours a day,</p>
                <p> 7 days a week </p>
            <p>Company Info & Enquiries: 07:30 -</p>
            <p>16:30, Monday - Friday</p>
          </div>
          {/* Chat Section */}
          <div className="flex flex-col items-center space-y-4 text-center font-bold">
            <Image src="/images/icon1.png" alt="Chat" width={40} height={40} />
            <p>24 hours a day</p>
            <p>7 days a week</p>
          </div>
          {/* Email Section */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <Image src="/images/icon2.png" alt="Email" width={40} height={40} />
            <p>We`&apos;`ll reply within five business days</p>
          </div>
          {/* Store Locator */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <Image src="/images/icon3.png" alt="Store Locator" width={40} height={40} />
            <p className="font-semibold">STORE LOCATOR</p>
            <p>Find Nike retail stores near you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
