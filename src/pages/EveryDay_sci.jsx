import React from "react";
import MCQs_cart_RightSide from "../Components/MCQs_cart_RightSide";
import MCQs_Cart_leftSide from "../Components/MCQs_Cart_leftSide";

export default function EveryDay_sci() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Everyday Science Mcqs
          </h1>

          <div className="overflow-hidden rounded-xl mb-6">
            <img
              src="https://pakmcqs.com/wp-content/uploads/2017/10/Everyday-Science-mcqs-PakMcqs.com-copy.jpg.webp"
              alt=" every day science MCQs"
              className="w-full h-56 md:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            <b>Everyday Science Mcqs</b>. Here you will find the General Science
            Multiple Choice Questions Mcqs are from Biology, Chemistry, Physics
            and Atmospheric Studies. Everyday Science Online Test 2 Mcqs
            Preparation Practice Questions. All Important Abbreviation related
            to Everyday Science in MCQs. General Science mcqs and Scientific
            facts MCQs. Everyday Science MCQs with Answers.
          </p>
          <p className="text-gray-800 bg-gray-100 p-3 font-bold inline-block rounded-xl transition duration-300 cursor-pointer">
            ISLAMIC STUDY MCQS
          </p>

          <div className="flex gap-5">
            <p>
              Now you can also submit Us latest OR your Recent Test Islamic
              Studies Mcqs.{" "}
            </p>
            <button className="font-bold rounded hover:text-green-800 cursor-pointer transition duration-300">
              SUBMIT HERE
            </button>
          </div>

          <div className="rounded-xl  mt-10">
            <MCQs_Cart_leftSide className="w-full" />
          </div>
        </div>

        {/* Right Side Component */}
        <div className="lg:col-span-1">
          <MCQs_cart_RightSide />
        </div>
      </div>
    </div>
  );
}
