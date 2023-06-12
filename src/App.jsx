import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Home,
  Header,
  Footer,
  Skills,
  Comments,
  BackToTop,
  SingleSkillPage,
  reactImage,
  tailwindImage,
  jqueryImage,
  sassImage,
  bootstrapImage,
  SingleCoursesPage,
  Pay,
  About,
  Blogs,
  Contact,
  PageNotFound,
  Loading,
} from "./";

function App() {
  const [skillsData, setSkillsData] = useState([
    {
      title: "آموزش ReactJS",
      imageUrl: reactImage,
      description: "آموزش قدم به قدم ری اکت با توضیحات کامل!",
      fullDescription:
        "در سال‌های اخیر میزان رشد و توسعه کتابخانه‌ها و فریمورک‌های جاوااسکریپتی بسیار افزایش یافته، به همین دلیل نیز حوزه‌های کاری که یک فرد می‌تواند در آن‌ها مشغول به کار شود نیز گسترش یافته و در نهایت باعث شده تا فرصت‌های شغلی زیادی ایجاد شود. در بین فریمورک‌های جاوااسکریپتی یکی از محبوب‌ترین گزینه‌هایی که می‌توانید پیدا کنید React است. دلیل آن نیز همه کاره بودن این فریمورک بوده، چرا که جدای از توسعه اپلیکیشن‌های مبتنی بر وب، توانایی ایجاد اپلیکیشن‌های موبایلی را نیز دارد. دوره آموزش Reactjs وب لرن به شما کمک می‌کند که کار با کتابخانه محبوب جاوااسکریپتی را به سادگی یاد بگیرید.",
      time: "50:00:00",
      price: "120,000",
      id: "learn-react-js",
      altText: "آموزش ReactJS",
      NumberOfSessions: 87,
      firstPartOfLearning: "آشنایی و معرفی",
      secondPartOfLearning: "نصب و راه‌اندازی",
      thirdPartOfLearning: "آشنای با موارد پایه و syntax",
      forthPartOfLearning: "لیست‌ها و شروط",
      fifthPartOfLearning: "استایل‌ها در کامپوننت‌",
      sixthPartOfLearning: "بوتسترپ در react",
      seventhPartOfLearning: "دیباگ‌ کردن",
      eighthPartOfLearning: "چرخه‌زندگی",
      ninethPartOfLearning: "پروژه لیست Todo",
      tenthPartOfLearning: "آشنایی با Context و Reducer",
      eleventhPartOfLearning: "درخواست HTTP و Firebase",
      twelfthPartOfLearning: "کار با React Router",
    },
    {
      title: "آموزش Tailwindcss",
      imageUrl: tailwindImage,
      description: "آموزش کامل tailwindcss به صورت اصولی",
      fullDescription:
        "دقیق‌ترین روش ممکن پیاده‌سازی کنیم اما اگر عجله داشته باشیم و بخواهیم که در مدت زمان سریع‌تری ویژگی‌های مورد نظرمان را پیاده‌سازی کنیم چه؟ در این صورت شما به یک فریمورک نیاز دارید. اما آیا هر فریمورکی می‌تواند کارایی لازم را برای شما داشته باشد؟ خیر! فریمورک‌هایی که به ما در استفاده کردن از CSS کمک می‌کنند بسیار زیاد بوده و هر کدام با مزایا و معایبی دست و پنجه نرم می‌کنند. یکی از بزرگ‌ترین عیب‌های بیشتر فریمورک‌ها سریع نبودن‌شان در امر پیاده‌سازی‌ست. برای حل این مشکل ما باید با تک تک این فریمورک‌ها کار کنیم و در نهایت پس از گذراندن چند ماه متوجه شویم که کدام مورد از کدام مورد دیگر بهتر است! خب این مسئله زمان‌بر و حوصله سربری است. اما از آنجا که خوشبختانه وبسایت آموزشی وب لرن حضور دارد ما می‌توانیم به شما این راهنمایی لازم را بدهیم. به صورت ساده اگر بخواهم بگویم: سریع‌ترین و دقیق‌ترین فریمورکی که با آن می‌توانید لایه‌بندی المان‌های وبسایت‌تان را با آن پیاده‌سازی کنید Tailwind CSS است. فریمورکی تازه کار اما با ویژگی‌های بسیار جذاب.",
      time: "12:35:23",
      price: "90,000",
      id: "learn-tailwindcss",
      altText: "آموزش Tailwindcss",
      NumberOfSessions: 53,
      firstPartOfLearning: "معرفی",
      secondPartOfLearning: "نصب و راه اندازی",
      thirdPartOfLearning: "آشنایی با مفاهیم پایه",
      forthPartOfLearning: "پیاده سازی کامپوننت های کاربردی",
      fifthPartOfLearning: "پروژه Landing Page",
      sixthPartOfLearning: "",
      seventhPartOfLearning: "",
      eighthPartOfLearning: "",
      ninethPartOfLearning: "",
      tenthPartOfLearning: "",
      eleventhPartOfLearning: "",
      twelfthPartOfLearning: "",
    },
    {
      title: "آموزش jQuery",
      imageUrl: jqueryImage,
      description: "آموزش تمام مفاهیم jQuery با پروژه!",
      fullDescription:
        "اگر با دنیای برنامه‌نویسی آشنا باشید، می‌دانید که زبان‌های برنامه‌نویسی بسیار مهم هستند و نقش زیادی در بهبود زندگی انسان دارند. برخی از مهم‌ترین و پرکاربردترین آن‌ها عبارت‌اند از HTML ،CSS و جاوا اسکریپت. HTML و CSS به شما در طراحی و ساختار وب‌سایت کمک می‌کند، جاوا اسکریپت به شما امکان می‌دهد آن را تعاملی کنید. تعدادی فریم ورک و کتابخانه برای جاوا اسکریپت وجود دارد که می‌توانید از آن‌ها برای افزودن ویژگی‌های منحصربه‌فرد به پروژه وب خود استفاده کنید. ازجمله این موارد می‌توان به کتابخانه jQuery اشاره کرد. دوره آموزش jQuery با هدف آموزش این کتاب‌خانه مهم و منحصربه‌فرد در مکتب خونه تهیه شده است که در ادامه به معرفی این دوره آموزشی خواهیم پرداخت.جی کوئری به‌خودی‌خود یک زبان برنامه‌نویسی نیست. این ابزاری است که می‌توانید از آن برای تسهیل توسعه وب در جاوا اسکریپت استفاده کنید. جی کوئری به ما کمک می‌کند تا کارها ساده‌تر و ساده‌تر شوند. جی کوئری علاوه بر اینکه توسعه وب را آسان‌تر می‌کند، مزیت بیشتری از سازگاری بین مرورگرها را نیز به ما می‌دهد. این بدان معناست که کد می‌تواند بدون توجه به اینکه کدام مرورگر برای خروجی استفاده می‌شود، به‌طور مناسب ارائه شود.",
      time: "10:13:00",
      price: "70,000",
      id: "learn-jquery",
      altText: "آموزش Jquery",
      NumberOfSessions: 30,
      firstPartOfLearning: "آشنایی با jQuery",
      secondPartOfLearning: "Selector",
      thirdPartOfLearning: "CSS Selectors Methods",
      forthPartOfLearning: "DOM",
      fifthPartOfLearning: "Events",
      sixthPartOfLearning: "Transition & Animation",
      seventhPartOfLearning: "AJAX",
      eighthPartOfLearning: " پروژه‌های jQuery",
      ninethPartOfLearning: "",
      tenthPartOfLearning: "",
      eleventhPartOfLearning: "",
      twelfthPartOfLearning: "",
    },
    {
      title: "آموزش Sass",
      imageUrl: sassImage,
      description: "آموزش Sass به صورت کامل و واضح",
      fullDescription:
        "اگر در طول روزهای کاری به صورت مکرر با زبان CSS کار کرده باشید می‌توانید متوجه یکسری نقص‌های آن شده و مدام در آرزوی آن باشید که ایکاش ابزاری برای حل این مشکلات وجود داشت. خب خوشبختانه چنین ابزارهایی تحت عنوان پیش‌پردازنده وجود دارند و به شما کمک می‌کنند تا بتوانید مشکلات CSS خام را حل کنید. یکی از محبوب‌ترین پیش‌پردازنده‌های حال حاضر Sass نام دارد. در طی دوره آموزش Sass قصد داریم روش استفاده از این زبان پیش پردازنده CSS را به شکل کامل آموزش دهیم. برای آنکه بتوانید Sass را یاد بگیرید نیاز است در ابتدا با CSS آشنا باشید. برای یادگیری CSS می‌توانید از دوره آموزش CSS استفاده کنید.",
      time: "20:20:00",
      price: "200,000",
      id: "learn-sass",
      altText: "آموزش Sass",
      NumberOfSessions: 28,
      firstPartOfLearning: "معرفی sass",
      secondPartOfLearning: "نصب و راه‌اندازی sass",
      thirdPartOfLearning: "مباحث ابتدایی",
      forthPartOfLearning: "آشنایی با mixinها",
      fifthPartOfLearning: "دستور شرطی",
      sixthPartOfLearning: "کار با حلقه‌ها",
      seventhPartOfLearning: "کار با تابع",
      eighthPartOfLearning: "",
      ninethPartOfLearning: "",
      tenthPartOfLearning: "",
      eleventhPartOfLearning: "",
      twelfthPartOfLearning: "",
    },
    {
      title: "آموزش Bootstrap",
      imageUrl: bootstrapImage,
      description: "آموزش بوتسترپ به صورت کامل و واضح",
      fullDescription:
        "تا به حال به این موضوع فکر کرده‌اید که ایجاد یک رابط کاربری ساده از ابتدای کار و تنها با استفاده از HTML/CSS چقدر زمان‌بر خواهد بود؟ خب اگر جواب این سوال را به صورت صریح می‌خواهید باید بگویم که زمان بسیار زیادی را برای انجام چنین کاری لازم دارید. فرض کنید قصد ایجاد یک اپلیکیشن را دارید و تنها چند ساعت وقت برای تحویل یک رابط کاربری ساده را هم دارید در اینصورت چه کاری انجام می‌دهید؟ ممکن است بگویید که از یک قالب آماده استفاده می‌کنم، خب این هم روشی است اما استفاده از قالب آماده برای پروژه‌ها بنظر کار درستی نیست. در چنین مواقعی شما به یک فریمورک یا کتابخانه نیاز خواهید داشت، فریمورکی که شامل المان‌ها و کامپوننت‌های آماده متفاوتی باشد که به شما این قابلیت را بدهد تا بتوانید بصورت سریع تمام موارد گفته شده را در کنار یکدیگر قرار داده و در نهایت رابط کاربری را ارائه دهید. خب Bootstrap در حقیقت یکی از این کتابخانه‌هاست.",
      time: "10:20:00",
      price: "180,000",
      id: "learn-bootstrap",
      altText: "آموزش Bootstrap",
      NumberOfSessions: 38,
      firstPartOfLearning: "معرفی دوره",
      secondPartOfLearning: "نصب و راه اندازی",
      thirdPartOfLearning: "نصب و راه اندازی",
      forthPartOfLearning: "آشنایی با تایپوگرافی",
      fifthPartOfLearning: "کدها و تصاویر",
      sixthPartOfLearning: "استایل جداول",
      seventhPartOfLearning: "کلاس های کمکی - Border ها و Clearfix",
      eighthPartOfLearning: "",
      ninethPartOfLearning: "",
      tenthPartOfLearning: "",
      eleventhPartOfLearning: "",
      twelfthPartOfLearning: "",
    },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Router>
      <Header />
      <Routes>
        <Route exact element={<Home />} path="/" />
        <Route exact element={<Skills />} path="/skills" />
        <Route exact element={<Pay />} path="/pay" />
        <Route exact element={<About />} path="/about" />
        <Route exact element={<Contact />} path="/contact-us" />
        <Route exact element={<Blogs />} path="/blogs" />
        <Route exact element={<PageNotFound />} path="*" />
        <Route
          exact
          element={
            <SingleSkillPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              skillsData={skillsData}
            />
          }
          path="/skills/:id"
        />
        <Route
          exact
          element={<SingleCoursesPage skillsData={skillsData} />}
          path="/skills/:id"
        />
      </Routes>
      <BackToTop />
      <Comments />
      <Footer />
    </Router>
  );
}

export default App;
