import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/layout";
import Gallery from "../components/Gallery";

import favicon from "../assets/images/favicon.png";


const PROJECTS = [
  {
    id: "1",
    src: "",
    thumbnail: "",
    caption: "",
    description:
      "",
  },
];

class HomeIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  render() {
    const siteTitle = "Sushmitha Mallesh | Portfolio";
    const siteDescription = "Personal Portfolio Website for Sushmitha Mallesh";

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <link rel="shortcut icon" type="image/jpg" href={favicon} />
          <meta name="theme-color" content="#212121" />
        </Helmet>

        <div id="main">
          <section id="one">
            <h2>About Me</h2>
            <p class="description">
              Hi! 
              <br></br>
              I like to build things, write, cycle and run.
              <br></br>
              Thanks for visiting here!
            </p>
          </section>

          <section id="two">
            <h2>Projects</h2>
            <p>
            </p>

            <Gallery
              images={PROJECTS.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a
                  href="https://github.com/Sushmithamallesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  See More
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Writing</h2>
            <p>
              'I can shake off everything as I write; my sorrows disappear, my courage is reborn.' -Anne Frank
            </p>
            <div className="row">
                <a
                  href="https://github.com/Sushmithamallesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coming up!
                </a>
            </div>
            <div className="row">
                <a
                  href="https://github.com/Sushmithamallesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coming up!
                </a>
            </div>
          </section>

          <section id="four">
            <h2>Contact</h2>
            <p>
            </p>
            <div className="row">
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="fab fa-twitter"></h3>
                    <a href="https://twitter.com/_sushh_">
                      @Sushmithamallesh
                    </a>
                  </li>
                </ul>
              </div>

              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="fa fa-envelope-o"></h3>
                    <a href="mailto:sushdec6@gmail.com">sushdec6@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
