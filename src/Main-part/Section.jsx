import "../container.scss";
import "../Main-part/Section.scss";
import card1Img from "../images/designing.png";
import card2Img from "../images/vibrant.png";
import card3Img from "../images/malayalam.png";
import facebook from "../images/icons/facebook.svg";
import instagram from "../images/icons/instagram.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/Linkedin.svg";

const Section = () => {
  return (
    <>
      <main>
        <section className="section">
          <div className="container">
            <div className="section__head">
              <h3 className="section__head--title">Recent posts</h3>
              <a href="#" className="section__head--link">
                View all
              </a>
            </div>
            <div className="section__cards">
              <div className="section__cards--card1">
                <h3 className="section__cards--title">
                  Making a design system from scratch
                </h3>
                <time dateTime="12 Feb 2020" className="section__cards--date">
                  12 Feb 2020
                </time>
                <span className="section__cards--span">Design, Pattern</span>
                <p className="section__cards--text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>

              <div className="section__cards--card1">
                <h3 className="section1__cards--title">
                  Creating pixel perfect icons in Figma
                </h3>
                <time dateTime="12 Feb 2020" className="section__cards--date">
                  12 Feb 2020
                </time>
                <span className="section__cards--span">Figma, Icon Design</span>
                <p className="section__cards--text">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="article">
            <h4 className="article__title">Featured works</h4>
            <div className="article__cards">
              <div className="article__cards--card1">
                <img className="article__cards--img" src={card1Img} alt="designing" />
                <div>
                  <h1 className="article__cards--card1--title">
                    Designing Dashboards
                  </h1>
                  <span className="article__cards--card1--year">2020</span>
                  <span className="article__cards--card1--spn">Dashboard</span>
                  <p className="article__cards--card1--text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="article__cards--card1">
                <img className="article__cards--img" src={card2Img} alt="vibrant" />
                <div>
                  <h1 className="article__cards--card1--title">
                    Vibrant Portraits of 2020
                  </h1>
                  <span className="article__cards--card1--year">2018</span>
                  <span className="article__cards--card1--spn">
                    Illustration
                  </span>
                  <p className="article__cards--card1--text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
              <div className="article__cards--card1">
                <img className="article__cards--img" src={card3Img} alt="malayalam" />
                <div>
                  <h1 className="article__cards--card1--title">
                    36 Days of Malayalam type
                  </h1>
                  <span className="article__cards--card1--year">2018</span>
                  <span className="article__cards--card1--spn">Typography</span>
                  <p className="article__cards--card1--text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
            <div className="container">
            <a href="#" className="footer__logo">FAZLIDDIN</a>
                <div className="footer__social">
                    <a href="https://www.facebook.com/"><img src={facebook} alt="facebook icon" className="footer__social--icon" /></a>
                    <a href="https://www.instagram.com/"><img src={instagram} alt="instagram icon" className="footer__social--icon" /></a>
                    <a href="https://www.facebook.com/"><img src={twitter} alt="twitter icon" className="footer__social--icon" /></a>
                    <a href="https://www.linkedin.com/in/fazliddin-g-oziboyev-022b1226a/"><img src={linkedin} alt="linkedin icon" className="footer__social--icon" /></a>
                </div>
                <a href="mailto:fazliddingoziboyev2@gmail.com" className="footer__email">fazliddingoziboyev2@gmail.com</a>
            </div>
        </footer>
      </main>
    </>
  );
};

export default Section;
