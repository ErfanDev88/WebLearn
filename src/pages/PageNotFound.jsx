import React from "react";
import NotFound from "../assets/png/NotFound.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <section className="w-full flex flex-col md:flex-row justify-between items-center rounded-xl py-7 bg-[#202e41] mt-16 px-14">
        <div className="md:w-[50%] w-full flex flex-col items-center md:items-start text-white gap-y-6">
          <h1 className="text-8xl font-black">404</h1>
          <span className="text-2xl font-medium">
            صفحه ی مورد نظرت پیدا نشد رفیق!
          </span>
          <Link
            to={"/"}
            className="w-28 p-3 rounded-xl bg-[#E44C2B] text-sm font-medium"
          >
            بازگشت به خانه
          </Link>
        </div>
        <div className="md:w-[50%] w-full">
          <img src={NotFound} alt="پیدا نشد" className="w-full h-full" />
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
