import "../Styles/about.css";

export default function About() {
  return (
    <section className="about-page">

      <div className="about-container">

        {/* HERO */}
        <div className="about-hero">
          <p className="about-eyebrow">ABOUT DEV SPECTRA</p>
          <h1>
            Engineering Digital Excellence <br />
            With Strategy, Design & Innovation
          </h1>
          <p>
            DevSpectra is a modern digital agency focused on building scalable,
            high-performance web platforms and brand-driven digital experiences.
            We combine engineering precision with creative intelligence.
          </p>
        </div>

        {/* WHAT WE DO */}
        <div className="about-section">
          <div className="about-left">
            <h2>What We Do</h2>
            <p>
              We help startups, businesses and growing brands build powerful
              digital ecosystems. From responsive websites to full-stack
              cloud-native platforms, we design and engineer solutions that
              convert ideas into measurable growth.
            </p>
          </div>

          <div className="about-right">
            <ul>
              <li>Custom Web Application Development</li>
              <li>UI / UX Experience Design</li>
              <li>Cloud & Scalable Backend Systems</li>
              <li>Performance Optimization</li>
              <li>Digital Growth Strategy</li>
            </ul>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mission-vision">

          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              To empower brands through innovative technology and strategic
              design, enabling sustainable digital growth.
            </p>
          </div>

          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              To become a globally recognized digital engineering partner
              delivering transformative experiences at scale.
            </p>
          </div>

        </div>

        {/* VALUES */}
        <div className="values-section">
          <h2>Our Core Values</h2>

          <div className="values-grid">

            <div className="value-card">
              <h4>Innovation First</h4>
              <p>
                We constantly explore new technologies to stay ahead of digital trends.
              </p>
            </div>

            <div className="value-card">
              <h4>Engineering Precision</h4>
              <p>
                We build scalable systems with performance and security in mind.
              </p>
            </div>

            <div className="value-card">
              <h4>User-Centric Design</h4>
              <p>
                Every solution is crafted around usability and real-world impact.
              </p>
            </div>

            <div className="value-card">
              <h4>Transparent Collaboration</h4>
              <p>
                We work closely with clients to turn vision into execution.
              </p>
            </div>

          </div>
        </div>

        {/* MASSIVE ADDITION — STATS SECTION */}
        <div className="stats-section">

          <div className="stat-card">
            <h3>25+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="stat-card">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>

          <div className="stat-card">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <h3>10+</h3>
            <p>Technologies Mastered</p>
          </div>

        </div>

        {/* WHY CHOOSE US */}
        <div className="why-section">
          <h2>Why Choose DevSpectra?</h2>
          <p>
            We don't just build websites — we architect digital systems that
            scale with your business. Our blend of design thinking and
            engineering depth ensures long-term value, not short-term fixes.
          </p>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Ready to Build Something Exceptional?</h2>
          <button className="about-btn">
            Start Your Project
          </button>
        </div>

      </div>

    </section>
  );
}