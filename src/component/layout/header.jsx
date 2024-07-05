import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={`header-section`}>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo/sexedu.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <Link to="https://course.sexedu.in/">
                <button className="lab-btn" href="https://course.sexedu.in/">
                  LOG IN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
