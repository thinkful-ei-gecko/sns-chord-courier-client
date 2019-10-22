import React from 'react';
import { Link } from 'react-router-dom';
import './dark-nav.css';

export default function DarkNav() {
  return (
    <nav className="dark-nav-bar">
      <ul className="dark-link-list">
        <Link to="/search" style={{ textDecoration: 'none' }}>
          <li className="dark-nav-link">Progression Randomizer</li>
        </Link>
        <Link to="/full-search" style={{ textDecoration: 'none' }}>
          <li className="dark-nav-link">Chords by Key</li>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <li className="dark-nav-link">About</li>
        </Link>
      </ul>
    </nav>
  );
}
