import { Link } from "react-router-dom";

const newsTitle =
  "Empower Your Sexual Health: Enroll in Our Comprehensive Course Now";
const policiesTitleTwo = "Compliance Policies";
const useTitle = "Useful Links";
const socialTitle = "Social Contact";
const policiesTitle = "Operational Policies";

const useList = [
  {
    text: "Course",
    link: "/#course",
  },
  {
    text: "Testimonials",
    link: "/#testimonials",
  },
  {
    text: "FAQs",
    link: "/#faqs",
  },
  {
    text: "Login",
    link: "#",
  },
  {
    text: "Contact Us",
    link: "contact-us",
  },
];

const policyList = [
  {
    text: "Privacy policy",
    link: "privacy-policy",
  },
  {
    text: "Terms & Conditions",
    link: "terms-conditions",
  },
  {
    text: "Refund Policy",
    link: "refund-policy",
  },
  {
    text: "Content Policy",
    link: "content-policy",
  },
  {
    text: "Support Policy",
    link: "support-policy",
  },
];
const policyListTwo = [
  {
    text: "Disclaimer Policy",
    link: "disclaimer-policy",
  },
  {
    text: "Intellectual Property Policy",
    link: "intellectual-policy",
  },
  {
    text: "Modification Policy",
    link: "modification-policy",
  },
  {
    text: "Community Guidelines",
    link: "community-policy",
  },
  {
    text: "User Responsibilities Policy",
    link: "user-responsibility-policy",
  },
];

const socialList = [
  {
    text: "Facebook",
    link: "https://www.facebook.com/sexdu.india/",
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/sexedu.india/",
  },
  {
    text: "YouTube",
    link: "https://www.youtube.com/@SexEdu-india",
  },
  {
    text: "Twitter",
    link: "#",
  },
  {
    text: "Thread",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="news-footer-wrap">
      <div className="fs-shape">
        <img
          src="/assets/images/shape-img/03.png "
          alt="fst"
          className="fst-1"
        />
        <img
          src="/assets/images/shape-img/04.png"
          alt="fst"
          className="fst-2"
        />
      </div>

      <div className="news-letter">
        <div className="container">
          <div className="section-wrapper">
            <div className="news-title d-md-flex">
              <h3>{newsTitle}</h3>
              <Link to={"/enroll"}>
                <button className="lab-btn mt-4 mt-md-0">
                  Start Learning Today
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-top padding-tb pt-0 ">
          <div className="container">
            <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{useTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {useList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{policiesTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {policyList.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{policiesTitleTwo}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {policyListTwo.map((val, i) => (
                            <li key={i}>
                              <a href={val.link}>{val.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4>{socialTitle}</h4>
                      </div>
                      <div className="content">
                        <ul className="lab-ul">
                          {socialList.map((val, i) => (
                            <li key={i}>
                              <a
                                href={val.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {val.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom style-2">
          <div className="container">
            <div className="section-wrapper">
              <p>
                &copy; 2024 <Link to="/">SexEdu.in.</Link>All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
