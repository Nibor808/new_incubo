import React from "react";
import logo from "../styles/images/incubo_logo.jpg";
import linkedIn from "../styles/images/linkedin.jpg";

export default props => {
  const { toPortfolio, toContact } = props;

  const topRef = React.createRef();

  const toTop = ev => {
    ev.preventDefault();

    setTimeout(() => {
      topRef.current.scrollIntoView({
        behavior: "smooth"
      });
    }, 50);
  };

  return (
    <header ref={topRef}>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container">
          <a href="" className="navbar-brand">
            <img
              id="logo-img"
              src={logo}
              alt="incubo web solutions logo"
              className="img-fluid"
              onClick={toTop}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#content"
            aria-controls="content"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="content">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="" onClick={toPortfolio}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" onClick={toContact}>
                  Contact
                </a>
              </li>
            </ul>

            <div className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/robinerickson08/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="Robin Erickson linkedIn" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
