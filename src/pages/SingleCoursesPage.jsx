import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartModal from "../components/Modal/CartModal";
import AlertCart from "../layout/AlertCart";

function SingleSkillPage(props) {
  const { skillsData } = props;
  const { id } = useParams(); // استخراج پارامتر id از روت

  const selectedSkill = skillsData.find((skill) => skill.id === id);

  if (!selectedSkill) {
    // Redirect to an error page
    return <Redirect to="/error" />;
  }

  const {
    title,
    imageUrl,
    altText,
    fullDescription,
    time,
    price,
    NumberOfSessions,
    firstPartOfLearning,
    secondPartOfLearning,
    thirdPartOfLearning,
    forthPartOfLearning,
    fifthPartOfLearning,
    sixthPartOfLearning,
    seventhPartOfLearning,
    eighthPartOfLearning,
    ninethPartOfLearning,
    tenthPartOfLearning,
    eleventhPartOfLearning,
    twelfthPartOfLearning,
  } = selectedSkill;

  const cartItems = props.cartItems;
  const setCartItems = props.setCartItems;
  const [addedToCart, setAddedToCart] = useState(false);
  const [alert, setAlert] = useState(false);
  const handleCloseAlert = () => {
    setAlert(false);
  };

  const addToCart = () => {
    if (!addedToCart) {
      let clonedItems = [...cartItems];
      clonedItems.push(selectedSkill);
      setCartItems(clonedItems);
      setAddedToCart(true);
    } else {
      setAlert(true);
    }
  };

  const [modal, setModal] = useState(false);

  const deviceId = "unique-device-id"; // شناسه دستگاه

  const [likeCount, setLikeCount] = useState(
    parseInt(localStorage.getItem(`likeCount_${deviceId}`)) || 0
  );
  const [liked, setLiked] = useState(
    Boolean(localStorage.getItem(`liked_${deviceId}`))
  );

  const [viewCount, setViewCount] = useState(
    parseInt(localStorage.getItem("viewCount")) || 0
  );

  useEffect(() => {
    localStorage.setItem("viewCount", viewCount + 1);
  }, [viewCount]);

  useEffect(() => {
    localStorage.setItem(`likeCount_${deviceId}`, likeCount);
  }, [deviceId, likeCount]);

  const likeHandler = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      setLiked(true);
      localStorage.setItem(`liked_${deviceId}`, true);
    } else {
      setLikeCount(likeCount - 1);
      setLiked(false);
      localStorage.removeItem(`liked_${deviceId}`);
    }
  };

  return (
    <>
      {modal && <CartModal cartItems={cartItems} setModal={setModal} />}
      {alert && <AlertCart onClose={handleCloseAlert} />}
      <section className="w-full flex flex-col justify-between items-center p-8 rounded-2xl mt-16 bg-[#202e41] gap-y-10">
        <div className="w-full md:flex-row flex flex-col justify-between gap-y-10 md:gap-y-0 items-center">
          <div className="w-full md:w-1/3 justify-center items-center flex overflow-hidden rounded-xl md:order-1">
            <div className="justify-center flex items-center">
              <img
                src={imageUrl}
                className="rounded-xl hover:scale-110 hover:opacity-90 transition-all duration-200"
                alt={altText}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col justify-between items-center md:items-start text-white">
            <div className="w-[85%] gap-y-6 flex flex-col">
              <h1 className="text-3xl md:text-5xl font-black">{title}</h1>
              <p className="text-base font-light text-center md:text-start leading-relaxed">
                {fullDescription}
              </p>
              <div className="w-full md:flex-row flex flex-col justify-between items-center md:gap-y-0 gap-y-7">
                <span className="md:order-1 text-3xl font-black flex justify-center items-center gap-x-2 ">
                  {price}
                  <span className="flex flex-col justify-center items-center text-base   font-light">
                    <span>تـــو</span>
                    <span className="-mt-2">مان</span>
                  </span>
                </span>
                <div className="flex justify-between items-center gap-x-4">
                  <button
                    onClick={()=>addToCart(selectedSkill)}
                    className="flex justify-between items-center gap-x-3 p-3 rounded-xl bg-[#475569] hover:scale-110 hover:-rotate-3 text-sm font-medium transition-all duration-200"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.19995 7L8.99875 7.47905C8.67393 8.25243 8.59229 9.10637 8.76468 9.92729C9.02773 11.1799 10.0249 12.1473 11.2849 12.3723L11.3958 12.3921C11.7954 12.4635 12.2045 12.4635 12.6041 12.3921L12.715 12.3723C13.975 12.1473 14.9722 11.1799 15.2352 9.92729C15.4076 9.10637 15.326 8.25243 15.0012 7.47905L14.8 7"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M20.2209 15.143C19.6508 17.6504 17.7018 19.6204 15.2025 20.2251C13.102 20.7334 10.8983 20.7334 8.7979 20.2251C6.29861 19.6204 4.34961 17.6504 3.77943 15.143C3.26999 12.9026 3.39389 10.5648 4.13727 8.39084L4.24771 8.06787C5.06566 5.67585 7.109 3.91013 9.59434 3.44766L10.2749 3.32102C11.4153 3.10881 12.5851 3.10881 13.7255 3.32102L14.406 3.44766C16.8914 3.91013 18.9347 5.67586 19.7527 8.06789L19.8631 8.39084C20.6065 10.5648 20.7304 12.9026 20.2209 15.143Z"
                        stroke="white"
                        stroke-width="1.5"
                      />
                    </svg>
                    {addedToCart ? "اضافه شد!" : "افزودن به سبد خرید"}
                  </button>
                  <button
                    className="p-3 rounded-xl bg-[#E44C2B] text-sm font-medium"
                    onClick={() => setModal(true)}
                  >
                    مشاهده سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-400/20 pt-5">
          <div className="flex justify-between items-center px-8">
            <span className="flex justify-center items-center gap-x-1">
              <button onClick={likeHandler}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4709 4.0535C14.1978 4.22856 12.9226 4.8312 12 5.80891C11.0774 4.8312 9.8022 4.22856 8.52915 4.0535C6.91335 3.83131 5.1499 4.28425 4.05884 5.73088C2.64706 7.60276 2.64705 10.254 4.05884 12.1258L8.75286 18.3496C10.4125 20.5501 13.5875 20.5501 15.2471 18.3496L19.9412 12.1258C21.3529 10.254 21.3529 7.60276 19.9412 5.73088C18.8501 4.28425 17.0867 3.83131 15.4709 4.0535Z"
                    fill={liked ? "#E44C2B" : "white"}
                  />
                </svg>
              </button>
              <span className="text-sm font-light text-white">{likeCount}</span>
            </span>
            <span className="text-white flex gap-x-2 font-medium text-base justify-center items-center">
              تعداد بازدید از این صفحه{" "}
              <span className="text-2xl font-black">{viewCount}</span>
            </span>
          </div>
        </div>
      </section>
      <section className="w-full md:flex-row flex flex-col justify-between items-start p-8 rounded-2xl mt-16 bg-[#202e41] md:gap-x-10 gap-x-0 gap-y-10">
        <div className="md:w-1/6 w-full md:border-r border-r-0 border-b md:border-b-0 border-gray-400/20 md:order-1">
          <div className="md:pr-5 pr-0 pb-5 md:pb-0 md:flex-col flex flex-row justify-between items-center md:gap-y-5 gap-y-0">
            <div className="flex flex-col justify-between items-center text-white bg-slate-700 p-4 rounded-lg gap-y-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
                  fill="white"
                />
              </svg>
              <span className="text-sm font-light">مدت دوره</span>
              <span className="text-sm font-black">{time}</span>
            </div>
            <div className="flex flex-col justify-between items-center text-white bg-slate-700 p-4 rounded-lg gap-y-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 10.9V4.1C21.5 2.6 20.86 2 19.27 2H15.23C13.64 2 13 2.6 13 4.1V10.9C13 12.4 13.64 13 15.23 13H19.27C20.86 13 21.5 12.4 21.5 10.9Z"
                  fill="#fff"
                />
                <path
                  d="M11 13.1V19.9C11 21.4 10.36 22 8.77 22H4.73C3.14 22 2.5 21.4 2.5 19.9V13.1C2.5 11.6 3.14 11 4.73 11H8.77C10.36 11 11 11.6 11 13.1Z"
                  fill="#fff"
                />
                <path
                  d="M21.5 19.9V17.1C21.5 15.6 20.86 15 19.27 15H15.23C13.64 15 13 15.6 13 17.1V19.9C13 21.4 13.64 22 15.23 22H19.27C20.86 22 21.5 21.4 21.5 19.9Z"
                  fill="#fff"
                />
                <path
                  d="M11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1V6.9C2.5 8.4 3.14 9 4.73 9H8.77C10.36 9 11 8.4 11 6.9Z"
                  fill="#fff"
                />
              </svg>
              <span className="text-sm font-light">تعداد جلسات</span>
              <span className="text-sm font-black">{NumberOfSessions}</span>
            </div>
          </div>
        </div>
        <div className="md:w-5/6 w-full flex flex-col justify-between items-start gap-y-5">
          <h1 className="text-2xl text-white font-black mb-7">سرفصل دوره</h1>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش اول
            </span>

            {firstPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش دوم
            </span>

            {secondPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش سوم
            </span>

            {thirdPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش چهارم
            </span>

            {forthPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش پنجم
            </span>

            {fifthPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش ششم
            </span>

            {sixthPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش هفتم
            </span>

            {seventhPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش هشتم
            </span>

            {eighthPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش نهم
            </span>

            {ninethPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش دهم
            </span>

            {tenthPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش یازدهم
            </span>

            {eleventhPartOfLearning}
          </div>
          <div className="w-full flex justify-start items-start py-4 px-6 rounded-lg bg-slate-700 text-xl text-white font-bold gap-x-8">
            <span className="border-l border-gray-400/60 pl-8 font-medium">
              بخش دوازدهم
            </span>

            {twelfthPartOfLearning}
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleSkillPage;
