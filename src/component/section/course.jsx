import React, { useState } from "react";
import ModalVideo from "../ModalVideo";

const subTitle = "Course Module";
const title = "Comprehensive Sex Education";

const courseList = [
  {
    imgUrl: "assets/images/thumbnail/01.jpeg",
    imgAlt: "Understanding Human Sexuality",
    cate: "Module 1",
    title: "Understanding Human Sexuality",
    totalLeson: "04:49",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "E-4coqzr288",
  },
  {
    imgUrl: "assets/images/thumbnail/02.jpeg",
    imgAlt: "Anatomy and Physiology",
    cate: "Module 2",
    title: "Anatomy and Physiology",
    totalLeson: "05:16",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "aRwOKQiYayE",
  },
  {
    imgUrl: "assets/images/thumbnail/03.jpeg",
    imgAlt: "Reproduction and Conception",
    cate: "Module 3",
    title: "Reproduction and Conception",
    totalLeson: "06:00",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "_91r2Rdnyz0",
  },
  {
    imgUrl: "assets/images/thumbnail/04.jpeg",
    imgAlt: "Sexual Intercourse and Techniques",
    cate: "Module 4",
    title: "Sexual Intercourse and Techniques",
    totalLeson: "05:32",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "dix4YgJ6YlY",
  },
  {
    imgUrl: "assets/images/thumbnail/05.jpeg",
    imgAlt: "Safe Sex Practices",
    cate: "Module 5",
    reviewCount: "03 reviews",
    title: "Safe Sex Practices",
    totalLeson: "05:52",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "PNyi0W35M4k",
  },
  {
    imgUrl: "assets/images/thumbnail/06.jpeg",
    imgAlt: "Sexual Health and Well-being",
    cate: "Module 6",
    title: "Sexual Health and Well-being",
    totalLeson: "04:23",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "bQXPKcmq_Zg",
  },
  {
    imgUrl: "assets/images/thumbnail/07.jpeg",
    imgAlt: "Emotional Aspects of Sexuality",
    cate: "Module 7",
    title: "Emotional Aspects of Sexuality",
    totalLeson: "05:16",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "yegkfj6YDKs",
  },
  {
    imgUrl: "assets/images/thumbnail/08.jpeg",
    imgAlt: "Preparing for Parenthood",
    cate: "Module 8",
    title: "Preparing for Parenthood",
    totalLeson: "05:16",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "UQMZepDlV2Q",
  },
  {
    imgUrl: "assets/images/thumbnail/09.jpeg",
    imgAlt: "Legal and Ethical Considerations",
    cate: "Module 9",
    title: "Legal and Ethical Considerations",
    totalLeson: "06:00",
    schdule: "English",
    btnText: "Play Module Highlight",
    videoId: "HMr_mkWjmf0",
  },
  {
    imgUrl: "assets/images/thumbnail/10.jpeg",
    imgAlt: "Myths and Facts about Sexuality",
    cate: "Module 10",
    title: "Myths and Facts about Sexuality",
    totalLeson: "05:38",
    schdule: "English",
    videoId: "UkOQOtoEB5A",
  },
];

const Course = () => {
  const [isModalVideoOpen, setModalVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
  return (
    <div className="course-section padding-tb section-bg" id="course">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-5 row-cols-md-2 row-cols-1">
            {courseList.map((val, i) => (
              <div
                className="col"
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedVideo(val.videoId);
                  setModalVideoOpen(true);
                }}
              >
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                    </div>
                    <div className="course-content">
                      <div className="course-price">
                        <i className="icofont-ui-play"></i>
                      </div>
                      <div className="course-category">
                        <div className="course-cate">
                          <a href="#">{val.cate}</a>
                        </div>
                        <div className="course-reiew">
                          {/* <Rating /> */}
                          <span className="ratting-count">
                            {" "}
                            {/* {val.reviewCount} */}
                          </span>
                        </div>
                      </div>
                      <h5>{val.title}</h5>
                      <div className="course-details">
                        <div className="couse-count">
                          <i className="icofont-video-alt"></i> {val.totalLeson}
                        </div>
                        <div className="couse-topic">
                          <i className="icofont-globe"></i> {val.schdule}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ModalVideo
            videoSource={selectedVideo}
            isModalVideoOpen={isModalVideoOpen}
            setModalVideoOpen={setModalVideoOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Course;
