import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const subTitle = "Don’t Miss the Day";
const title = "The People Says About Us";

const clientList = [
  {
    desc: "This course has been a game-changer for me. The content is well-researched and presented in an easy-to-understand manner. I feel more confident in my sexual health knowledge now.",
    name: "Anil",
    degi: "Assistant principal",
  },
  {
    desc: "The modules are incredibly detailed and cover everything I needed to know. It has improved my relationship and communication with my partner tremendously.",
    name: "Rajeev",
    degi: "Assistant principal",
  },
  {
    desc: "I joined this course out of curiosity, and I'm so glad I did. It dispelled many myths and provided clear, practical advice. Highly recommend!",
    name: "Usha",
    degi: "Assistant principal",
  },
  {
    desc: "The online format made it easy for me to learn at my own pace. The information is comprehensive and very relevant to real-life situations.",
    name: "Paavani",
    degi: "Assistant principal",
  },
  {
    desc: "I appreciate how inclusive and respectful the course is. It addresses diverse sexual orientations and identities thoughtfully",
    name: "Shobha",
    degi: "Assistant principal",
  },
  {
    desc: "I learned so much about sexual health that I never knew before. The course is engaging and the community support is fantastic.",
    name: "Mithun",
    degi: "Assistant principal",
  },
  {
    desc: "The course helped me understand my body and my partner's needs better. It's definitely worth the investment.",
    name: "Ankit",
    degi: "Assistant principal",
  },
  {
    desc: "From anatomy to emotional aspects, this course covers it all. The practical tips have been especially helpful in improving my sexual health.",
    name: "Sowmya",
    degi: "Assistant principal",
  },
  {
    desc: "I was skeptical at first, but the quality of the content exceeded my expectations. It's thorough, accurate, and very well-structured.",
    name: "Nisha",
    degi: "Assistant principal",
  },
  {
    desc: "This course is a must for anyone looking to enhance their knowledge and improve their sexual well-being. The expert guidance is invaluable.",
    name: "Karthik",
    degi: "Assistant principal",
  },
];

const Clients = () => {
  return (
    <div className="clients-section padding-tb" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="clients-slider overflow-hidden">
            <div className="swiper-wrapper">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={"true"}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                  1200: {
                    width: 1200,
                    slidesPerView: 2.8,
                  },
                }}
              >
                {clientList.map((val, i) => (
                  <SwiperSlide key={i}>
                    <div className="client-item">
                      <div className="client-inner">
                        <div className="client-thumb">
                          {/* <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /> */}
                          <p>{val.name.charAt(0)}</p>
                        </div>
                        <div className="client-content">
                          <p>{val.desc}</p>
                          <div className="client-info">
                            <h6 className="client-name">{val.name}</h6>
                            {/* <span className="client-degi">{val.degi}</span> */}
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

export default Clients;
