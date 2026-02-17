import React, { useState } from "react";

import MCQs_cart_RightSide from "./MCQs_cart_RightSide.jsx";
import MCQs_Cart_leftSide from "./MCQs_Cart_leftSide.jsx";

export default function MCQS_cart() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-10 justify-center">
      {/* Left Side */}
      <MCQs_Cart_leftSide className="w-full md:w-[70%]" />

      <MCQs_cart_RightSide className=" w-full md:w-[30%]" />
    </div>
  );
}
