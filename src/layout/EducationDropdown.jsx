import React from "react";
import reactLogo from "../assets/png/react-logo.png";
import tailwindLogo from "../assets/png/tailwindcss-logo.png";
import jQueryLogo from "../assets/png/jQuery-logo.png";
import { Link } from "react-router-dom";

function EducationDropdown() {
  return (
    <div className="w-[400px] bg-white dark:bg-slate-700/50 backdrop-blur-md text-base z-50 rounded-lg shadow-4xl absolute top-3/4 flex flex-wrap justify-between items-center p-3">
      <div className="w-[50%]">
        <Link
          to={"/skills/learn-react-js"}
          className="flex justify-center p-3 cursor-pointer duration-200 rounded-md hover:bg-[#64748b]/20"
        >
          <img src={reactLogo} className="w-18 h-10" alt="آموزش ReactJS" />

          <div className="flex flex-col justify-between mr-2">
            <h2 className="text-[#64748b] text-base font-semibold dark:text-gray-200">
              آموزش ری اکت
            </h2>
            <span className="text-[#64748b] leading-relaxed text-xs font-light dark:text-gray-200">
              فیلم های آموزشی با مربیانی مجرب!
            </span>
          </div>
        </Link>
      </div>
      <div className="w-[50%]">
        <Link
          to={"/skills/learn-tailwindcss"}
          className="flex justify-center p-3 cursor-pointer duration-200 rounded-md hover:bg-[#64748b]/20"
        >
          <img
            src={tailwindLogo}
            className="w-15 h-7"
            alt="آموزش Tailwindcss"
          />

          <div className="flex flex-col justify-between mr-2">
            <h2 className="text-[#64748b] text-base font-semibold dark:text-gray-200">
              آموزش تیلویند
            </h2>
            <span className="text-[#64748b] leading-relaxed text-xs font-light dark:text-gray-200">
              فیلم های آموزشی با مربیانی مجرب!
            </span>
          </div>
        </Link>
      </div>
      <div className="w-[50%]">
        <Link
          to={"/skills/learn-jquery"}
          className="flex justify-center p-3 cursor-pointer duration-200 rounded-md hover:bg-[#64748b]/20"
        >
          <img src={jQueryLogo} className="w-18 h-10" alt="آموزش Jquery" />

          <div className="flex flex-col justify-between mr-2">
            <h2 className="text-[#64748b] text-base font-semibold dark:text-gray-200">
              آموزش جی کوئری
            </h2>
            <span className="text-[#64748b] leading-relaxed text-xs font-light dark:text-gray-200">
              فیلم های آموزشی با مربیانی مجرب!
            </span>
          </div>
        </Link>
      </div>
      <Link to={"/skills"} className="w-[50%] flex justify-center p-3 cursor-pointer duration-200 rounded-md hover:bg-[#64748b]/20">
        <div>
          <button className="w-full h-full">بیشتر...</button>
        </div>
      </Link>
    </div>
  );
}

export default EducationDropdown;
