import Header from '../components/portfolio/Header'
import About from '../components/portfolio/About'
import Projects from '../components/portfolio/Projects'
import Contact from '../components/portfolio/Contact'
import Footer from '../components/portfolio/Footer'

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
