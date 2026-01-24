import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Tech from './pages/Tech'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Resume from './components/Resume' 
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Tech />
        <Projects />
        <Certificates />
        <Resume /> 
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App