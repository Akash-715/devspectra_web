import {useRef} from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/hero.css";

import Services from '../components/Services.jsx';
import FeaturedWorks from "../components/FeaturedWorks";



export default function Home() {
  const navigate = useNavigate();

  const heroRef = useRef(null);
  return (
    <section ref={heroRef} className="hero">
      <div className="hero-inner">

        <div className="hero-text">
          <p className="eyebrow">DIGITAL AGENCY</p>

          <h1>
            Pixel-perfect websites and fast web apps — built to scale <br />
          </h1>

          <p className="lead">
            We design and develop modern digital products: responsive websites, progressive web apps (PWA), and cloud-native solutions that convert visitors into customers.
          </p>

          <div className="cta-row">
            <button className="btn btn-main">
              Start a Project
            </button>
            <button className="btn btn-ghost">
              View Work
            </button>
          </div>
        </div>

        <Services />
        <FeaturedWorks />

        <div className="contact-cta">
          <div className="contact-cta-inner">
            <h2>
              Want to build something this powerful?
            </h2>
            <p>
              Let’s transform your idea into a high-impact digital experience.
            </p>
            <button onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>



      </div>
    </section>
  );
}
