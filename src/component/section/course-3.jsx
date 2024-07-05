import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const subTitle = "Don’t Miss";
const title = "Some Common Topics Discused";

const courseList = [
  {
    courseTitle:
      "Are females responsible for determining the gender of a child?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle:
      "Is bleeding always a sign of virginity during first-time intercourse?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle: "Does penis size really matter for sexual satisfaction?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle: "How do emotional factors influence sexual satisfaction?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle: "How can couples improve communication about sexual needs?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle:
      "What are the best practices for maintaining sexual health and hygiene?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle: "Does masturbation affect sexual life?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle: "What are the safest ways to explore new sexual experiences?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle: "How does stress affect sexual desire and performance?",
    user: "200",
    commentCount: "23",
  },
  {
    courseTitle: "Is it fine to start intercourse without foreplay?",
    user: "200",
    commentCount: "23",
  },
];

const CourseThree = () => {
  return (
    <div className="course-section style-2 padding-tb section-bg">
      <div className="container ">
        <div className="section-header">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
          <div className="course-navigations">
            <div className="course-navi course-navi-next">
              <i className="icofont-double-left"></i>
            </div>
            <div className="course-navi course-navi-prev">
              <i className="icofont-double-right"></i>
            </div>
          </div>
        </div>
        <div className="section-wrapper ">
          <div className="course-slider p-2 ">
            <div className="swiper-wrapper">
              <Swiper
                // spaceBetween={20}
                slidesPerView={1}
                loop={"true"}
                autoplay={{
                  delay: 2700,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: ".course-navi-prev",
                  nextEl: ".course-navi-next",
                }}
                modules={[Autoplay, Navigation]}
              >
                {courseList.map((val, i) => (
                  <SwiperSlide key={i}>
                    <div className="course-item">
                      <div className="course-inner text-center ">
                        <div className="course-content">
                          <p className="text-monospace h4">
                            - {val.courseTitle}
                          </p>
                          <div className="course-details">
                            <div className="couse-count">
                              {/* <i className="icofont-users-alt-3"></i> {val.user} */}
                            </div>
                            <div className="couse-topic">
                              <i className="icofont-speech-comments"></i>
                              {i + 1}/{courseList.length}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseThree;
