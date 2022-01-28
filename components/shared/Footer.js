import React from 'react';

const Footer = props => {
  return (
    <section className={'section-footer ' + props.theme}>
      <div className="container">
        <div className="row">
          <div
            className={
              props.columnsToShow === 4
                ? 'col-sm-12 col-md-4' : 'col-sm-12 col-md-6'
            }
          >
            <h2>
              <img alt={props.projectName} height="60" src={props.logo} width="240" />
            </h2>
            <br />
            <p className="color-gray">
              {props.projectDescription}
            </p>
            <ul className="list-unstyled">
              <li className="color-a">
                <span className="color-gray">
                  Development IRC:
                </span>
                <a
                  href="https://kiwiirc.com/nextclient/irc.libera.chat/?#metabrainz"
                  rel="noopener noreferrer"
                  target="_blank"
                >#metabrainz
                </a>
              </li>
              <li className="color-a">
                <span className="color-gray">Discussion IRC: </span>
                <a
                  href={'https://kiwiirc.com/nextclient/irc.libera.chat/?#' + props.projectName}
                  rel="noopener noreferrer"
                  target="_blank"
                > #{props.projectName}
                </a>
              </li>
              <li className="color-a">
                <span className="color-gray">Email: </span>
                <a href="mailto:support@metabrainz.org">support@metabrainz.org </a>
              </li>
            </ul>
          </div>
          <br />
          <div className="col-sm-12 col-md-3 section-md-t3">
            <h3 className="w-title-a text-brand">Useful Links</h3>
            <ul className="list-unstyled">
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />
                <a
                  href="https://metabrainz.org/donate"
                  rel="noopener noreferrer"
                  target="_blank"
                >Donate
                </a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />
                <a
                  href="https://wiki.musicbrainz.org/Main_Page"
                  rel="noopener noreferrer"
                  target="_blank"
                >Wiki
                </a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />
                <a
                  href="https://community.metabrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >Community
                </a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />
                <a
                  href="https://blog.metabrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >Blog
                </a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />
                <a
                  href="https://www.redbubble.com/people/metabrainz/shop"
                  rel="noopener noreferrer"
                  target="_blank"
                >Shop
                </a>
              </li>
              <li className="item-list-a">
                <i className="bi bi-chevron-right" />
                <a
                  href="https://metabrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >MetaBrainz
                </a>
              </li>

            </ul>
          </div>
          <div className="col-sm-12 col-md-3 section-md-t3">
            <h3 className="w-title-a text-brand">Fellow Projects</h3>
            <ul className="list-unstyled">
              <li className="image-container item-list-a">
                <i className="bi bi-chevron-right" />
                <div className="image">
                  <img
                    alt="image"
                    height="24"
                    src="/img/meb-icons/ListenBrainz.svg"
                    width="24"
                  />
                </div>
                <a
                  href="https://listenbrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ListenBrainz
                </a>
              </li>
              <li className="image-container item-list-a">
                <i className="bi bi-chevron-right" />
                <div className="image">
                  <img
                    alt="image"
                    height="24"
                    src="/img/meb-icons/CritiqueBrainz.svg"
                    width="24"
                  />
                </div>
                <a
                  href="https://critiquebrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  CritiqueBrainz
                </a>
              </li>
              <li className="image-container item-list-a">
                <i className="bi bi-chevron-right" />
                <div className="image">
                  <img
                    alt="image"
                    height="24"
                    src="/img/meb-icons/Picard.svg"
                    width="24"
                  />
                </div>
                <a
                  href="https://picard.musicbrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Picard
                </a>
              </li>
              <li className="image-container item-list-a">
                <i className="bi bi-chevron-right" />
                <div className="image">
                  <img
                    alt="image"
                    height="24"
                    src="/img/meb-icons/BookBrainz.svg"
                    width="24"
                  />
                </div>
                <a
                  href="https://bookbrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >BookBrainz
                </a>
              </li>
              <li className="image-container item-list-a">
                <i className="bi bi-chevron-right" />
                <div className="image">
                  <img
                    alt="image"
                    height="24"
                    src="/img/meb-icons/AcousticBrainz.svg"
                    width="24"
                  />
                </div>
                <a
                  href="https://acousticbrainz.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  AcousticBrainz
                </a>
              </li>
              <li className="image-container item-list-a">
                <i className="bi bi-chevron-right" />
                <div className="image">
                  <img
                    alt="image"
                    height="24"
                    src="/img/meb-icons/CoverArtArchive.svg"
                    width="24"
                  />
                </div>
                <a
                  href="https://coverartarchive.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Cover Art Archive
                </a>
              </li>

            </ul>
          </div>

          {
            props.columnNumber === 4
              ? <div className="col-sm-12 col-md-2 section-md-t3">
                <h3 className="w-title-a text-brand">
                  Join Us
                </h3>
                <ul className="list-unstyled">
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />
                    <a
                      href="https://musicbrainz.org/doc/Beginners_Guide"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Beginner&apos;s Guide
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />
                    <a
                      href="https://musicbrainz.org/doc/Style"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Style Guidelines
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />
                    <a
                      href="https://musicbrainz.org/doc/How_To"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      How Tos
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />
                    <a
                      href="https://musicbrainz.org/doc/Frequently_Asked_Questions"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />
                    <a
                      href="https://musicbrainz.org/doc/MusicBrainz_Documentation"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Doc Index
                    </a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right" />
                    <a
                      href="https://musicbrainz.org/doc/Development"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Development
                    </a>
                  </li>

                </ul>
              </div> : null
          }

        </div>
        <div className="row center-p">
          <div className="col-md-3 d-none d-md-block">
            <p className="color-gray section-line">
              OSS Geek?
              <a
                href={props.sourceCode}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="color-a">
                  Contribute Here
                </span>
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <p className="section-line image-container copyright ">
              Brought to you by
              <div className="image">
                <img
                  alt="image"
                  height="24"
                  src="/img/meb-icons/MetaBrainz.svg"
                  width="24"
                />
              </div>
              <span className="color-a">
                MetaBrainz Foundation
              </span>
            </p>
          </div>
          <div className="col-md-3 d-none d-md-block">
            <p className="color-gray section-line">
              Found an Issue?
              <a
                href="https://tickets.metabrainz.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="color-a">
                  Report Here
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};
export default Footer;
