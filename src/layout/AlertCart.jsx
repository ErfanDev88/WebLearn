import React, { useEffect, useState } from "react";

function AlertCart({ onClose }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 20);
    }, 1000);

    const hideTimer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, [onClose]);

  return (
    <div className="h-12 flex justify-between items-center flex-col rounded-lg fixed bottom-3 right-3 bg-[#E44C2B] text-white font-medium text-sm pt-3 z-50">
      <span className="px-4">این محصول قبلا به سبد خرید اضافه شده!</span>
      <div
        className="bg-[#e49482] h-1"
        style={{ width: `${progress}%` , transition: 'with', transitionDuration: '5s', transitionTimingFunction: 'linear'}}
      ></div>
    </div>
  );
}

export default AlertCart;
