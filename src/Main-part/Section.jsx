import "../container.scss";
import "../Main-part/Section.scss";
// import card1Img from "../images/designing.png";
// import card2Img from "../images/vibrant.png";
// import card3Img from "../images/malayalam.png";
import facebook from "../images/icons/facebook.svg";
import instagram from "../images/icons/instagram.svg";
import twitter from "../images/icons/twitter.svg";
import linkedin from "../images/icons/Linkedin.svg";
import SectionCard from "../Section-Card/SectionCard";
import ArticleCard from "../Article-Card/ArticleCard";

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
              <SectionCard
                title="Making a design system from scratch"
                time="12 Feb 2020"
                span="Design, Pattern"
              />
              <SectionCard
                title="Creating pixel perfect icons in Figma"
                time="12 Feb 2020" span="Figma, Icon Design"/>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="article">
            <h4 className="article__title">Featured works</h4>
      
              <ArticleCard img="https://picsum.photos/id/2/100/120" title="Designing Dashboards" span="2020" span2="Dashboard"/>
              <ArticleCard img="https://picsum.photos/id/5/150/160" title="Vibrant Portraits of 2020" span="2018" span2="Illustration"/>
              <ArticleCard img="https://picsum.photos/id/10/200/200" title="36 Days of Malayalam type" span="2018" span2="Typography"/>

          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <a href="#" className="footer__logo">
              FAZLIDDIN
            </a>
            <div className="footer__social">
              <a href="https://www.facebook.com/">
                <img
                  src={facebook}
                  alt="facebook icon"
                  className="footer__social--icon"
                />
              </a>
              <a href="https://www.instagram.com/">
                <img
                  src={instagram}
                  alt="instagram icon"
                  className="footer__social--icon"
                />
              </a>
              <a href="https://www.facebook.com/">
                <img
                  src={twitter}
                  alt="twitter icon"
                  className="footer__social--icon"
                />
              </a>
              <a href="https://www.linkedin.com/in/fazliddin-g-oziboyev-022b1226a/">
                <img
                  src={linkedin}
                  alt="linkedin icon"
                  className="footer__social--icon"
                />
              </a>
            </div>
            <a
              href="mailto:fazliddingoziboyev2@gmail.com"
              className="footer__email"
            >
              fazliddingoziboyev2@gmail.com
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Section;
