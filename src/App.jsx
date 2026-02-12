import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Header from './Layout/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import PakApp from './pages/PakApp'
import Quiz from './pages/Quiz'
import PastPapers from './pages/PastPapers'
import SubmitMCQS from './pages/SubmitMcqs'
import Footer from './Layout/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Both are sticky, they stay at the top */}
      <Navbar />
      <Header />

      <main className="max-w-7xl mx-auto px-4 mt-8 pb-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/app" element={<PakApp />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/submit" element={<SubmitMCQS />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

// Fixed Dummy Components with background and padding to be clearly visible
const Home = () => (
  <div className="p-10 text-center text-2xl bg-white shadow rounded-lg border border-gray-200">
    Home Page - Welcome to PakMCQS
  </div>
);



export default App