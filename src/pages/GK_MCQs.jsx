import React from "react";
import MCQs_cart_RightSide from "../Components/MCQs_cart_RightSide";
import MCQs_Cart_leftSide from "../Components/MCQs_Cart_leftSide";

export default function GK_MCQs() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            General Knowledge MCQs
          </h1>

          <div className="overflow-hidden rounded-xl mb-6">
            <img
              src="https://pakmcqs.com/wp-content/uploads/2017/10/General-Knowledge-mcqs-PakMcqs.com_-1024x538.jpg.webp"
              alt="General Knowledge MCQs"
              className="w-full h-56 md:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            <b>General Knowledge MCQs</b> consists of World Geography,
            Atmosphere, Science & Literature, Events MCQs, Current Affairs MCQs,
            Pakistan Affairs MCQs and International Organizations. These
            questions are very important for all types of exams conducted by
            FPSC, NTS, KPPSC, PPSC, SPSC, BPSC, OTS, UTS, PTS, CTS, ATS, ETEA
            and other testing agencies of Pakistan.
          </p>

          <div className="p-6 mb-8">
            <p className="font-semibold text-gray-700  ">Share</p>
            <button className="w-full md:w-auto bg-gray-100 px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300  ">
              GENERAL KNOWLEDGE ONLINE QUIZ TEST
            </button>

            <div className="mt-4 flex gap-5">
              <p className="text-gray-600 ">
                Now you can submit latest General Knowledge MCQs.
              </p>

              <button className=" font-bold ">SUBMIT HERE</button>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Take the Quiz in Quiz Mode!
            </h2>

            <p className="text-gray-600 mb-6">
              <b>Ready to test your knowledge?</b> We’ve made it easier than
              ever to dive into quiz mode. Simply click the button below and
              start your quiz adventure!
            </p>

            <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition duration-300">
              QUIZ MODE
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
