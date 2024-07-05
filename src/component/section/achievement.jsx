import CountUp from "react-countup";
import { Link } from "react-router-dom";

const subTitle = "START TO SUCCESS";
const title = "Achieve Your Sexual Health Goals ";

const achievementList = [
  {
    count: "10",
    desc: "Dive into 10+ detailed modules covering everything",
  },
  {
    count: "357",
    desc: "Over 357 individuals have already joined our community",
  },
  {
    count: "1000",
    desc: "Created with over 1000+ hours of meticulous research",
  },
];

const achieveList = [
  {
    imgUrl: "assets/images/achive/03.jpg",
    imgAlt: "achive thumb rajibraj91 rajibraj",
    title: "Enhance Your Sexual Well-Being Today",
    desc: "Discover expert insights and practical solutions to improve your sexual satisfaction and health. Join our comprehensive course and take control of your sexual well-being.",
    btnText: "Enroll Now",
    siteLink: "#",
  },
];

const Achievement = () => {
  return (
    <div className="achievement-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="counter-part mb-4">
            <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
              {achievementList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="count-item">
                    <div className="count-inner">
                      <div className="count-content">
                        <h2>
                          <span className="count">
                            <CountUp end={val.count} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="achieve-part">
            <div className="row g-4 row-cols-1 row-cols-lg-1">
              {achieveList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="achieve-item">
                    <div className="achieve-inner">
                      <div className="achieve-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="achieve-content">
                        <h4>{val.title}</h4>
                        <p>{val.desc}</p>
                        <Link to={"/enroll"}>
                          <button className="lab-btn">{val.btnText}</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
