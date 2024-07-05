import CountDown from "../sidebar/countdown";
import { Link } from "react-router-dom";

const title = "Unlock Complete Sexual Education for Only";
const desc = "Limited Time Offer!";
const btnText = "Enroll Now";
const discount = "76%";

const Offer = () => {
  return (
    <div className="offer-section padding-tb">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 col-12 align-content-center">
            <div className="section-header">
              <h2 className="title text-white">{title}</h2>
              <h1 className="text-white">
                <s className="h2">₹ 2499</s>{" "}
                <span
                  style={{
                    color: "#F16127",
                  }}
                >
                  ₹ 599/-
                </span>
              </h1>
              <p className="text-white">{desc}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="section-wrapper">
              <div className="offer-area">
                <h3 className="title">
                  <span>{discount}</span> <b>Discount.</b> {""}
                  Ends In!
                </h3>
                <CountDown />
                <Link to={"/enroll"}>
                  <button className="lab-btn">{btnText}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
