import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section data-aos="zoom-in" className="w-full flex justify-between items-center mt-16 bg-[#202e41] py-8 rounded-xl px-14 flex-col md:flex-row gap-y-10 md:gap-y-0">
      <h1 className="text-4xl text-white font-black">راه های ارتباط با ما</h1>
      <div className="flex flex-col gap-y-4 text-white ">
        <span className="font-light">
           تماس: 
          <Link to={'tel:09393321803'} className="mr-3 text-lg font-bold">09393321803</Link>
        </span>
        <span className="font-light">
           ایمیل: 
          <Link to={"mailto:rezaiierfan672@gmail.com"} className="mr-3 text-lg font-bold">rezaiierfan672@gmail.com</Link>
        </span>
      </div>
    </section>
  );
}

export default Contact;
