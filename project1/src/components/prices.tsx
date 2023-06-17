import React from "react";
import { useQuery } from "react-query";

const Prices = () => {
  const getHeader = async () => {
    const res = await fetch("http://localhost:3000/Package");
    const data = await res.json();
    return data;
  };
  const { data, error, isLoading } = useQuery("header", getHeader);
  console.log(data)
  // Error and Loading states
  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  interface Package {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  if (!Array.isArray(data)) {
    return <div>Data is not available.</div>;
  }

  return (
    <>
      <section className="container  mt-[350px] ">
        <div className=" text-center">
          <h1 className="text-3xl "> لماذا تبدا متجرك عبر رف </h1>
          <hr className="w-16  h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
          <p className="r mb-6">
            لوضوح هو أسلم الطرق نحو الوجهة المطلوبة، أما المجازات والاستعا{" "}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 sm:mt-10 sm:px-14 gap-9 ">
          {data.map((pkg: Package) => (
            
            <div
              key={pkg.id}
              className="bg-slate-50 text-center rounded  drop-shadow-lg relative"
            >
            
              <div className="circle h-10 top-0 w-full rounded-b-full  bg-blue-500"></div>

              <p className="text-2xl mb-10 mt-2">{pkg.description}</p>

              <div className="bg-white rounded-full mx-auto w-40 h-40 ">
                <p className="text-5xl  text-blue-700 pb-3 p-7">{pkg.price}</p>
                <h2 className="">ريال سعودى</h2>
              </div>

              <p className="text-left pl-7">شروط</p>

              <h2 className="">عدد معين من الباقات الكبيره</h2>

              <ul className="space-y-5 my-7 pl-5">
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight">
                    لبسيليبليليلسيلليسل
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Prices;
