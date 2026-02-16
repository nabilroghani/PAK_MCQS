import React from "react";
import MCQs_cart_RightSide from "../Components/MCQs_cart_RightSide";
import MCQs_Cart_leftSide from "../Components/MCQs_Cart_leftSide";

export default function PakStudy_MCQs() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-6 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Pak Study Mcqs
          </h1>

          <div className="overflow-hidden rounded-xl mb-6">
            <img
              src="https://pakmcqs.com/wp-content/uploads/2017/10/PAKISTAN-STUDIES-MCQS-PakMcqs.com_.jpg.webp"
              alt="Pak study MCQs"
              className="w-full h-56 md:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            Pak Study Mcqs , Get Complete Mcqs of Pakistan Studies for NTS,FPSC,
            PPSC,SPSC,CSS,PMS Test Preparation. Basic Information About Pakistan
            Here are the Different Categories related to PakStudy Mcqs.
          </p>

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
