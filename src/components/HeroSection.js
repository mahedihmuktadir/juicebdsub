import React from "react";
import "../App.css";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Stay Fresh, Every Day—Juice Delivered to Your Doorstep
        </h1>
        <p className="hero-subtitle">
          BDT 1,499/month for unlimited flavor access. Just schedule your time – we do the rest.
        </p>
        <a href="#" className="hero-button">Subscribe Now</a>
      </div>
    </section>
  );
};

export default HeroSection;
