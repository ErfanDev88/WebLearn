import React from "react";
import { Link } from "react-router-dom";

function UsefulLinksDropdown() {
  return (
    <div className="w-[170px] text-base z-50 rounded-lg shadow-4xl absolute top-3/4">
      <div className="w-full h-full flex flex-col justify-between items-center gap-3 p-2 rounded-lg dark:bg-slate-700/50 backdrop-blur-md">
        <Link
          to={"https://aparat.com/rezaiiacademy/"}
          className="w-full text-right p-3 cursor-pointer duration-200 text-[#64748b] dark:text-gray-200 font-light hover:bg-[#64748b]/20 rounded-md"
        >
          کانال آپارات
        </Link>
        <Link to={'/about'} className="w-full text-right p-3 cursor-pointer duration-200 text-[#64748b] dark:text-gray-200 font-light hover:bg-[#64748b]/20 rounded-md">
          درباره ما
        </Link>
        <Link to={'/contact-us'} className="w-full text-right p-3 cursor-pointer duration-200 text-[#64748b] dark:text-gray-200 font-light hover:bg-[#64748b]/20 rounded-md">
          ارتباط با ما
        </Link>
      </div>
    </div>
  );
}

export default UsefulLinksDropdown;
