import React, { useState } from "react";
import reactImage from "../../assets/png/reactBG.png";
import tailwindImage from "../../assets/png/tailwindBG.jpg";
import jqueryImage from "../../assets/png/jQueryBG.png";
import sassImage from "../../assets/png/sassLogo.png";
import bootstrapImage from "../../assets/png/BootstrapLogo.png";
import SkillsCard from "./SkillsCard";

function SkillsCardLists() {
  const [skills, setSkills] = useState([
    {
      title: "آموزش ReactJS",
      imageUrl: reactImage,
      description: "آموزش قدم به قدم ری اکت با توضیحات کامل!",
      time: "50:00:00",
      price: "120,000",
      id: 'learn-react-js'
    },
    {
      title: "آموزش Tailwindcss",
      imageUrl: tailwindImage,
      description: "آموزش کامل tailwindcss به صورت اصولی",
      time: "12:35:23",
      price: "90,000",
      id: 'learn-tailwindcss'
    },
    {
      title: "آموزش jQuery",
      imageUrl: jqueryImage,
      description: "آموزش تمام مفاهیم jQuery با پروژه!",
      time: "10:13:00",
      price: "70,000",
      id: 'learn-jquery'
    },
    {
      title: "آموزش Sass",
      imageUrl: sassImage,
      description: "آموزش Sass به صورت کامل و واضح",
      time: "20:20:00",
      price: "200,000",
      id: 'learn-sass'
    },
    {
      title: "آموزش Bootstrap",
      imageUrl: bootstrapImage,
      description: "آموزش بوتسترپ به صورت کامل و واضح",
      time: "10:20:00",
      price: "180,000",
      id: 'learn-bootstrap'
    },
  ]);
  return (
    <section className="w-full flex flex-col justify-between items-center mt-14 gap-y-14">
      <h1 className="w-full flex justify-start items-center dark:text-white">
        <span className="ml-[-18px] mt-[-6px] opacity-60 blur-[0.7px]">
          <svg
            width="36"
            height="45"
            viewBox="0 0 66 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M31.6005 4.52954C28.1405 4.99654 22.4875 8.58954 21.7075 10.7955C24.9835 8.71954 28.1095 6.74054 31.6005 4.52954ZM38.7935 8.14054C37.8575 8.63554 36.9145 9.08854 36.0175 9.61754C32.9025 11.4565 29.5475 13.0085 26.7725 15.2695C24.1685 17.3915 22.1755 20.2655 19.9335 22.8265C18.8605 24.0515 17.6165 25.1925 16.8245 26.5855C13.0085 33.2905 9.35548 40.1595 8.86147 48.0155C8.60548 52.0935 9.22648 56.2675 9.86048 60.3345C10.0385 61.4825 11.4715 62.8845 12.6525 63.3535C19.4645 66.0525 26.4965 66.6685 33.3205 63.6435C46.1095 57.9715 52.9575 47.3745 56.3605 34.3195C57.9665 28.1605 57.6575 22.1615 52.1455 17.6515C51.0935 16.7905 49.9565 16.0275 48.9395 15.1275C48.4355 14.6805 47.7145 13.9775 47.7765 13.4745C48.1745 10.2635 46.4945 9.12754 43.6535 8.99654C42.4825 8.94254 41.2995 9.00554 40.1445 8.85254C39.6075 8.78154 39.1215 8.32254 38.7935 8.14054ZM65.7225 33.5685C65.2825 40.5405 63.4815 47.0935 59.6705 53.0485C58.0325 55.6075 56.6445 58.3285 54.9505 60.8455C54.2235 61.9255 52.9475 62.6165 52.0215 63.5815C47.2715 68.5295 41.9235 72.5045 34.9895 73.7175C25.5205 75.3755 16.5975 74.1035 8.61147 68.3615C2.35747 63.8635 -0.166525 57.1805 0.00847529 50.0675C0.417475 33.4605 7.29247 19.6235 20.1195 8.94154C22.6625 6.82254 25.4565 4.89554 28.3925 3.37554C35.7385 -0.430463 42.9975 0.401537 49.8465 4.74854C54.4575 7.67654 58.0455 11.5945 60.1705 16.7455C60.7545 18.1625 61.6025 19.4725 62.3575 20.8175C64.5765 24.7725 66.0105 28.9295 65.7225 33.5685Z"
              fill="#1e293b"
              className="dark:fill-white"
            />
          </svg>
        </span>
        <span className="text-slate-700 text-xl font-black md:text-2xl dark:text-white">
          دوره ها
        </span>
      </h1>
      <div className="w-full flex justify-between items-center flex-wrap gap-y-10">
        {skills.map((item) => {
            return(
                <SkillsCard
                title={item.title}
                imageUrl={item.imageUrl}
                description={item.description}
                time={item.time}
                price={item.price}
                id={item.id}
                item={item}
              />
            )
        })}
      </div>
    </section>
  );
}

export default SkillsCardLists;
