import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
     <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>

          <div className="tmdb">
            <a href="https://www.themoviedb.org/">
              <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" alt="The Movie DB"/>
            </a>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
          </div>
          
          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    );
};
