import React, { useState } from "react";
import Title from "./Title.jsx";
import { mcqDataCategory } from "../assets/category.js";

export default function MCQs_cart_RightSide({ className = "" }) {
  // All categories open by default
  const initialOpenState = {};
  mcqDataCategory.forEach((cat) => {
    initialOpenState[cat.name] = true;
  });

  const [openMenu, setOpenMenu] = useState(initialOpenState);

  const toggleDropdown = (menuName) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  return (
    <div className={`hidden md:block ${className} pl-6 top-10 self-start`}>
      <div className="bg-white shadow-lg rounded-xl p-6">
        {mcqDataCategory.map((category) => (
          <div key={category.id} className="mb-4">
            {/* Category Header */}
            <div
              className="flex justify-between items-center md:px-2 py-2 bg-[#1565C0] text-white rounded cursor-pointer"
              onClick={() => toggleDropdown(category.name)}
            >
              <Title text={category.name} />
            </div>

            {/* Subcategories */}
            {openMenu[category.name] && (
              <div className="mt-4 flex flex-col gap-2">
                {category.subCategories.map((sub) => (
                  <div
                    key={sub.id}
                    className="px-2 py-2 rounded-lg hover:text-blue-600 hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    {sub.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
