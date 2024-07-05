import { Link } from "react-router-dom";

const subTitle = "Congratulations";
const title = (
  <h2 className="title">
    <span className="d-lg-block">Thank You for Your Purchase!</span>
  </h2>
);
const desc =
  "Please check your email inbox for a verification email. Once you've verified your email, return here to log in to start your journey.";

const shapeList = [
  {
    name: "300+ Students Happy",
    link: "#",
    className: "ccl-shape shape-1",
  },
  {
    name: "10 Comprehensive Modules",
    link: "#",
    className: "ccl-shape shape-2",
  },
  {
    name: "1000+ Hours Curated Research",
    link: "#",
    className: "ccl-shape shape-3",
  },
  {
    name: "20+ Expert Insights",
    link: "#",
    className: "ccl-shape shape-4",
  },
  {
    name: "50+ Myths Debunked",
    link: "#",
    className: "ccl-shape shape-5",
  },
];

const Banner = () => {
  return (
    <section className="banner-section ">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-10">
              <div className="banner-content">
                <h6 className="subtitle text-uppercase fw-medium">
                  {subTitle}
                </h6>
                {title}
                <p className="desc">{desc}</p>
                <Link to={"https://course.sexedu.in/"}>
                  <button className="lab-btn">Login Now</button>
                </Link>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6">
              <div className="banner-thumb">
                <img src="assets/images/banner/couple.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes"></div>
      <div className="cbs-content-list d-none">
        <ul className="lab-ul">
          {shapeList.map((val, i) => (
            <li className={val.className} key={i}>
              <a>{val.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Banner;
