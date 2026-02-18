import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Header from "./Layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PastPapers from "./pages/PastPapers";
import SubmitMcqs from "./pages/SubmitMcqs";
import Footer from "./Layout/Footer";
import GK_MCQs from "./pages/GK_MCQs";
import PakStudy_MCQs from "./pages/PakStudy_MCQs";
import Islamci_MCQs from "./pages/Islamci_MCQs";
import EveryDay_sci from "./pages/EveryDay_sci";
import WorldCurrentAffairs from "./pages/WorldCurrentAffairs";
import PakistanCurrentAffairs from "./pages/PakistanCurrentAffairs";
import Biology from "./pages/dropdownPages/Biology";
import JobUpdates from "./pages/JobUpdates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import EBooks from "./pages/EBook";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Both are sticky, they stay at the top */}
      <Navbar />
      <Header />

      {/* Added MT-8 (Margin Top) so content shows below the headers */}
      <main className="max-w-7xl mx-auto px-4 mt-8 pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/job-updates" element={<JobUpdates />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/submit" element={<SubmitMcqs />} />
          <Route path="/e-book" element={<EBooks/>}/>
          <Route path="/gk-mcqs" element={<GK_MCQs />} />
          <Route path="/pak-study" element={<PakStudy_MCQs />} />
          <Route path="/islamic-studies" element={<Islamci_MCQs />} />
          <Route path="/everyday-science" element={<EveryDay_sci />} />
          <Route path="/pakistan-current-affairs" element={<PakistanCurrentAffairs/>}/>
          <Route path="/world-current-affairs" element={<WorldCurrentAffairs/>}/>
          <Route path="/biology" element={<Biology/>}/>

        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
