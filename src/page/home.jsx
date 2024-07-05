import React from "react";
import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Course from "../component/section/course";
import AboutTwo from "../component/section/about-2";
import Clients from "../component/section/clients";
import Faqs from "../component/section/faq";
import FeatureFour from "../component/section/feature-4";
import Offer from "../component/section/offer";
import CourseThree from "../component/section/course-3";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <AboutTwo />
      <About />
      <Course />
      <Offer />
      <FeatureFour />
      <CourseThree />
      <Clients />
      <Achievement />
      <Faqs />
      <Footer />
    </Fragment>
  );
};

export default Home;
