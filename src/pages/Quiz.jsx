import React, { useState } from "react";
import { FaPlay, FaTrophy, FaRedo, FaArrowRight } from "react-icons/fa";

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-black flex flex-col items-center justify-center relative overflow-hidden px-4">

      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-bounce duration-[10s]"></div>

      {!quizStarted ? (
        /* ================= INTRO SECTION ================= */
        <div className="text-center z-10 max-w-4xl mx-auto">

          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            <p className="text-cyan-400 text-xs sm:text-sm font-black uppercase tracking-widest">
              Test Your Knowledge
            </p>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-tight">
            QUIZ<span className="text-cyan-500">.</span>
          </h1>

          <p className="text-blue-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Prepare for PPSC, FPSC, and NTS with our interactive daily quiz challenges.
          </p>

          <button
            onClick={() => setQuizStarted(true)}
            className="group inline-flex items-center gap-3 sm:gap-4 bg-cyan-500 hover:bg-white text-blue-950 font-black text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.4)] active:scale-95"
          >
            START CHALLENGE
            <FaPlay className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      ) : (
        /* ================= QUIZ INTERFACE ================= */
        <div className="w-full max-w-3xl z-10 mt-10">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl">

            {/* Progress */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <span className="text-cyan-400 font-bold">
                Question 1/10
              </span>
              <span className="text-white font-mono bg-white/10 px-3 py-1 rounded-lg border border-white/10 italic w-fit">
                Time: 14s
              </span>
            </div>

            <div className="w-full h-2 bg-white/10 rounded-full mb-8">
              <div className="w-[10%] h-full bg-cyan-500 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            </div>

            {/* Question */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
              Who was the first Prime Minister of Pakistan?
            </h2>

            {/* Options */}
            <div className="grid gap-4">
              {[
                "Liaquat Ali Khan",
                "Quaid-e-Azam",
                "Allama Iqbal",
                "Ayub Khan",
              ].map((option, index) => (
                <button
                  key={index}
                  className="w-full p-4 sm:p-5 text-left bg-white/5 hover:bg-white/20 border border-white/10 rounded-xl sm:rounded-2xl text-white font-semibold transition-all hover:pl-8 group flex justify-between items-center"
                >
                  {option}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/20 group-hover:border-cyan-500 transition-colors"></div>
                </button>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4">
              <button
                onClick={() => setQuizStarted(false)}
                className="px-6 py-3 text-blue-300 font-bold flex items-center justify-center gap-2 hover:text-white transition-colors border border-white/10 rounded-lg sm:rounded-xl"
              >
                <FaRedo size={14} /> Reset
              </button>

              <button className="bg-white text-blue-950 px-8 py-3 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-cyan-500 transition-colors shadow-lg">
                NEXT <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FOOTER SECTION ================= */}
      <div className="w-full max-w-6xl mx-auto mt-20 z-10 text-center px-4">

        <p className="text-blue-300 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto mb-8">
          PAK LEARNERS is the first website that provides Mcqs as well as Online Quiz through which Students and Job
          Seeker can prepare for their Job Test/ Educational Test. Taking online Quizzes has no charges fee.
          Attempt Quizzes of Pakmcqs for free. If you like our services then tell your friends about Pakmcqs.com.
          We guarantee that after clearing all of our Online Quizzes tests, you will be able to pass your exam with extremely good grades/Marks.
        </p>

        <h1 className="text-white text-lg sm:text-xl font-bold mb-6">
          More Quizzes will be added soon
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm sm:text-base">
          <a href="#" className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 py-3 rounded-xl transition">
            PAK STUDY MCQS QUIZ
          </a>
          <a href="#" className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 py-3 rounded-xl transition">
            GENERAL KNOWLEDGE QUIZ
          </a>
          <a href="#" className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 py-3 rounded-xl transition">
            ISLAMIC STUDIES MCQS QUIZ
          </a>
          <a href="#" className="bg-white/5 hover:bg-cyan-500/20 border border-white/10 py-3 rounded-xl transition">
            EVERYDAY SCIENCE QUIZ
          </a>
        </div>

        <div className="mt-10 text-blue-400/50 text-xs sm:text-sm font-bold tracking-widest uppercase">
          PakLearners Examination System v1.0
        </div>
      </div>
    </div>
  );
};

export default Quiz;
