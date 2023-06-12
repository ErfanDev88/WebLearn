import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {show && (
        <div
          id="top"
          className="flex justify-center items-center fixed bottom-4 left-4 w-14 h-14 bg-slate-700 text-white text-center rounded-full cursor-pointer transition-all duration-300"
          onClick={handleClick}
        >
          <FaArrowUp />
        </div>
      )}
    </>
  );
};

export default BackToTop