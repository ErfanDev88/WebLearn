import React from "react";
import instagram from "../../assets/png/instagram.png"

function Instagram() {
  return (
    <section data-aos="flip-left" className="w-full flex flex-col justify-between items-center rounded-2xl gap-y-4 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] pb-8 mt-24 md:gap-y-0 md:flex-row md:pb-0 md:px-12">
      <img
        src={instagram}
        className="-mt-20 md:w-80"
        width="250px"
        alt="اینستاگرام من"
      />
      <h1 className="text-xl font-black text-white md:text-3xl">
        پیج من رو توی اینساگرام فالو کنید
      </h1>
      <a
        href="https://www.instagram.com/erfandev88/"
        className="bg-white flex justify-between items-center rounded-md text-sm font-light duration-300 transition-all hover:bg-[#833AB4] hover:border hover:border-white hover:text-white text-[#833AB4] py-2 px-5 group"
      >
        مشاهده پیج
        <span className="mr-2">
          <svg
            width="22"
            height="10"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M25.595 9.61939L32.9935 8.96509C34.6538 8.96509 36 10.3244 36 12.0009C36 13.6774 34.6538 15.0367 32.9935 15.0367L25.595 14.3824C24.2925 14.3824 23.2365 13.3161 23.2365 12.0009C23.2365 10.6835 24.2925 9.61939 25.595 9.61939Z"
              fill="#833AB4"
              className="group-hover:fill-white"
            />
            <path
              d="M0.750437 9.73967C0.866072 9.62291 1.29807 9.12943 1.70388 8.71966C4.07112 6.15311 10.2521 1.95631 13.4856 0.671929C13.9765 0.467046 15.2179 0.0308427 15.8833 0C16.5182 0 17.1248 0.147604 17.703 0.438406C18.4251 0.84597 19.0011 1.48926 19.3197 2.24711C19.5226 2.77143 19.8411 4.34661 19.8411 4.37525C20.1575 6.09583 20.3298 8.8937 20.3298 11.9868C20.3298 14.9301 20.1575 17.6134 19.8978 19.3626C19.8695 19.3934 19.5509 21.3475 19.204 22.0173C18.5691 23.2422 17.3277 24 15.999 24H15.8833C15.0172 23.9714 13.1976 23.2113 13.1976 23.1849C10.1365 21.9005 4.10167 17.9064 1.67552 15.2517C1.67552 15.2517 0.990432 14.5688 0.693708 14.1436C0.231169 13.5311 -0.000101089 12.7733 -0.000101089 12.0154C-0.000101089 11.1695 0.259534 10.383 0.750437 9.73967Z"
              fill="#833AB4"
              className="group-hover:fill-white"
            />
          </svg>
        </span>
      </a>
    </section>
  );
}

export default Instagram;
