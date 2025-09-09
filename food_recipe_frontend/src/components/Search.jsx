import React, { useState } from 'react';
import '../styles/common.css';
import '../styles/search.css';

/**
 * PUBLIC_INTERFACE
 * Search
 * A React component rendering the Search screen converted from Figma assets.
 * Props: none
 * Returns: JSX for the Search screen with controlled search input and placeholder interactions.
 */
export default function Search() {
  const [query, setQuery] = useState('');

  const onBack = () => {
    window.history.back?.();
  };

  const onFilter = () => {
    alert('Filter options placeholder');
  };

  return (
    <div className="mobile-frame">
      <div className="search-screen" role="document" aria-label="Search Screen">
        <div className="status-bar" aria-hidden="true">
          <div className="time">19:27</div>
          <div className="status-icons" aria-hidden="true"></div>
        </div>

        <header className="header" aria-labelledby="screen-title">
          <button className="back-btn" type="button" aria-label="Go back" onClick={onBack}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 5L3.5 10L8.5 15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 10H16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <h1 id="screen-title" className="title">Search recipes</h1>
        </header>

        <div className="search-row" role="search">
          <div className="search-input">
            <div className="search-rect"></div>
            <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3 11.3L16 16" stroke="#D9D9D9" strokeWidth="1.3" strokeLinecap="round"/>
              <circle cx="8" cy="8" r="5.7" stroke="#D9D9D9" strokeWidth="1.3" fill="none"/>
            </svg>
            <input
              id="search-field"
              className="search-control"
              type="text"
              placeholder="Search recipe"
              aria-label="Search recipe"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button className="filter-btn" type="button" aria-label="Open filters" onClick={onFilter}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6.25h6.25M3.75 6.25H7.5M5.833 3.333v5.833M3.75 13.75h6.25M10 13.75h6.25M14.167 10.833v5.833" stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <h2 className="section-title">Recent Search</h2>

        <section className="cards" aria-label="Recently searched recipes">
          {[
            { title: 'Traditional spare ribs baked', by: 'By Chef John' },
            { title: 'Lamb chops with fruity couscous and mint', by: 'By Spicy Nelly' },
            { title: 'spice roasted chicken with flavored rice', by: 'By Mark Kelvin' },
            { title: 'Chinese style Egg fried rice with sliced pork fillet', by: 'By laura wilson' },
            { title: 'Lamb chops with fruity couscous and mint', by: 'By Spicy Nelly' },
            { title: 'Chinese style Egg fried rice with sliced pork fillet', by: 'By laura wilson' },
          ].map((card, idx) => (
            <article key={idx} className="card" tabIndex={0} aria-label={`${card.title} ${card.by} rated 4.0`}>
              <div className="thumb" aria-hidden="true"></div>
              <div className="rating" aria-label="Rating 4.0">
                <svg className="star" width="8" height="8" viewBox="0 0 8 8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 0.8l0.9 1.83 2.02 0.29-1.46 1.42 0.34 1.99L4 5.53 2.21 6.33l0.35-1.99L1.1 2.92l2.02-0.29L4 0.8z" fill="#FFAD30"/>
                </svg>
                <span className="rating-text">4.0</span>
              </div>
              <h3 className="food-title">{card.title}</h3>
              <p className="creator">{card.by}</p>
            </article>
          ))}
        </section>

        <div className="home-indicator" aria-hidden="true"></div>
      </div>
    </div>
  );
}
