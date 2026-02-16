import React from "react";

export default function Title({ text }) {
  return (
    <div className="w-full flex justify-center my-8">
      <h1 className="text-3xl md:text-2xl font-bold text-gray-800 text-center border-b-4 border-blue-500 pb-2">
        {text}
      </h1>
    </div>
  );
}
