import { useFormik } from "formik";
import { useState } from "react";
import CommentCard from "./CommentCard";
import Img from "../assets/png/Comments.png";


function Comments() {
  const initialValues = {
    name: "",
    description: "",
  };
  const [comments, setComments] = useState([]);

  const onSubmit = async (values) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const description = formData.get("description");
    setComments([...comments, { id: Date.now(), name, description }]);
    // console.log(values);
    // setComments([...comments, values]);
  };

  const handleDelete = (id) => {
    setComments(comments.filter((item) => item.id !== id));
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "نام خود را بنویسید";
    }
    if (!values.description) {
      errors.description = "توضیحات خود را بنویسید";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  const { values, errors, handleSubmit, handleChange, handleBlur } = formik;

  return (
    <section data-aos="fade-up" className="w-full flex flex-col items-center text-center leading-loose mt-32 gap-y-12">
      <h1 className="text-4xl text-white font-black">
        نظرات, پیشنهادات, انتقادات خود را برای ما ارسال کنید!
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <form
          action="#"
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full flex flex-col items-center gap-y-7"
        >
          <div className="flex flex-col justify-between items-start gap-y-3">
            <label htmlFor="" className="text-base text-white font-medium">
              نام خود را وارد کنید
            </label>
            <div className="flex justify-start items-center rounded-xl pr-5 dark:bg-slate-700">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.30225 6.5004L10.0825 10.63C11.2295 11.4496 12.7705 11.4496 13.9175 10.63L19.6977 6.5004M2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875C3.55805 6.13984 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84876C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43055 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="text"
                className="bg-transparent border-none p-3 placeholder:text-xs placeholder:font-light focus:outline-none text-sm placeholder:text-gray-300 text-gray-300 flex justify-center items-center"
                placeholder="مثال : کوروش ساسانی"
                onBlur={handleBlur}
                onChange={(event) =>
                  formik.setFieldValue("name", event.target.value)
                }
                value={values.name}
                name="name"
              />
            </div>
            {errors.name && formik.touched.name && (
              <span className="text-xs text-red-400">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col justify-between items-start gap-y-3">
            <label htmlFor="" className="text-base text-white font-medium">
              توضیحات خود را بنویسید
            </label>
            <textarea
              className="bg-slate-700 rounded-xl border-none p-3 placeholder:text-xs placeholder:font-light focus:outline-none text-sm placeholder:text-gray-300 text-gray-300 flex justify-center items-center"
              placeholder="نظر من در مورد وبسایت شما..."
              cols="30"
              rows="10"
              onBlur={handleBlur}
              onChange={(event) =>
                formik.setFieldValue("description", event.target.value)
              }
              value={values.description}
              name="description"
            ></textarea>
            {errors.description && formik.touched.description && (
              <span className="text-xs text-red-400">{errors.description}</span>
            )}
          </div>
          <button
            type="submit"
            className="w-36 h-10 bg-slate-700 rounded-xl text-white"
          >
            ارسال نظر
          </button>
        </form>
        <div className="w-1/2 md:flex hidden">
          <img src={Img} alt="کامنت ها" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 w-full justify-start flex gap-x-4 text-white">
        کامنت های ثبت شده
        <span>{comments.length}</span>
      </h2>

      {comments.length > 0 && (
        <div className="w-full max-w-lg mt-10">
          {comments.map((comments, index) => (
            <CommentCard
              key={index}
              name={comments.name}
              description={comments.description}
              comments={comments}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Comments;
