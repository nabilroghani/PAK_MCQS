import React from "react";
import MCQs_cart_RightSide from "../Components/MCQs_cart_RightSide";
import MCQs_Cart_leftSide from "../Components/MCQs_Cart_leftSide";

export default function Islamci_MCQs() {
  return (
    <div className="min-h-screen">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2.5fr_1.2fr] gap-8 items-start">
        {/* ================= LEFT SIDE ================= */}
        <div className=" rounded-2xl  p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Islamic Studies MCQs
          </h1>

          <div className="overflow-hidden rounded-xl mb-6">
            <img
              src="https://pakmcqs.com/wp-content/uploads/2020/08/islamic-studies-mcqs-NEW-PakMcqs.jpg.webp"
              alt="Islamic MCQs"
              className="w-full h-56 md:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="flex rounded-lg mt-5 gap-4">
            <p className="text-gray-800 bg-gray-50 p-3 font-bold hover:bg-[#8CA895] rounded-xl hover:text-white transition duration-300 cursor-pointer">
              ISLAMIC STUDY MCQS
            </p>
            <p className="text-gray-800 bg-gray-50 p-3 font-bold hover:bg-[#8CA895] rounded-xl hover:text-white transition duration-300 cursor-pointer">
              ISLAMIC STUDY QUIZ TEST
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            <b>Islamic Studies MCQs </b> are from the history of Islam, basic
            Islamic knowledge and beliefs, the life of Prophet Muhammad (PBUH)
            and his companions (R.A), Quran & Sunnah, Islamic world and
            practices. Most important of Islamic Studies, Islamiat, Islamyat
            MCQs Notes.
          </p>

          <div className="flex gap-5 mb-8">
            <p>
              Now you can also submit latest or your recent Islamic Studies
              MCQs.
            </p>
            <button className="font-bold rounded hover:text-green-800 cursor-pointer transition duration-300">
              SUBMIT HERE
            </button>
          </div>

          <div className="rounded-xl">
            <MCQs_Cart_leftSide className="w-full" />
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <MCQs_cart_RightSide className="mt-20" />
      </div>
    </div>
  );
}
