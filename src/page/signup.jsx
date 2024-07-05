import React from "react";
import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Cashfree from "../component/Cashfree";

const title = "Enroll Now";
const btnText = "Proceed Payment";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policies, setPolicies] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Comprehensive Sexual Education Course"}
        curPage={"Enroll"}
      />
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" id="enroll">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  required
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="number"
                  placeholder="Number"
                  value={number}
                  required
                  onChange={(e) => {
                    const input = e.target.value;
                    if (input === "" || /^[0-9\b]+$/.test(input)) {
                      setNumber(input);
                    }
                  }}
                  pattern="[0-9]*"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      required
                      value={policies}
                      onClick={() => setPolicies(!policies)}
                    />
                    <label htmlFor="remember">
                      I acknowledge that I have read all the{" "}
                      <span onClick={handleScroll} className="c-policies">
                        policies
                      </span>
                      .
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <Cashfree
                  clsName={"lab-btn"}
                  btnName={btnText}
                  btnType={"submit"}
                  name={name}
                  number={number}
                  email={email}
                  password={password}
                  confirmPassword={confirmPassword}
                  policies={policies}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default SignupPage;
