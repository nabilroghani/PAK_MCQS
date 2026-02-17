import React, { useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { mcqData } from "../assets/Data.js";

export default function MCQs_Cart_leftSide({ className = "" }) {
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
    <div className={`w-full   ${className}   `}>
      {currentMCQs.map(
        ({ id, question, options, correctAnswer, submited, readmore }) => (
          <div
            key={id}
            className={`bg-white shadow-lg   rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 mb-6   `}
          >
            {/* Question */}

            <div className="flex items-start justify-between mb-4">
              <p className="text-gray-900 font-semibold text-lg">{question}</p>
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
      <div className="mt-6">
        {/* Pagination Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="w-full sm:w-auto px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-2 min-w-[40px] rounded transition ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="w-full sm:w-auto px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-gray-400 transition"
          >
            Next
          </button>
        </div>

        {/* Jump To Section */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto mt-6">
          <input
            type="number"
            min="1"
            max={totalPages}
            placeholder="Jump to page"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition w-full"
          />
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
