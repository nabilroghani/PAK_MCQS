import React, { useState } from "react";
import { FiChevronDown, FiMessageCircle } from "react-icons/fi";
import { mcqData } from "../assets/Data.js";
import { FiChevronUp } from "react-icons/fi";
import Title from "./Title.jsx";
import { mcqDataCategory } from "../assets/category.js";

export default function MCQS_cart() {
  const [currentPage, setCurrentPage] = useState(1);
  const mcqsPerPage = 10;
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // Calculate indexes for current page
  const indexOfLastMCQ = currentPage * mcqsPerPage;
  const indexOfFirstMCQ = indexOfLastMCQ - mcqsPerPage;
  const currentMCQs = mcqData.slice(indexOfFirstMCQ, indexOfLastMCQ);

  const totalPages = Math.ceil(mcqData.length / mcqsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex justify-center">
      {/* Left side: MCQs   */}
      <div className="w-full md:w-4/5">
        {currentMCQs.map(
          ({ id, question, options, correctAnswer, submited, readmore }) => (
            <div
              key={id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 mb-6"
            >
              {/* Question */}
              <div className="flex items-start justify-between mb-4">
                <p className="text-gray-900 font-semibold text-lg">
                  {question}
                </p>
                <div className="text-blue-500 text-xl">
                  <FiMessageCircle />
                </div>
              </div>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center p-2 rounded-lg border border-gray-200 hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    <span className="font-bold w-6">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="ml-2 text-gray-800">{option}</span>
                  </div>
                ))}
              </div>

              {/* Correct Answer */}
              <p className="text-sm text-green-600 font-medium mb-2">
                Correct Answer: {correctAnswer}
              </p>

              {/* Submitted by */}
              <p className="text-sm text-gray-500 mb-2">{submited}</p>

              {/* Read More */}
              <details className="text-sm text-gray-700">
                <summary className="cursor-pointer font-medium">
                  {readmore}
                </summary>
                <p className="mt-2">{readmore}</p>
              </details>
            </div>
          ),
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400"
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>

      {/* right side  */}

      <div className="hidden md:block md:w-1.5/5 pl-6 ">
        <div className=" bg-white shadow-lg rounded-xl p-6">
          {mcqDataCategory.map((category) => (
            <div
              onClick={() => toggleDropdown(category.name)}
              key={category.id}
            >
              <div className="flex justify-center items-center">
                <Title text={category.name} />
                <div onClick={() => toggleDropdown(category.name)}>
                  {openMenu === category.name ? (
                    <FiChevronUp className="text-2xl text-gray-700" />
                  ) : (
                    <FiChevronDown className="text-2xl text-gray-700" />
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                {openMenu === category.name
                  ? category.subCategories.map((sub) => (
                      <div
                        key={sub.id}
                        className="px-4 py-2 font-semibold rounded-lg hover:text-blue-600 hover:bg-gray-100 cursor-pointer transition-colors"
                      >
                        {sub.name}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
