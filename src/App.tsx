import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'
function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col overflow-x-hidden">
        {/* Glow Effect */}

        <Navbar />
        <main className="flex grow flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-study" element={<CaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
