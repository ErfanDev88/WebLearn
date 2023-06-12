import React, { useState } from "react";
import Overlay from "./Overlay";
import ShowMenu from "./ShowMenu";
import EducationDropdown from "./EducationDropdown";
import UsefulLinksDropdown from "./UsefulLinksDropdown";
import SearchBar from "./SearchBar";
import Logo from "../assets/png/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [menuToggler, setMenuToggler] = useState(false);
  const toggleHandler = () => {
    setMenuToggler(!menuToggler);
  };

  const [educationDropdown, setEducationDropdown] = useState(false);
  const educationDropdownHandler = () => {
    setEducationDropdown(!educationDropdown);
  };

  const [usefulLinksDropdown, setUsefulLinksDropdown] = useState(false);
  const usefulLinksDropdownHandler = () => {
    setUsefulLinksDropdown(!usefulLinksDropdown);
  };

  return (
    <>
      <nav data-aos="fade-down" className="w-full p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-3xl font-bold flex justify-between items-center mt-10">
        <Link to={"/"} className="md:w-1/4 w-1/2">
          <img src={Logo} className="w-full" alt="وب لرن" />
        </Link>
        <ShowMenu toggleHandler={toggleHandler} />
        <ul className="w-2/5 md:flex justify-between items-center hidden">
          <Link to={'/'}
            className="cursor-pointer text-gray-600 duration-200 hover:text-gray-500 dark:text-gray-200 hover:dark:text-gray-300 font-light text-base"
          >
            خانه
          </Link>
          <a>
            <button
              className="text-gray-600 duration-200 hover:text-gray-500 dark:text-gray-200 hover:dark:text-gray-300 font-light text-base flex text-center justify-evenly items-center relative"
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
            className="cursor-pointer duration-200 dark:text-gray-200 hover:dark:text-gray-300 font-light text-base"
          >
            مقالات
          </Link>
          <a>
            <button
              className=" duration-200 dark:text-gray-200 hover:dark:text-gray-300 font-light text-base flex text-center justify-evenly items-center relative"
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

        <SearchBar />
      </nav>
      {menuToggler && <Overlay />}
    </>
  );
}

export default Header;
