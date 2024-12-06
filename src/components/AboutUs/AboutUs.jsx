import React from "react";
import sale from "../../assets/sale.png";
import { Zoom } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className=" w-10/12 mx-auto bg-transparent">
      <h1 className="text-2xl sm:text-4xl font-bold my-2 text-center text-blue-600">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light text-green-600">
          Us
        </span>
      </h1>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-14">
        <div className=" space-y-5 ">
          <Zoom>
            <p className="text-left text-lg text-green-400">We are Game Gear</p>
          </Zoom>
          <h2 className="text-left text-blue-600 text-3xl">
            A Leading sports Equipment store in Bangladesh
          </h2>
          <Zoom>
            <h4 className="text-left text-gray-500 dark:text-green-500 text-2xl">
              SINCE 2020!
            </h4>
          </Zoom>
          <p className="text-left text-gray-800 dark:text-blue-500 text-lg">
            our focus has always been-and will continue to be-delivering a
            quality experience with our equipment. We understand that our
            products are an investment and we source them to keep pace with your
            own longterm fitness goals.
          </p>

          <Zoom>
            <h4 className="text-left text-gray-500 dark:text-green-500 text-2xl">
              OUR STRENGTH, OUR PARTNERS
            </h4>
          </Zoom>

          <p className="text-left text-gray-800 dark:text-blue-500 text-lg">
            A wide variety of fitness goods and equipment from around to globe
            to meet the needs of our clients.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Zoom>
            <img className="w-96 " src={sale} alt="" />
          </Zoom>
          <h2 className="text-gray-500 dark:text-green-500 text-2xl md:pl-20">
            Sign Up For Great Promos And Inside Deals!
          </h2>
          <div className="md:px-20 py-10 relative">
            <input
              className="w-80 h-20 rounded-3xl dark:bg-slate-50 bg-slate-600 pl-5 text-xl "
              type="email"
              placeholder="your email"
            />
            <button className="btn btn-primary h-20 rounded-3xl lg:absolute right-10">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
