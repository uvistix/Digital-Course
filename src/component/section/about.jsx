const subTitle = "According to SWIRLSTER NDTV";
const title = "Over 81% of Women Are Not Satisfied with Their Sexual Life.";
const desc =
  "Empower yourself with our comprehensive sexual education course designed to enhance your knowledge, confidence, and satisfaction. Discover how you can transform your sexual well-being today.";

const aboutList = [
  {
    iconName: "icofont-link",
    title: "Science-Based Learning",
    desc: "Gain insights from evidence-based modules that cover essential sexual health topics.",
  },
  {
    iconName: "icofont-chart-pie",
    title: "Structured Learning Journey",
    desc: "Enjoy a guided educational path designed to enhance understanding and skills in sexual education.",
  },
  {
    iconName: "icofont-dart",
    title: "Practical Solutions",
    desc: "Learn practical techniques to improve communication, intimacy, and overall sexual satisfaction.",
  },
];

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
          <div className="col">
            <div className="about-right padding-tb-custom">
              <div className="section-header">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
              </div>
              <div className="section-wrapper">
                <ul className="lab-ul">
                  {aboutList.map((val, i) => (
                    <li key={i}>
                      <div className="sr-left">
                        <i className={val.iconName}></i>
                      </div>
                      <div className="sr-right">
                        <h5>{val.title}</h5>
                        <p>{val.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="about-left">
              <div className="about-thumb">
                <img src="assets/images/about/07.png" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
