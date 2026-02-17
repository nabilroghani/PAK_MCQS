import React from "react";
import MCQs_cart_RightSide from "../Components/MCQs_cart_RightSide";
import MCQs_Cart_leftSide from "../Components/MCQs_Cart_leftSide";

export default function PakStudy_MCQs() {
  return (
    <div className="min-h-screen">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2.5fr_1.2fr] gap-8 items-start">
        {/* ================= LEFT SIDE ================= */}
        <div className="rounded-2xl  p-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Pak Study MCQs
          </h1>

          {/* Image */}
          <div className="overflow-hidden rounded-xl mb-6">
            <img
              src="https://pakmcqs.com/wp-content/uploads/2017/10/PAKISTAN-STUDIES-MCQS-PakMcqs.com_.jpg.webp"
              alt="Pak study MCQs"
              className="w-full h-56 md:h-80 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Pak Study MCQs, Get complete MCQs of Pakistan Studies for NTS, FPSC,
            PPSC, SPSC, CSS, PMS Test Preparation. Basic Information About
            Pakistan and Different Categories related to PakStudy MCQs.
          </p>

          {/* Menu Section */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Pakistan Studies Menu
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "1. Pakistan Current Affairs",
                "2. Pakistan History",
                "3. Pakistan General Knowledge",
                "4. Defence & Armed Forces",
                "5. IMP Days of Pakistan",
                "6. Mountains and Glaciers",
                "7. Natural Resources",
                "8. Culture of Pakistan",
                "9. Industrial Development",
                "10. Punjab",
                "11. Khyber Pakhtoon Khawah",
                "12. Sindh",
                "13. Balochistan",
                "14. ICT FATA AND AJK",
                "15. Gilgit Baltistan",
                "16. Land & Climate",
                "17. Education in Pakistan",
                "18. Miscellaneous",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz Section */}
          <div className="bg-gray-50 p-3 inline-block rounded-lg mt-5 mb-4">
            <p className="text-gray-800 font-bold">
              PAKISTAN STUDIES ONLINE QUIZ TEST
            </p>
          </div>

          <div className="flex gap-5 mb-8">
            <p>Now you can submit latest Pakistan Studies MCQs.</p>
            <button className="font-bold rounded hover:text-green-800 cursor-pointer transition duration-300">
              SUBMIT HERE
            </button>
          </div>

          {/* MCQs List */}
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
