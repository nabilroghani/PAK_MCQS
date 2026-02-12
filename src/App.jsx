import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Header from './Layout/Header'

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
          <Route path="/app" element={<PakApp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/submit" element={<SubmitMcqs />} />
        </Routes>
      </main>
    </div>
  )
}

// Fixed Dummy Components with background and padding to be clearly visible
const Home = () => (
  <div className="p-10 text-center text-2xl bg-white shadow rounded-lg border border-gray-200">
    Home Page - Welcome to PakMCQS
  </div>
);

const About = () => <div className="p-10 text-center text-2xl bg-white shadow rounded-lg">About Us Page</div>;
const Contact = () => <div className="p-10 text-center text-2xl bg-white shadow rounded-lg">Contact Us Page</div>;
const PakApp = () => <div className="p-10 text-center text-2xl bg-white shadow rounded-lg">Download Our App</div>;
const Quiz = () => <div className="p-10 text-center text-2xl bg-white shadow rounded-lg">Start Quiz Section</div>;
const PastPapers = () => <div className="p-10 text-center text-2xl bg-white shadow rounded-lg">Past Papers Collection</div>;
const SubmitMcqs = () => <div className="p-10 text-center text-2xl bg-white shadow rounded-lg">Submit Your MCQs</div>;

export default App