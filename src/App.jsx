import { useEffect, useState } from 'react'
import bg from './assets/bg2.png'
import bg1 from './assets/bg3.jpg'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1300)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="spinner" />
          <p className="loading-text">Loading Aesthetic Dreams...</p>
        </div>
      ) : (
        <>
          <nav className="navbar glass">
            <div className="nav-logo">Aesthetic Dreams</div>
            <div className="nav-links">
              <button className="nav-btn">About</button>
              <button className="nav-btn">Products</button>
              <button className="nav-btn">Contact</button>
              <button className="login-btn">Login</button>
            </div>
          </nav>

          <section className="container fade-in">
            <div className="left-panel slide-in">
              <h1 className="title gradient-text">Welcome to Aesthetic Dreams</h1>
              <p className="subtitle">Where code meets art in vibrant harmony.</p>
            </div>
            <img src={bg} className="img-right zoom-in" alt="Anime Girl" />
          </section>
           <div className="scroll-indicator bounce">↓ Scroll Down</div>
          <section className="below-section">
          <div className="container fade-in reverse">
            <div className="image-container">
              <img src={bg1 } className="img-left zoom-in" alt="Anime Character" />
              <div className="text-overlay">
                <h2 className="title gradient-text">Discover Your Inner Artist</h2>
                <p className="subtitle">
                  Aesthetic Dreams isn’t just a playground for code — it's where visual storytelling meets digital craftsmanship.
                  <br /><br />
                  Dive into an immersive experience where UI design, animation, and interactivity converge to express creativity without limits.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer">
        <div class="footer-content">
          <p>&copy; 2025 Navaneet Jayakrishnan. All rights reserved.</p>
          <div class="footer-links">
            <a href="#" class="footer-link">About</a>
            <a href="#" class="footer-link">Privacy</a>
            <a href="#" class="footer-link">Contact</a>
          </div>
          <div class="social-media">
            <a href="https://www.instagram.com" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com" class="social-icon"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </footer>
        </>
      )}
    </>
  )
}

export default App
