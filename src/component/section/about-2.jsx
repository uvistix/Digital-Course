const aboutList = [
  {
    iconName: "icofont-presentation",
    title: "Thorough Research",
    desc: "Backed by 1000+ hours of research for accurate, in-depth content.",
  },
  {
    iconName: "icofont-clock-time",
    title: "Extended Access",
    desc: "Enjoy a full year (365 days) of access for flexible learning and review.",
  },
  {
    iconName: "icofont-learn",
    title: "Effortless Learning",
    desc: "Master sexual education with seamlessly designed lessons for smooth understanding.",
  },
];

const AboutTwo = () => {
  return (
    <div className="about-section style-2 section-bg">
      <div className="container">
        <div className="row justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
          {aboutList.map((val, i) => (
            <div className="col" key={i}>
              <div className="about-right">
                <div className="section-wrapper">
                  <ul className="lab-ul">
                    <li>
                      <div className="sr-left">
                        <i className={val.iconName}></i>
                      </div>
                      <div className="sr-right">
                        <h5>{val.title}</h5>
                        <p>{val.desc}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
