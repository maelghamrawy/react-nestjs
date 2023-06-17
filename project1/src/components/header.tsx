import React from "react";
import { useTranslation } from "react-i18next";
import { haulage, phone, secutity } from "../utlis/images";

const Header = () => {
  const { t: translate } = useTranslation();
 
  return (
    <>
      <header className=" h-[150vh]  bg-cover bg-header ">
        <div className=" container lg:pt-96 md:pt-10 ">
          <div className=" lg:text-white text-black  lg:text-right text-center">
            <h1 className="my-5 text-5xl font-bold ">
              هل تفكر فى افضل موقع <br />
              لانشاء متجر الكترونى؟
            </h1>

            <p className="my-5 font-semibold ">
              الوضوح هو أسلم الطرق نحو الوجهة المطلوبة، أما المجازات والاستعارات
              <br /> والتشبيهات والحلى والطنافس البلاغية، فهي تثير شهية عشاق
              الكلام <br />
              وحيل الكلام وسحر الكلمات المتقاطعة.
            </p>

            <button className="bg-orange-500 rounded-full px-4 py-2 cursor-pointer ">
              {" "}
              القائمه{" "}
            </button>
          </div>
          <div className="lg:mt-[600px] sm:mt-10">
            <div>
              <h1 className="text-3xl text-center">{translate("hello")}</h1>
              <hr className="w-16  h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
              <p className="text-center mb-6">
                لوضوح هو أسلم الطرق نحو الوجهة المطلوبة، أما المجازات والاستعا
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-9 sm:mt-10 sm:px-14  ">
              <div className="card  ">
                <img src={phone} alt="good" className=" mx-auto" />
                <h2 className="">تصميم متجاوب</h2>
                <h2 className="">تصميم متجاوب</h2>
              </div>

              <div className="card  ">
                <img src={secutity} alt="good" className=" mx-auto" />
                <h2 className="">تصميم متجاوب</h2>
                <h2 className="">تصميم متجاوب</h2>
              </div>

              <div className="card ">
                <img src={haulage} alt="good" className=" mx-auto" />
                <h2 className="">تصميم متجاوب</h2>
                <h2 className="">تصميم متجاوب</h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
