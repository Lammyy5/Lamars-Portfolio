import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
function App() {


  return (
    <div className="container">
      <Router>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/pages/aboutme" element={<AboutMe />} />
            <Route path="/pages/portfolio" element={<Portfolio />} />
            <Route path="/pages/contact" element={<Contact />} />
            <Route path="/pages/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
