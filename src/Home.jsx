function Home() {
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container">
          <div class="logo">
            <a href="#home">YourLogo</a>
          </div>
          <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <main class="hero">
        <div class="hero-content">
          <h1>Welcome to the Future</h1>
          <p class="subtitle">Experience innovation like never before with our cutting-edge solutions designed to transform your digital journey.</p>
          <div class="cta-buttons">
            <a href="#" class="btn btn-primary">Get Started</a>
            <a href="#" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </main>

      <section class="features">
        <div class="feature">
          <div class="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Optimized performance that delivers results at the speed of light</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🛡️</div>
          <h3>Secure & Reliable</h3>
          <p>Enterprise-grade security with 99.9% uptime guarantee</p>
        </div>
        <div class="feature">
          <div class="feature-icon">🚀</div>
          <h3>Easy to Use</h3>
          <p>Intuitive interface designed for seamless user experience</p>
        </div>
      </section>
    </>
  )
}
export default Home