/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import LightHeader from '../Header/LightHeader';
import './landing-page.css';

export default function LandingPage() {
  return (
    <section className="app-description">
      <div className="hero-image">
        <div className="hero-text">
          <LightHeader />
          <h3 className="hero-h3">your catalyst for musical inspiration</h3>
          <h4 className="hero-h4">Explore chord progressions, make them your own</h4>
          <Link to="/search">
            <h5 className="hero-h5">Get started</h5>
          </Link>
        </div>
      </div>
    </section>
  );
}
