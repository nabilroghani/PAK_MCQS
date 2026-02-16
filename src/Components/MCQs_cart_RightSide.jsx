import React, { useState } from "react";
import { FiChevronDown, FiMessageCircle } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import Title from "./Title.jsx";
import { mcqDataCategory } from "../assets/category.js";

export default function MCQs_cart_RightSide() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };
  return (
    <div>
      {/* right side of MCQs Cart  */}

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
