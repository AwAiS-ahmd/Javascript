import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="navbar-brand">
          <i className="fa-solid fa-note-sticky"></i>
          <span>Keep</span>
        </div>
      </div>

      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="navbar-right">
        <button className="icon-button">
          <i className="fa-solid fa-rotate"></i>
        </button>
        <button className="icon-button">
          <i className="fa-solid fa-list"></i>
        </button>
        <button className="icon-button">
          <i className="fa-solid fa-gear"></i>
        </button>
        <button className="icon-button">
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 