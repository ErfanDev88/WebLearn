import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartModal({ cartItems, setModal }) {
  const [totalPrice, setTotalPrice] = useState(0);

  React.useEffect(() => {
    const newTotalPrice = cartItems.reduce(
      (accumulator, currentItem) => accumulator + parseFloat(currentItem.price),
      0
    );
    const formattedTotalPrice = newTotalPrice
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setTotalPrice(`${formattedTotalPrice},000`);
  }, [cartItems]);

  return (
    <>
      <div className="w-full h-screen bg-white/10 backdrop-blur-lg flex justify-center items-center fixed top-0 right-0 z-40">
        <div className="w-[80%] h-[80%] bg-slate-700 rounded-xl flex flex-col p-6 text-white items-center gap-y-5">
          <button
            className="w-full flex justify-end"
            onClick={() => setModal(false)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </button>
          {cartItems.map((item) => {
            return (
              <div className="w-full rounded-xl bg-[#505f75] py-3 px-7 flex justify-between items-center">
                <img
                  src={item.imageUrl}
                  className="w-24 rounded-lg md:w-32 -mt-7"
                  alt={item.altText}
                />
                <h1 className="text-xl font-black">{item.title}</h1>
                <span className="font-light flex justify-between items-center gap-x-2">
                  <span className="text-lg">{item.price}</span>
                  <div className="flex flex-col">
                    <span>تـــو </span>
                    <span className="-mt-3">مان</span>
                  </div>
                </span>
              </div>
            );
          })}
          <div className="w-full rounded-xl bg-[#505f75] py-3 px-7 flex justify-between items-center">
            <span className="text-xl font-bold ">مجموع</span>
            <span className="font-light flex justify-between items-center gap-x-2">
              <span className="text-lg">{totalPrice}</span>
              <div className="flex flex-col">
                <span>تـــو </span>
                <span className="-mt-3">مان</span>
              </div>
            </span>
          </div>
          <Link to={'/pay'} className="flex justify-between items-center gap-x-3 p-3 rounded-xl bg-[#505f75] hover:scale-110 hover:-rotate-3 text-sm font-medium transition-all duration-200">ادامه جهت تسویه حساب</Link>
        </div>
      </div>
    </>
  );
}

export default CartModal;
