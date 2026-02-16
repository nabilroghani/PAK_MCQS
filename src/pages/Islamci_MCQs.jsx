import React from "react";
import MCQs_cart_RightSide from "../Components/MCQs_cart_RightSide";
import MCQs_Cart_leftSide from "../Components/MCQs_Cart_leftSide";

export default function Islamci_MCQs() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Islamic Studies Mcqs
          </h1>

          <div className="overflow-hidden rounded-xl mb-6">
            <img
              src="https://pakmcqs.com/wp-content/uploads/2020/08/islamic-studies-mcqs-NEW-PakMcqs.jpg.webp"
              alt="islamic MCQs"
              className="w-full h-56 md:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>
          <div className=" flex rounded-lg  mt-5">
            <p className="text-gray-800 bg-gray-50 p-3 font-bold hover:bg-[#8CA895] rounded-xl hover:text-white transition duration-300 cursor-pointer">
              ISLAMIC STUDY MCQS
            </p>

            <p className="text-gray-800 bg-gray-50 p-3 font-bold hover:bg-[#8CA895] rounded-xl hover:text-white transition duration-300 cursor-pointer">
              ISLAMIC STUDY QUIZ TEST
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            <b>Islamic Studies Mcqs </b> are from the history of Islam, basic
            Islamic knowledge and beliefs, the life of Prophet Muhammad (PBUH)
            and his companions (R.A), Quran & Sunnah, Islamic world and
            practices. most important of Islamic Studies, Islamiat, Islamyat
            MCQs Notes
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
