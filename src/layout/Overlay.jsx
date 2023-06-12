import React, { useState } from "react";
import UsefulLinksDropdown from "./UsefulLinksDropdown";
import EducationDropdown from "./EducationDropdown";
import Logo from "../assets/png/Logo.png";
import { Link } from "react-router-dom";

function Overlay() {
  const [educationDropdown, setEducationDropdown] = useState(false);
  const educationDropdownHandler = () => {
    setEducationDropdown(!educationDropdown);
  };

  const [usefulLinksDropdown, setUsefulLinksDropdown] = useState(false);
  const usefulLinksDropdownHandler = () => {
    setUsefulLinksDropdown(!usefulLinksDropdown);
  };

  return (
    <div className="flex flex-col justify-between items-center w-[75%] h-screen fixed top-0 right-0 bg-white/60 dark:bg-slate-800/70 backdrop-blur-lg shadow-5xl pb-14 pt-10 px-5 md:hidden transition-all duration-500 z-50">
      <div className="w-full flex justify-center items-center">
        <Link to={"/"} className="flex justify-center items-center">
          <img src={Logo} className="w-[80%]" alt="وب لرن" />
        </Link>
      </div>

      <ul className="w-full flex flex-col justify-between items-center gap-y-5">
        <a
          className="cursor-pointer text-gray-600 duration-200 hover:text-gray-500 dark:text-gray-200 hover:dark:text-gray-300 font-light text-lg"
        >
          خانه
        </a>
        <a>
          <button
            className="text-gray-600 duration-200 hover:text-gray-500 dark:text-gray-200 hover:dark:text-gray-300 font-light text-lg flex text-center justify-evenly items-center relative"
            type="button"
            onClick={educationDropdownHandler}
          >
            دوره های آموزشی
            <svg
              className="w-9 h-9 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90992 8.71016 9.90992 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90992 15.7702 9.90992 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z"
                fill="#4B5563"
                className="dark:fill-gray-200"
              />
            </svg>
            {educationDropdown && <EducationDropdown />}
          </button>
        </a>
        <Link
          to={'/blogs'}
          className="cursor-pointer text-gray-600 duration-200 hover:text-gray-500 dark:text-gray-200 hover:dark:text-gray-300 font-light text-lg"
        >
          مقالات
        </Link>
        <a>
          <button
            className="text-gray-600 duration-200 hover:text-gray-500 dark:text-gray-200 hover:dark:text-gray-300 font-light text-lg flex text-center justify-evenly items-center relative"
            type="button"
            onClick={usefulLinksDropdownHandler}
          >
            لینک های مفید
            <svg
              className="w-9 h-9 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0002 15.0099C11.8102 15.0099 11.6202 14.9399 11.4702 14.7899L7.94016 11.2599C7.65016 10.9699 7.65016 10.4899 7.94016 10.1999C8.23016 9.90992 8.71016 9.90992 9.00016 10.1999L12.0002 13.1999L15.0002 10.1999C15.2902 9.90992 15.7702 9.90992 16.0602 10.1999C16.3502 10.4899 16.3502 10.9699 16.0602 11.2599L12.5302 14.7899C12.3802 14.9399 12.1902 15.0099 12.0002 15.0099Z"
                fill="#4B5563"
                className="dark:fill-gray-200"
              />
            </svg>
            {usefulLinksDropdown && <UsefulLinksDropdown />}
          </button>
        </a>
      </ul>
      <form
        action="#"
        className="w-full h-12 flex justify-start items-center bg-gray-200 rounded-lg pr-5 dark:bg-slate-700"
        id="searchForm"
      >
        <svg
          className="dark:stroke-gray-200"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="#64748B"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:stroke-gray-200"
          />
          <path
            d="M22 22L20 20"
            stroke="#64748B"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="dark:stroke-gray-200"
          />
        </svg>

        <input
          type="text"
          className="bg-transparent border-none pr-3 placeholder:text-xs placeholder:font-thin focus:outline-none text-sm text-gray-500 dark:placeholder:text-gray-300 dark:text-gray-300 flex justify-center items-center rounded-2xl"
          id="navSearchInput"
          placeholder="دنبال چی می گردی ؟"
        />
      </form>
    </div>
  );
}

export default Overlay;
