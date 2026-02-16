import React, { useState } from "react";

import MCQs_cart_RightSide from "./MCQs_cart_RightSide.jsx";
import MCQs_Cart_leftSide from "./MCQs_Cart_leftSide.jsx";

export default function MCQS_cart() {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex justify-center">
      {/* Left side: MCQs   */}
      <MCQs_Cart_leftSide />
      {/* right side  */}
      <MCQs_cart_RightSide />
    </div>
  );
}
