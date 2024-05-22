import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer__upper">
            <div className="main-footer__row main-footer__row-1">
              <h2 className="heading heading-sm main-footer__heading-sm">
                <span>Social</span>
              </h2>
              <div className="main-footer__social-cont">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/muhammad-haroon-73ba8227b/"
                >
                  <img
                    className="main-footer__icon"
                    src="/assets/png/linkedin-ico.png"
                    alt="icon"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mharoon-dev"
                >
                  <img
                    className="main-footer__icon"
                    src="/assets/png/github-ico.png"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <div className="main-footer__row main-footer__row-2">
              <h4 className="heading heading-sm text-lt">M.Haroon</h4>
              <p className="main-footer__short-desc">
                A MERN-Stack developer building the Websites and that leads to
                the success of the overall product.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
