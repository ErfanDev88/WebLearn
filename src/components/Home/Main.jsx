import React from "react";
import heroImage from '../../assets/png/hero-image.png'
import { Link } from "react-router-dom";

function Main() {
  return (
    <section className="w-full flex flex-col md:justify-between items-center mt-16 gap-y-10 md:flex-row md:items-start">
      <div data-aos="fade-right" className="w-full flex justify-center items-center md:order-1 md:w-3/5">
        <img src={heroImage} className="w-full" alt="آموزش برنامه نویسی وب لرن" />
      </div>
      <div data-aos="fade-left" className="w-full flex flex-col justify-between items-center gap-y-4 md:w-2/5 md:items-start md:gap-y-8">
        <h1 className="text-4xl text-gray-600 font-bold text-center leading-loose md:text-6xl md:leading-snug md:text-right dark:text-white">
          وب لرن, سایتی پر از آموزش های جذاب!
        </h1>
        <p className="text-base text-gray-600 font-light leading-relaxed text-center md:text-start md:text-lg md:font-shabnamLight dark:text-white">
          یه سایت پر از فیلم های آموزشی که میتونید به راحتی ازشون استفاده کنید و
          کلی چیز خفن یاد بگیرید!
        </p>
        <Link to={'/skills'}
          className="w-3/5 h-12 flex justify-center items-center text-blue-400 border-2 border-blue-400 font-medium text-lg rounded-xl duration-300 ease-out transition-all cursor-pointer relative overflow-hidden group"
        >
          <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-400 group-hover:translate-x-0 ease">
            <svg
              width="30"
              height="18"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M10.405 14.3806L3.00651 15.0349C1.34617 15.0349 0 13.6756 0 11.9991C0 10.3226 1.34617 8.96331 3.00651 8.96331L10.405 9.61762C11.7075 9.61762 12.7635 10.6839 12.7635 11.9991C12.7635 13.3165 11.7075 14.3806 10.405 14.3806Z"
                fill="white"
              />
              <path
                d="M35.2496 14.2603C35.1339 14.3771 34.7019 14.8706 34.2961 15.2803C31.9289 17.8469 25.7479 22.0437 22.5144 23.3281C22.0235 23.533 20.7821 23.9692 20.1167 24C19.4818 24 18.8752 23.8524 18.297 23.5616C17.5749 23.154 16.9989 22.5107 16.6803 21.7529C16.4774 21.2286 16.1589 19.6534 16.1589 19.6247C15.8425 17.9042 15.6702 15.1063 15.6702 12.0132C15.6702 9.06995 15.8425 6.38663 16.1022 4.63741C16.1305 4.60657 16.4491 2.65247 16.796 1.98274C17.4309 0.757848 18.6723 0 20.001 0H20.1167C20.9828 0.0286396 22.8024 0.788692 22.8024 0.815128C25.8635 2.09951 31.8983 6.09363 34.3245 8.7483C34.3245 8.7483 35.0096 9.43125 35.3063 9.85643C35.7688 10.4689 36.0001 11.2267 36.0001 11.9846C36.0001 12.8305 35.7405 13.617 35.2496 14.2603Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
            یاد گیری را شروع کنید
          </span>
          <span className="relative invisible">یاد گیری را شروع کنید</span>
        </Link>
      </div>
    </section>
  );
}

export default Main;