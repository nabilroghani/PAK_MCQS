import React, { useState } from "react";
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaExternalLinkAlt, FaBuilding } from "react-icons/fa";

const JobUpdates = () => {
  // Sample Data for Jobs
  const jobs = [
    {
      id: 1,
      title: "Senior Secondary Teacher (PPSC)",
      department: "Education Department",
      location: "Punjab, Pakistan",
      date: "Feb 20, 2026",
      type: "Government",
      link: "#"
    },
    {
      id: 2,
      title: "Assistant Director (FPSC)",
      department: "Federal Investigation Agency",
      location: "Islamabad",
      date: "Feb 18, 2026",
      type: "Permanent",
      link: "#"
    },
    {
      id: 3,
      title: "Data Entry Operator",
      department: "Health Department",
      location: "KPK, Pakistan",
      date: "Feb 15, 2026",
      type: "Contract",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900 to-black flex flex-col items-center relative overflow-hidden px-4 py-12">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-5%] left-[-5%] w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

      {/* ================= HEADER SECTION ================= */}
      <div className="text-center z-10 max-w-4xl mx-auto mb-16">
        <div className="mb-4 inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <p className="text-cyan-400 text-xs sm:text-sm font-black uppercase tracking-widest">
            Latest Opportunities 2026
          </p>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
          JOB <span className="text-cyan-500">UPDATES</span>
        </h1>
        <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Stay updated with the latest Government and Private job openings in Pakistan. 
          Your next career move starts here.
        </p>
      </div>

      {/* ================= SEARCH & FILTER ================= */}
      <div className="w-full max-w-5xl z-10 mb-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by Job Title or Department..." 
              className="w-full bg-white/10 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>
          <button className="bg-cyan-500 hover:bg-white text-blue-950 font-black px-8 py-3 rounded-xl transition-all active:scale-95">
            SEARCH JOBS
          </button>
        </div>
      </div>

      {/* ================= JOBS LISTING ================= */}
      <div className="w-full max-w-5xl z-10 space-y-4">
        {jobs.map((job) => (
          <div 
            key={job.id} 
            className="group bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-[2rem] hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex gap-5 items-start">
              <div className="bg-cyan-500/20 p-4 rounded-2xl text-cyan-400">
                <FaBriefcase size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-sm text-blue-200/70">
                  <span className="flex items-center gap-1.5"><FaBuilding className="text-cyan-500/50" /> {job.department}</span>
                  <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-cyan-500/50" /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-cyan-500/50" /> {job.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
              <span className="bg-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10">
                {job.type}
              </span>
              <a 
                href={job.link} 
                className="inline-flex items-center gap-2 bg-white text-blue-950 px-6 py-3 rounded-xl font-black text-sm hover:bg-cyan-500 transition-colors"
              >
                APPLY NOW <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ================= FOOTER LINKS ================= */}
      <div className="w-full max-w-6xl mx-auto mt-20 z-10 text-center px-4">
        <h2 className="text-white text-xl font-bold mb-8 uppercase tracking-[0.2em]">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["PPSC JOBS", "FPSC JOBS", "NTS JOBS", "BANK JOBS"].map((cat) => (
            <a 
              key={cat} 
              href="#" 
              className="bg-white/5 hover:bg-cyan-500 hover:text-blue-950 border border-white/10 py-4 rounded-2xl font-bold transition-all text-blue-200 text-sm"
            >
              {cat}
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-blue-400/30 text-xs font-bold tracking-widest uppercase">
          PakLearners Career Portal v2.0
        </div>
      </div>
    </div>
  );
};

export default JobUpdates;