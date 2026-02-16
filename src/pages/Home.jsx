import React from "react";
import MCQS_cart from "../Components/MCQS_cart";
import home from "../assets/home.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* --- Hero Image Section --- */}
      <div className="w-full overflow-hidden shadow-lg">
        <img 
          src={home} 
          alt="Home Banner" 
          className="w-full h-auto object-cover max-h-[450px]"
        />
      </div>

      {/* --- Premium WhatsApp Section --- */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 mb-12">
        <div className="bg-white/80 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">
              JOIN OUR <span className="text-emerald-600">STUDY GROUP</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm">Get daily updates, PDFs, and new MCQs directly on your phone.</p>
          </div>

          <a 
            href="https://wa.me/YOUR_NUMBER" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-emerald-200 transition-all hover:scale-105 active:scale-95 group ring-4 ring-emerald-50"
          >
            <FaWhatsapp size={28} className="group-hover:rotate-12 transition-transform" />
            Connect via WhatsApp
          </a>
        </div>
      </div>

      {/* --- MCQs Section --- */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] flex-1 bg-slate-200"></div>
          <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">Explore Categories</span>
          <div className="h-[2px] flex-1 bg-slate-200"></div>
        </div>
        
        <MCQS_cart />
      </div>
    </div>
  );
}