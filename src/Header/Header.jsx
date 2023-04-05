import "../Header/Header.scss";
import heroImg from '../images/hero-img.png'
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="nav">
              <a href="#" className="nav__logo">
                FAZLIDDIN
              </a>
              <ul className="nav__menu">
                <li className="nav__menu--item">
                  <a href="#" className="nav__menu--link">
                    Works
                  </a>
                </li>
                <li className="nav__menu--item">
                  <a href="#" className="nav__menu--link">
                    Blog
                  </a>
                </li>
                <li className="nav__menu--item">
                  <a href="#" className="nav__menu--link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="hero">
            <div className="hero__right">
                <h1 className="hero__right--title">Hi, I am Fazliddin,Web Developer</h1>
                <p className="hero__right--text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <button className="hero__right--btn">Download Resume</button>
            </div>

            <div className="hero__left">
                <img className="hero__left--img" src={heroImg} alt="person img"/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
