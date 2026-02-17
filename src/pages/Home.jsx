import React from "react";
import MCQS_cart from "../Components/MCQS_cart";
import home from "../assets/home.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen  ">
      {/* --- Hero Image Section --- */}
      <div className="w-full overflow-hidden shadow-lg border-b-4 border-emerald-600">
        <img 
          src={home} 
          alt="Home Banner" 
          className="w-full h-auto object-cover max-h-[250px] md:max-h-[450px]"
        />
      </div>

      {/* --- Premium WhatsApp Section --- */}
      {/* Mobile pe mt-6 (normal gap), Desktop pe md:-mt-12 (overlap effect) */}
      <div className="max-w-7xl  mx-auto px-4 mt-6 md:-mt-12 relative z-10 mb-12">
        <div className="bg-white border-b-4 border-emerald-800 p-6 md:p-8 rounded-[1rem] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left ">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight leading-tight">
              JOIN OUR <span className="text-emerald-600 uppercase">Study Group</span>
            </h2>
            <p className="text-slate-500 font-bold text-xs md:text-sm mt-1">Get daily updates, PDFs, and new MCQs.</p>
          </div>

          {/* Solid Green Button Logic */}
          <a 
            href="https://wa.me/YOUR_NUMBER" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#059669] hover:bg-[#10b981] text-white px-8 py-4 rounded-2xl font-black text-sm md:text-lg shadow-lg shadow-green-900/20 transition-all active:scale-95 border-b-4 border-[#064e3b] hover:border-[#059669]"
          >
            <FaWhatsapp size={24} />
            WHATSAPP GROUP
          </a>
        </div>
      </div>

      {/* --- MCQs Section --- */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[3px] flex-1 bg-emerald-100 rounded-full"></div>
          <span className="text-emerald-800 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs bg-emerald-50 px-4 py-1 rounded-full border border-emerald-200">
            Explore Categories
          </span>
          <div className="h-[3px] flex-1 bg-emerald-100 rounded-full"></div>
        </div>
        
        <MCQS_cart />
      </div>
    </div>
  );
}