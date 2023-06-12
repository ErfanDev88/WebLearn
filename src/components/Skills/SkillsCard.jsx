import React from "react";
import { Link } from "react-router-dom";

function SkillsCard({ title, imageUrl, description, time, price, id, item }) {
  return (
    <div data-aos="flip-down" className="w-full flex flex-col bg-white px-5 gap-y-4 rounded-xl shadow-4xl cursor-pointer md:w-[24%] dark:bg-[#202e41]">
      <div className="w-full justify-center items-center flex -mt-6 overflow-hidden rounded-xl">
        <div className="max-w-sm justify-center flex items-center">
          <img
            src={imageUrl}
            className="rounded-xl hover:scale-110 hover:opacity-90 transition-all duration-200"
            alt={title}
          />
        </div>
      </div>
      <h1 className="text-slate-700 font-black text-2xl dark:text-white">
        {title}
      </h1>
      <p className="text-slate-700 text-base font-shabnamLight font-light dark:text-white">
        {description}
      </p>
      <div className="w-full flex justify-between items-center">
        <span className="p-2 text-xs text-slate-700 font-light bg-slate-200 rounded-lg flex justify-between items-center dark:bg-slate-600/50">
          <svg
            width="18"
            height="18"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 10.7478C1 18.0581 3.43748 20.4956 10.7478 20.4956C18.0581 20.4956 20.4956 18.0581 20.4956 10.7478C20.4956 3.43748 18.0581 1 10.7478 1C3.43748 1 1 3.43748 1 10.7478Z"
              stroke="#334155"
              className="dark:stroke-gray-300"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3203 12.8744L10.7468 10.7425V6.14685"
              stroke="#334155"
              className="dark:stroke-gray-300"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="mr-2 dark:text-gray-300">{time}</span>
        </span>
        <span className="text-slate-800 font-black text-lg dark:text-white">
          {price}
        </span>
      </div>
      <Link
        to={{ pathname: `/skills/${id}`, state: item }}
        className="w-full flex justify-center text-lg font-medium text-white items-center p-2 rounded-lg bg-[#475569] mb-3 dark:bg-[#314560]"
      >
        اطلاعات بیشتر...
      </Link>
    </div>
  );
}

export default SkillsCard;
