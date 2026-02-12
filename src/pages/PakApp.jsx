import React from 'react';
import { FaGooglePlay, FaApple, FaMobileAlt, FaCloudDownloadAlt, FaRocket, FaShieldAlt } from 'react-icons/fa';

const PakApp = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-black uppercase tracking-widest">
            Coming Soon to Mobile
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-blue-950 leading-tight">
            Take Your Preparation <span className="text-cyan-500">Everywhere.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We are building the most powerful MCQs app for Pakistani students. Practice for CSS, PMS, NTS, and PPSC exams even without an internet connection.
          </p>
          
          {/* Mockup Download Buttons (Disabled Look) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-2xl opacity-50 cursor-not-allowed border border-gray-700">
              <FaGooglePlay size={24} />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-60">Get it on</p>
                <p className="text-lg font-bold leading-none">Google Play</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-2xl opacity-50 cursor-not-allowed border border-gray-700">
              <FaApple size={28} />
              <div className="text-left">
                <p className="text-[10px] uppercase opacity-60">Download on the</p>
                <p className="text-lg font-bold leading-none">App Store</p>
              </div>
            </div>
          </div>
          <p className="text-cyan-600 font-bold italic animate-pulse">🚀 Development in progress - Stay tuned!</p>
        </div>

        {/* Right Side: Phone Mockup Styling */}
        <div className="lg:w-1/2 relative flex justify-center">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400 rounded-full blur-[120px] opacity-30"></div>
          
          {/* Visual Phone Frame using CSS */}
          <div className="w-[280px] h-[580px] bg-blue-950 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl relative overflow-hidden ring-4 ring-blue-900/20">
             {/* Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20"></div>
             
             {/* App Content Preview */}
             <div className="p-6 pt-12 space-y-4">
                <div className="w-12 h-12 bg-cyan-400 rounded-xl mb-6"></div>
                <div className="h-4 w-3/4 bg-blue-900 rounded-full"></div>
                <div className="h-4 w-full bg-blue-900 rounded-full"></div>
                <div className="h-4 w-1/2 bg-blue-900 rounded-full"></div>
                
                <div className="grid grid-cols-2 gap-3 mt-10">
                   {[1,2,3,4,5,6].map(i => (
                     <div key={i} className="h-20 bg-blue-900/50 rounded-2xl border border-blue-800"></div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* 2. Features Grid */}
      <div className="bg-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-blue-100">
            <div className="w-14 h-14 bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-200">
              <FaMobileAlt size={24} />
            </div>
            <h3 className="text-xl font-black text-blue-950 mb-3">Offline Mode</h3>
            <p className="text-gray-600">Download MCQs and study even when you don't have an active internet connection.</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-blue-100">
            <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
              <FaRocket size={24} />
            </div>
            <h3 className="text-xl font-black text-blue-950 mb-3">Daily Quizzes</h3>
            <p className="text-gray-600">Get notifications for daily new MCQs and Current Affairs to keep your prep sharp.</p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-blue-100">
            <div className="w-14 h-14 bg-cyan-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-200">
              <FaShieldAlt size={24} />
            </div>
            <h3 className="text-xl font-black text-blue-950 mb-3">Dark Mode</h3>
            <p className="text-gray-600">Study late at night comfortably with our optimized Night Mode feature.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PakApp;