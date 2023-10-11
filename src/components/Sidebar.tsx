import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
      <div className="flex flex-col items-center mt-3 border-t border-gray-700">
        <a
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <Image src="/home.svg" width={25} height={25} alt="home icon" />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
        >
          <Image src="/search.svg" alt="search icon" width={25} height={25} />
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-12 h-12 mt-3 rounded hover:bg-gray-700 hover:text-gray-300"
        >
          <Image src="/recents.svg" alt="recent icon" width={25} height={25} />
        </a>
        <a
          href="#"
          className="flex  items-center justify-center w-12 h-12 mt-3  rounded hover:bg-gray-700 hover:text-gray-300"
        >
          <Image
            src="/favourites.svg"
            alt="favourite icon"
            width={25}
            height={25}
          />
        </a>
      </div>
      <a
        className="flex items-center justify-center w-16 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
        href="#"
      >
        <Image src="/user.svg" alt="user icon " width={25} height={25} />
      </a>
    </div>
  );
};

export default Sidebar;
