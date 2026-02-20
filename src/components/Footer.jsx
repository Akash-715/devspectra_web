import "../Styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-brand">
          <h3>DevSpectra</h3>
          <p>
            Crafting bold digital experiences through strategy,
            design and modern engineering.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-links">
          <h4>Company</h4>
          <Link to="/">Home</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}
        <div className="footer-links">
          <h4>Services</h4>
          <p>Web Development</p>
          <p>UI / UX Design</p>
          <p>Cloud Solutions</p>
          <p>Digital Marketing</p>
        </div>

        {/* CONTACT */}
        <div className="footer-links">
          <h4>Contact</h4>
          <p>Chennai, India</p>
          <p>+91 96009 41222</p>
          <p>connect@devspectra.in</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DevSpectra. All rights reserved.</p>
      </div>

    </footer>
  );
}
