import React from "react";
import Logo from "../assets/png/Logo.png"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full flex flex-col justify-between items-center gap-y-10 mt-16 md:gap-y-0 md:flex-row md:items-start border-t border-t-gray-300 md:mt-32 pt-10 dark:border-t-slate-700">
      <div className="flex flex-col justify-between items-center gap-y-5 md:w-1/4 md:items-start">
      <img src={Logo} className="w-full" alt="وب لرن" />
        <h2 className="text-lg font-bold text-slate-800 md:text-xl dark:text-white">
          درباره وب لرن
        </h2>
        <p className="text-base text-slate-700 font-shabnamLight font-thin dark:text-white">
          وب لرن یک سایت آموزشی هست که کلی فیلم و مقاله در مورد برنامه نویسی
          داخش هست و میتونید خیلی راحت ازشون استفاده کنید. توی وب لرن میتونید از
          دوره های ما استفاده کنید و توی مدت کوتاهی یاد بگیرید!
        </p>
      </div>
      <div className="flex flex-col justify-between items-center gap-y-5 md:w-1/4">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          بخش های سایت
        </h2>
        <ul className="md:h-28 flex flex-col justify-between items-center md:items-start">
          <Link to={'/blogs'} className="text-base text-slate-700 font-shabnamLight font-light duration-200 transition-all hover:font-medium cursor-pointer dark:text-white">
            مقالات
          </Link>
          <li className="text-base text-slate-700 font-shabnamLight font-light duration-200 transition-all hover:font-medium cursor-pointer mt-2 dark:text-white">
            <Link to={'/skills'}>دوره های آموزشی</Link>
          </li>
          <Link to={'/contact-us'} className="text-base text-slate-700 font-shabnamLight font-light duration-200 transition-all hover:font-medium cursor-pointer mt-2 dark:text-white">
            ارتباط با ما
          </Link>
        </ul>
      </div>
      <div className="w-full flex flex-col justify-between items-center gap-y-5 md:w-1/4 md:items-start">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          ارتباط با ما
        </h2>
        <ul className="w-full flex flex-col justify-between items-center md:gap-y-8">
          <li className="w-full text-base text-slate-700 font-shabnamLight font-light duration-200 transition-all hover:font-medium cursor-pointer flex justify-between items-center dark:text-white">
            <span className="flex justify-between items-center">
              <span className="ml-2">
                <svg
                  width="23"
                  height="19"
                  viewBox="0 0 43 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.318 0C37.978 0 43 5.434 43 12.64V26.376C43 30.064 41.696 33.396 39.326 35.76C37.2 37.878 34.442 39 31.35 39H11.644C8.558 39 5.802 37.88 3.674 35.76C1.304 33.396 0 30.064 0 26.376V12.64C0 5.434 5.022 0 11.682 0H31.318ZM31.318 3H11.682C6.652 3 3 7.054 3 12.64V26.376C3 29.262 3.992 31.84 5.792 33.634C7.344 35.184 9.37 36 11.65 36H31.318C31.322 35.996 31.338 36 31.35 36C33.632 36 35.656 35.184 37.208 33.634C39.01 31.84 40 29.262 40 26.376V12.64C40 7.054 36.348 3 31.318 3ZM34.47 12.2576C34.992 12.8996 34.894 13.8436 34.252 14.3676L25.364 21.5916C24.24 22.4836 22.896 22.9296 21.554 22.9296C20.216 22.9296 18.882 22.4876 17.766 21.6036L8.796 14.3716C8.15 13.8516 8.05 12.9056 8.568 12.2616C9.09 11.6196 10.034 11.5176 10.678 12.0356L19.64 19.2596C20.766 20.1516 22.352 20.1516 23.486 19.2516L32.358 12.0396C33.002 11.5136 33.946 11.6136 34.47 12.2576Z"
                    fill="#475569"
                    className="dark:fill-white"
                  />
                </svg>
              </span>
              ایمیل:
            </span>
            <Link to={'mailto:rezaiierfan672@gmail.com'}>rezaiierfan672@gmail.com</Link>
          </li>
          <li className="w-full text-base text-slate-700 font-shabnamLight font-light duration-200 transition-all hover:font-medium cursor-pointer flex justify-between items-center mt-2 dark:text-white">
            <span className="flex justify-between items-center">
              <span className="ml-2">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.71834 6.1226C4.72234 6.1226 4.62234 6.22661 4.49634 6.35061C4.01234 6.82061 3.01034 7.7986 3.00023 9.8446C2.98434 12.7066 4.86633 18.0206 13.9283 27.0806C22.9483 36.0966 28.2543 38.0006 31.1223 38.0006H31.1643C33.2103 37.9906 34.1863 36.9866 34.6583 36.5046C34.8023 36.3566 34.9183 36.2486 35.0003 36.1806C36.9923 34.1766 38.0123 32.6846 38.0024 31.7286C37.9883 30.7526 36.7743 29.5986 35.0963 28.0026C34.5623 27.4946 33.9823 26.9426 33.3703 26.3306C31.7843 24.7486 30.9983 25.0186 29.2703 25.6266C26.8803 26.4646 23.6003 27.6046 18.5043 22.5066C13.4003 17.4066 14.5423 14.1306 15.3783 11.7406C15.9823 10.0126 16.2583 9.2246 14.6703 7.6366C14.0483 7.0166 13.4903 6.42861 12.9763 5.88861C11.3903 4.22061 10.2463 3.0146 9.27634 3.0006H9.26033C8.30233 3.0006 6.81434 4.0246 4.70834 6.1306C4.71434 6.1246 4.71834 6.1226 4.71834 6.1226ZM31.1243 41.0006C26.1403 41.0006 19.6423 37.0326 11.8083 29.2026C3.94434 21.3406 -0.0296647 14.8226 0.000166705 9.8286C0.0183353 6.5286 1.74834 4.83861 2.39834 4.20461C2.43234 4.16261 2.54834 4.04861 2.58834 4.00861C5.45634 1.13861 7.39033 -0.021395 9.31433 0.000298274C11.5483 0.030605 13.1383 1.70261 15.1503 3.82061C15.6483 4.34461 16.1883 4.91461 16.7903 5.51461C19.7103 8.43461 18.8783 10.8166 18.2103 12.7286C17.4823 14.8146 16.8523 16.6146 20.6243 20.3866C24.4003 24.1586 26.2003 23.5286 28.2783 22.7946C30.1923 22.1266 32.5683 21.2906 35.4923 24.2106C36.0843 24.8026 36.6463 25.3366 37.1643 25.8306C39.2923 27.8526 40.9723 29.4506 41.0007 31.6906C41.0243 33.6006 39.8643 35.5466 37.0003 38.4126L35.7323 37.5526L36.8043 38.6006C36.1703 39.2506 34.4823 40.9826 31.1803 41.0006H31.1243Z"
                    fill="#475569"
                    className="dark:fill-white"
                  />
                </svg>
              </span>
              شماره تماس:
            </span>
            <Link to={'tel:09393321803'}>09393321803</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
