import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([
    { id: 1, title: "آموزش ReactJS", url: '/skills/learn-react-js' },
    { id: 2, title: "آموزش Tailwindcss", url: '/skills/learn-tailwindcss' },
    { id: 3, title: "آموزش jQuery", url: '/skills/learn-jquery' },
    { id: 4, title: "آموزش Sass", url: '/skills/learn-sass' },
  ]);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <form
      action="#"
      className="w-[25%] h-12 hidden md:flex relative justify-center"
    >
      <div className="md:flex justify-start items-center rounded-xl pr-5 dark:bg-slate-700 hidden">
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
          className="bg-transparent border-none pr-3 placeholder:text-xs placeholder:font-light focus:outline-none text-sm dark:placeholder:text-gray-300 dark:text-gray-300 flex justify-center items-center "
          placeholder="دنبال چی دوره ای می گردی ؟"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {searchTerm !== ""
        ? filteredCourses.map((course) => (
            <div
              key={course.id}
              className="w-2/3 absolute top-full flex flex-col  justify-between items-center gap-3 p-2 mt-3 rounded-lg dark:bg-slate-700/50 backdrop-blur-md cursor-pointer duration-200 text-[#64748b] dark:text-gray-200 font-normal hover:bg-[#64748b]/20"
            >
              <Link to={course.url}>{course.title}</Link>
            </div>
          ))
        : null}
    </form>
  );
}

export default SearchBar;
