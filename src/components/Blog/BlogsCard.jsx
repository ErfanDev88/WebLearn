import React from "react";
import { Link } from "react-router-dom";

function SkillsCard({ title, imageUrl, url, id, item }) {
  return (
    <div data-aos="flip-down" className="w-full flex flex-col bg-white px-5 gap-y-4 rounded-xl shadow-4xl cursor-pointer md:w-[24%] dark:bg-[#202e41]">
      <div className="w-full justify-center items-center flex -mt-6 overflow-hidden rounded-xl">
        <div className="max-w-sm justify-center flex items-center rounded-xl">
          <img
            src={imageUrl}
            className="rounded-xl hover:scale-110 hover:opacity-90 transition-all duration-200"
            alt="react"
          />
        </div>
      </div>
      <h1 className="text-slate-700 font-black text-2xl dark:text-white">
        {title}
      </h1>
      <Link
        to={url}
        className="w-full flex justify-center text-lg font-medium text-white items-center p-2 rounded-lg bg-[#475569] mb-3 dark:bg-[#314560]"
      >
        اطلاعات بیشتر...
      </Link>
    </div>
  );
}

export default SkillsCard;
