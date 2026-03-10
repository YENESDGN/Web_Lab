import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import UIKit from './pages/UIKit'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-gray-100 dark:bg-gray-900 p-4 shadow-md sticky top-0 z-30">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex gap-6">
              <Link 
                to="/" 
                className="text-[var(--color-primary)] dark:text-[var(--color-secondary)] font-semibold hover:underline transition-all"
              >
                📁 Portfolio
              </Link>
              <Link 
                to="/ui-kit" 
                className="text-[var(--color-primary)] dark:text-[var(--color-secondary)] font-semibold hover:underline transition-all"
              >
                🎨 UI Kit
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ui-kit" element={<UIKit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
