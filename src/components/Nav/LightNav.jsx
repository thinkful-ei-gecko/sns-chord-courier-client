import React from 'react';
import { Link } from 'react-router-dom';
import './light-nav.css';

export default function LightNav() {
  return (
    <nav className="nav-bar">
      <ul className="link-list">
        <Link to="/search" style={{ textDecoration: 'none' }}>
          <li className="nav-link">Progression Randomizer</li>
        </Link>
        <Link to="/full-search" style={{ textDecoration: 'none' }}>
          <li className="nav-link">Chords by Key</li>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <li className="nav-link">About</li>
        </Link>
      </ul>
    </nav>
  );
}
