import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Header from "./Layout/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PakApp from "./pages/PakApp";
import Quiz from "./pages/Quiz";
import PastPapers from "./pages/PastPapers";
import SubmitMcqs from "./pages/SubmitMcqs";
import Footer from "./Layout/Footer";

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
          <Route path="/about" element={< About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/app" element={<PakApp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/submit" element={<SubmitMcqs />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
};
<<<<<<< HEAD
 
export default App;
=======
export default App;
>>>>>>> a950cb80da529e21648e7c7240c0f1c6437c0380
