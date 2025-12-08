function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <h1>Welcome to the Future</h1>
          <p className="subtitle">
            Experience innovation like never before with our cutting-edge solutions designed to transform your digital journey.
          </p>
          <div className="cta-buttons">
            <a href="#" className="btn2 btn-primary">Get Started</a>
            <a href="#" className="btn2 btn-secondary">Learn More</a>
          </div>
        </div>
      </main>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">🎯</div>
          <h3>Smart Analytics</h3>
          <p>
            Advanced AI-powered analytics that provide deep insights into your business performance and customer behavior patterns.
          </p>
          <div className="feature-stats">
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Monitoring</div>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">🔒</div>
          <h3>Enterprise Security</h3>
          <p>
            Bank-grade encryption and multi-layer security protocols ensure your data remains protected at all times with zero compromises.
          </p>
          <div className="feature-stats">
            <div className="stat">
              <div className="stat-number">256-bit</div>
              <div className="stat-label">Encryption</div>
            </div>
            <div className="stat">
              <div className="stat-number">ISO 27001</div>
              <div className="stat-label">Certified</div>
            </div>
          </div>
        </div>

        <div className="feature">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Performance</h3>
          <p>
            Optimized infrastructure delivers blazing-fast response times and seamless user experiences across all devices and platforms.
          </p>
          <div className="feature-stats">
            <div className="stat">
              <div className="stat-number">&lt;100ms</div>
              <div className="stat-label">Response</div>
            </div>
            <div className="stat">
              <div className="stat-number">99.99%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions designed to accelerate your business growth and digital transformation journey
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h4>Digital Strategy</h4>
              <p>
                Custom digital transformation strategies that align with your business goals and drive measurable results.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">💡</div>
              <h4>Innovation Consulting</h4>
              <p>
                Expert guidance on emerging technologies and innovative solutions to keep you ahead of the competition.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h4>Data Analytics</h4>
              <p>
                Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h4>Custom Development</h4>
              <p>
                Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h4>Cloud Solutions</h4>
              <p>
                Scalable cloud infrastructure and migration services that ensure optimal performance and cost efficiency.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h4>Digital Marketing</h4>
              <p>
                Data-driven marketing strategies that increase brand visibility and drive qualified leads to your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;