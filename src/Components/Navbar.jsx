import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSearch, FaShoppingBasket, FaRegHeart, FaWallet, FaHeadset, FaTag, FaStar, FaUserFriends } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);

  function handleopemenue() {
    setopenmenu(!openmenu);
  }

  return (
    <div className="flex items-center justify-between max-w-[90%]  lg:max-w-[80%] mx-auto py-4">
      <div className="flex items-center gap-2">
        <AiOutlineMenu className="text-4xl cursor-pointer" onClick={handleopemenue} />
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
          Burger <span className="text-amber-300">BOss</span>
        </h1>
      </div>

      <div className="hidden lg:flex items-center bg-gray-200 rounded-full px-3 w-[300px] lg:w-[400px] xl:w-[500px]">
        <FaSearch size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search For Item"
          className="w-full bg-transparent p-2 text-black focus:outline-none"
        />
      </div>

      <button className="gap-2 bg-black text-white flex items-center rounded-2xl px-4 py-2 cursor-pointer hover:bg-blue-500 ">
        <FaShoppingBasket />
        Cart
      </button>

      {openmenu && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" onClick={handleopemenue}></div>
      )}

      <div
        className={`fixed w-[280px] h-screen z-20 top-0 left-0 bg-white shadow-md duration-300 transform ${
          openmenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <AiOutlineClose size={30} onClick={handleopemenue} className="absolute right-4 top-4 cursor-pointer" />

        <h2 className="text-2xl p-4">
          Best <span className="text-amber-300 font-bold">Eats</span>
        </h2>

        <div className="lg:hidden flex items-center bg-gray-200 rounded-full px-3 mx-4 w-[90%] mt-2">
          <FaSearch size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search For Item"
            className="w-full bg-transparent p-2 text-black focus:outline-none"
          />
        </div>

        <nav className="mt-4">
          <ul className="space-y-3 p-4 text-lg">
            <li className="flex items-center gap-3 p-2 cursor-pointer hover:text-amber-300">
              <FaShoppingBasket />
              Orders
            </li>
            <li className="flex items-center gap-3 p-2 cursor-pointer hover:text-amber-300">
              <FaRegHeart />
              Favourite
            </li>
            <li className="flex items-center gap-3 p-2 cursor-pointer hover:text-amber-300">
              <FaWallet />
              Wallet
            </li>
            <li className="flex items-center gap-3 p-2 cursor-pointer hover:text-amber-300">
              <FaHeadset />
              Help
            </li>
            <li className="flex items-center gap-3 p-2 cursor-pointer hover:text-amber-300">
              <FaTag />
              Promotions
            </li>
            <li className="flex items-center gap-3 p-2 cursor-pointer hover:text-amber-300">
              <FaStar />
              Best One
            </li>
            <li className="flex items-center gap-3 p-2 cursor-pointer hover:text-amber-300">
              <FaUserFriends />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
