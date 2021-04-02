import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="mailto:sushdec6@gmail.com"
                className="fa fa-envelope-o fa-lg"
              ></a>
            </li>
            <li>
              <a
                href="https://github.com/Sushmithamallesh"
                className="fab fa-github fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sushmitha-mallesh-639528133/"
                className="fab fa-linkedin-in fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/_sushh_"
                className="fab fa-twitter fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://www.strava.com/athletes/65813165"
                className="fab fa-strava fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/user/9cix2q58ytpsl8f58swb6z8li?si=1d6e83703db940c0"
                className="fab fa-spotify fa-lg"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
