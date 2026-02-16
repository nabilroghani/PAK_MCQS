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
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Pakistan Studies Menu
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>1. Pakistan Current Affairs</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>2. Pakistan History</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>3. Pakistan General Knowledge</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>4. Defence & Armed Forces</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>5. IMP Days of Pakistan</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>6. Mountains and Glaciers</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>7. Natural Resources</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>8. Culture of Pakistan</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>9. Industrial Development</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>10. Punjab</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>11. Khyber Pakhtoon Khawah</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>12. Sindh</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>13. Balochistan</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>14. ICT FATA AND AJK</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>15. Gilgit Baltistan</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>16. Land & Climate</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>17. Education in Pakistan</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition">
                <span>18. Miscellaneous</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-3 inline-block rounded-lg  mt-5">
            <p className="text-gray-800  font-bold ">
              PAKISTAN STUDIES ONLINE QUIZ TEST
            </p>
          </div>
          <div className="flex gap-5">
            <p>Now you can submit Us latest Pakistan Studies Mcqs. </p>
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
