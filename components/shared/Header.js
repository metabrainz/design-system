import React from 'react';

export default function Header(props) {
  return (
    <>
      <nav className={'navbar navbar-default navbar-trans navbar-expand-lg fixed-top ' + props.theme}>
        <div className="container">
          <button
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler collapsed"
            data-bs-target="#navbarDefault"
            data-bs-toggle="collapse"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="image-container">
            <img
              alt="image"
              className="d-none d-lg-block image"
              height="32"
              src="/assets/img/meb-mini/musicbrainz.svg"
              width="32"
            />
          </div>
          <a className="navbar-brand text-brand" href="/">
            <span className="color-purple">
              Music
            </span>
            <span className="color-orange">
              Brainz
            </span>
          </a>

          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                >
                  English
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item ">
                    Deutsch
                  </a>
                  <a className="dropdown-item ">
                    English
                  </a>
                  <a className="dropdown-item ">
                    Français
                  </a>
                  <a className="dropdown-item ">
                    Italiano
                  </a>
                  <a className="dropdown-item ">
                    Nederlands
                  </a>
                  <a className="dropdown-item ">
                    (Reset Language)
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item">
                    Help Translate
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link "
                  href="https://musicbrainz.org/doc/MusicBrainz_Documentation"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Docs
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link "
                  href="https://musicbrainz.org/doc/MusicBrainz_API"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  API
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link "
                  href="https://blog.metabrainz.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Community
                </a>
              </li>

              <li className="nav-item dropdown">
                <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="navbarDropdown" role="button">Username</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item ">
                    Profile
                  </a>
                  <a className="dropdown-item ">
                    Register
                  </a>
                  <a className="dropdown-item ">
                    Login
                  </a>
                  <a className="dropdown-item ">
                    Applications
                  </a>
                  <a className="dropdown-item ">
                    Subscriptions
                  </a>
                  <a className="dropdown-item ">
                    Logout
                  </a>
                </div>
              </li>
            </ul>

          </div>
          <div className="d-none d-lg-block general-margins">
            <input
              className="form-control"
              id="searchInputHeader"
              name="query"
              placeholder="Search"
              style={{textTransform: 'capitalize'}}
              type="search"
            />
          </div>

          <div className="d-none d-lg-block general-margins">
            <select className="form-control" id="typeHeader" name="type">
              <option>Artist</option>
              <option>Release</option>
              <option>Recording</option>
              <option>Label</option>
              <option>Work</option>
              <option>Release Group</option>
              <option>Area</option>
              <option>Place</option>
              <option>Annotation</option>
              <option>CD Stud</option>
              <option>Editor</option>
              <option>Tag</option>
              <option>Instrument</option>
              <option>Series</option>
              <option>Event</option>
              <option>Documentation</option>

            </select>
          </div>
          <button className="btn btn-b-n" type="button">
            <i className="bi bi-search" />
          </button>
        </div>
      </nav>
    </>
  );
}
