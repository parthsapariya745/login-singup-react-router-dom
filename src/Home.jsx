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
          <div class="feature-icon">🎯</div>
          <h3>Smart Analytics</h3>
          <p>Advanced AI-powered analytics that provide deep insights into your business performance and customer behavior patterns.</p>
          <div class="feature-stats">
            <div class="stat">
              <div class="stat-number">99.9%</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Monitoring</div>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="feature-icon">🔒</div>
          <h3>Enterprise Security</h3>
          <p>Bank-grade encryption and multi-layer security protocols ensure your data remains protected at all times with zero compromises.</p>
          <div class="feature-stats">
            <div class="stat">
              <div class="stat-number">256-bit</div>
              <div class="stat-label">Encryption</div>
            </div>
            <div class="stat">
              <div class="stat-number">ISO 27001</div>
              <div class="stat-label">Certified</div>
            </div>
          </div>
        </div>
        <div class="feature">
          <div class="feature-icon">⚡</div>
          <h3>Lightning Performance</h3>
          <p>Optimized infrastructure delivers blazing-fast response times and seamless user experiences across all devices and platforms.</p>
          <div class="feature-stats">
            <div class="stat">
              <div class="stat-number">&lt;100ms</div>
              <div class="stat-label">Response</div>
            </div>
            <div class="stat">
              <div class="stat-number">99.99%</div>
              <div class="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section class="services">
        <div class="services-container">
          <h2 class="section-title">Our Services</h2>
          <p class="section-subtitle">Comprehensive solutions designed to accelerate your business growth and digital transformation journey</p>

          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🚀</div>
              <h4>Digital Strategy</h4>
              <p>Custom digital transformation strategies that align with your business goals and drive measurable results.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">💡</div>
              <h4>Innovation Consulting</h4>
              <p>Expert guidance on emerging technologies and innovative solutions to keep you ahead of the competition.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">📊</div>
              <h4>Data Analytics</h4>
              <p>Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🛠️</div>
              <h4>Custom Development</h4>
              <p>Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">☁️</div>
              <h4>Cloud Solutions</h4>
              <p>Scalable cloud infrastructure and migration services that ensure optimal performance and cost efficiency.</p>
            </div>
            <div class="service-card">
              <div class="service-icon">🎯</div>
              <h4>Digital Marketing</h4>
              <p>Data-driven marketing strategies that increase brand visibility and drive qualified leads to your business.</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>YourLogo</h3>
              <p>Building the future with innovative solutions that transform your digital experience.</p>
              <div class="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Instagram">📷</a>
              </div>
            </div>
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile Apps</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Contact Info</h4>
              <div class="contact-info">
                <p>📧 hello@yourlogo.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Business St, City, State 12345</p>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2024 YourLogo. All rights reserved.</p>
            <div class="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Home