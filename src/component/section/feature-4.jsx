const subTitle = "Why Sexual Education Matters";
const title = "Key Benefits and How It Helps You";

const featureLeftList = [
  {
    iconName: "icofont-love",
    title: "Healthy Relationships",
    desc: "Learn the principles of respect, consent, and communication to build and maintain healthy relationships.",
  },
  {
    iconName: "icofont-ui-lock",
    title: "Prevent STIs & Pregnancy",
    desc: "Understand safe practices and contraception to protect yourself and your partners.",
  },
  {
    iconName: "icofont-wink-smile",
    title: "Self-Awareness",
    desc: "Gain insights into your sexual health and body to make informed choices.",
  },
];

const featureRightList = [
  {
    iconName: "icofont-bubble-down",
    title: "Reduce Stigma",
    desc: "Break down myths and taboos, fostering a more open and accepting society.",
  },
  {
    iconName: "icofont-chart-growth",
    title: "Empower Decision-Making",
    desc: "Equip yourself with knowledge to make informed decisions about your body and relationships.",
  },
  {
    iconName: "icofont-users-alt-3",
    title: "Improve Communication",
    desc: "Develop the confidence to discuss sexual health, boundaries, and desires openly.",
  },
];

const FeatureFour = () => {
  return (
    <section className="feature-section style-2 padding-tb pb-0 ">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle yellow-color">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-4 col-sm-6 col-12 order-lg-0">
              <div className="left text-lg-end">
                {featureLeftList.map((val, i) => (
                  <div className="feature-item" key={i}>
                    <div className="feature-inner flex-lg-row-reverse">
                      <div className="feature-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <div className="feature-content">
                        <h5>{val.title}</h5>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 order-lg-2">
              <div className="right">
                {featureRightList.map((val, i) => (
                  <div className="feature-item" key={i}>
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <i className={val.iconName}></i>
                      </div>
                      <div className="feature-content">
                        <h5>{val.title}</h5>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 order-lg-1">
              <div className="feature-thumb">
                <div className="abs-thumb">
                  <img src="assets/images/feature/11.png" alt="education" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureFour;
