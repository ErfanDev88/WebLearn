import React from "react";
import myPicture from "../../assets/png/me.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="w-full flex flex-col justify-between mt-16 gap-y-10">
      <h1
        data-aos="fade-left"
        className="text-slate-700 text-xl font-black flex items-center dark:text-white"
      >
        <svg
          width="18"
          height="26"
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 26.3479C24.6773 26.3479 32 27.7579 32 33.1979C32 38.64 24.6292 40 16 40C7.32475 40 0 38.59 0 33.1499C0 27.7079 7.37076 26.3479 16 26.3479ZM16 0C21.8782 0 26.588 4.70805 26.588 10.5821C26.588 16.4562 21.8782 21.1662 16 21.1662C10.1238 21.1662 5.41203 16.4562 5.41203 10.5821C5.41203 4.70805 10.1238 0 16 0Z"
            fill="#334155"
            className="dark:fill-white"
          />
        </svg>
        <span className="pr-3">درباره من</span>
      </h1>
      <div
        data-aos="zoom-in"
        className="w-full flex flex-col justify-between items-center px-5 bg-white rounded-xl shadow-4xl gap-y-4 md:flex-row md:gap-y-0 md:py-10 md:px-14 md:items-start dark:bg-[#202e41]"
      >
        <div className="md:order-1">
          <img
            src={myPicture}
            width="330px;"
            className="rounded-xl -mt-6 md:w-[400px] md:-mt-24"
            alt="درباره ی من"
          />
          <svg
            className="-mt-10 -mr-5"
            width="130"
            height="58"
            viewBox="0 0 169 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M145.181 2.30937C145.194 2.35994 145.206 2.41052 145.22 2.4606H153.005C153.001 2.41052 152.998 2.35994 152.994 2.30937H145.181ZM69.2583 62.9634C71.8715 60.3904 74.731 58.0116 76.1165 54.4721C73.8306 57.303 71.5447 60.1329 69.2583 62.9634ZM82.658 33.6429C82.658 33.1381 82.699 32.6293 82.6519 32.1291C81.8942 24.0652 75.29 21.9823 69.3919 23.6251C67.4687 24.1602 65.8485 25.2047 64.2996 26.3438C62.9192 27.3584 61.5458 28.4813 60.479 29.8059C57.8168 33.1128 56.2983 37.0085 55.4834 41.1378C54.3498 46.8826 54.1196 52.6264 56.2952 58.2251C57.5694 61.5016 59.4441 64.3149 62.5337 66.2075C63.4225 66.7518 63.9946 66.596 64.681 65.9354C69.7192 61.0879 74.3526 55.9131 77.7797 49.7651C80.5775 44.7476 82.6079 39.4909 82.658 33.6429ZM128.768 5.63447C132.897 4.68003 137.025 3.7261 141.154 2.77166C137.918 3.25065 134.699 3.8662 131.503 4.58443C130.566 4.79485 129.695 5.2971 128.791 5.66228C126.869 5.62435 125.412 6.74216 123.907 7.73402C125.527 7.03451 127.148 6.33449 128.768 5.63447ZM61.3243 68.8918C56.232 65.6901 53.0756 61.2209 51.6157 55.7239C48.825 45.214 50.4376 35.3702 57.1476 26.6801C60.2984 22.5989 64.633 20.0471 69.796 19.2859C74.1548 18.6435 77.9663 20.0967 81.189 23.0399C84.395 25.9669 86.4634 29.6188 86.8104 33.9282C87.1073 37.621 86.7801 41.3715 85.3637 44.8827C84.2301 47.6914 83.0657 50.4996 81.6792 53.1874C80.8441 54.8064 79.6053 56.2312 78.4651 57.6778C75.7852 61.0762 73.0557 64.4352 70.3879 68.1028C71.3869 67.817 72.4284 67.6303 73.3769 67.2257C76.4377 65.9192 78.887 63.7615 81.0757 61.3205C86.3486 55.4392 89.8687 48.4814 93.1946 41.4053C96.087 35.2508 99.0304 29.1206 102.992 23.5492C110.751 12.6372 121.122 5.68302 134.22 2.76054C142.242 0.970524 150.362 1.27552 158.484 1.3084C161.54 1.32053 164.599 1.07269 167.656 0.949281C167.823 0.9422 167.993 0.992273 168.349 1.04184C167.979 1.38882 167.731 1.62148 167.681 1.66802C168.116 2.02157 168.558 2.38169 169 2.74131C168.621 3.19248 168.326 3.81158 167.842 4.05487C167.124 4.4155 166.283 4.62287 165.477 4.69571C163.262 4.8955 161.037 4.96985 158.818 5.13322C156.285 5.32037 153.756 5.56467 151.222 5.74928C150.607 5.7943 149.974 5.63042 149.362 5.6901C146.433 5.97537 143.486 6.17466 140.588 6.65668C137.986 7.09015 135.459 7.97225 132.859 8.42899C130.878 8.77697 129.059 9.47497 127.248 10.264C122.892 12.1633 118.74 14.3109 115.146 17.5733C110.104 22.1487 106.091 27.5132 102.596 33.2469C100.514 36.664 99.1741 40.5268 97.3748 44.1265C95.5164 47.8436 93.5355 51.501 91.5501 55.1529C90.5496 56.993 89.5814 58.8877 88.3092 60.534C86.686 62.6356 84.824 64.5632 82.9615 66.4645C81.7525 67.6971 80.4707 68.9242 79.0256 69.8457C75.6719 71.9863 71.9767 72.6357 68.101 71.5568C66.9183 71.2281 66.0746 71.3378 65.1165 72.178C58.0277 78.3947 50.1194 83.3661 41.5182 87.193C36.3865 89.4767 31.238 91.7866 25.9288 93.5888C19.0807 95.9129 11.9788 97.2088 4.68305 96.9048C3.50343 96.8557 2.30612 96.6266 1.17506 96.2862C0.704633 96.1446 0.386966 95.4936 0 95.0748C0.424398 94.7911 0.825022 94.3232 1.27876 94.2645C2.05269 94.1644 2.86102 94.3116 3.65266 94.3738C4.18783 94.4158 4.72706 94.5791 5.25161 94.5361C10.9094 94.0688 16.4327 92.8792 21.8072 91.0993C35.8088 86.4616 48.6368 79.6577 59.9504 70.1179C60.3667 69.7668 60.7643 69.3925 61.3243 68.8918Z"
              fill="#334155"
              className="dark:fill-white"
            />
          </svg>
        </div>
        <div className="w-full flex flex-col justify-between gap-y-4 md:w-2/3 md:items-start md:gap-y-8">
          <h1 className="w-full font-poppinsBlack font-black text-slate-700 text-left text-2xl md:text-right md:text-4xl dark:text-white">
            Mohammad Erfan Rezaii
          </h1>
          <p className="text-sm font-shabnamLight font-light text-[#242b35] md:text-lg md:leading-relaxed md:w-2/3 dark:text-white">
            سلام! من محمد عرفان رضایی ۱۴ ساله و عاشق برنامه نویسی هستم. حدود
            دوساله که برنامه نویسی رو شروع کردم و خیلی چیزا یاد گرفتم. توی سال
            قبل تو مسابقه خوارزمی مقام آوردم و موفق شدم. برنامه نویس front-end
            هستم و...
          </p>

          <Link to={'/about'} className="w-full flex justify-center text-lg font-medium text-white items-center p-2 rounded-lg bg-[#475569] mb-3 md:w-2/3 dark:bg-[#314560]">
            اطلاعات بیشتر...
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
