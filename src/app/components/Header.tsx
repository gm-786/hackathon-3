
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa"; // Import the icons


const Header = () => {
  return (
    <div>
      {/* Upper Header */}
      <div className="flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image src="/frame.png" alt="Upperheader Logo" width={24} height={24} />
        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="#" className="hover:text-gray-800">
            Find Link Store
          </Link>
          <Link href="Help" className="hover:text-gray-800">
            Help
          </Link>
          <Link href="/JoinUs" className="hover:text-gray-800">
            Join Us
          </Link>
          <Link href="/SignIn" className="hover:text-gray-800">
            Sign In
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left section (Logo) */}
        <div className="flex items-center">
          <Image src={"/Vector.png"} alt="Nike Logo" className="md:w-[78px] sm:w-[60px] w-[30px]" width={78} height={78}
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-bold md:text-[16px] sm:text-[14px] text-[10px]">
          {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
            (item) => (
              <Link
                href="#"
                key={item}
                className="hover:text-black whitespace-nowrap"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;



