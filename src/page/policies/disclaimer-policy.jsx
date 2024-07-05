import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const DisclaimerPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Disclaimer Policy"} curPage={"Disclaimer Policy"} />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <div className="disclaimer-policy">
                              <h5 className="disclaimer-h5">
                                Disclaimer Policy
                              </h5>
                              <p>
                                SexEdu.in ("we," "us," "our") provides
                                educational content on sexual health and
                                relationships for informational purposes only.
                                By accessing and using our website, you agree to
                                the following disclaimer:
                              </p>

                              <h5 className="disclaimer-h5">
                                No Medical Advice
                              </h5>
                              <p>
                                The information presented on SexEdu.in is not
                                intended to replace professional medical advice,
                                diagnosis, or treatment. We do not provide
                                medical services or consultations. Always seek
                                the advice of a qualified healthcare provider
                                for any medical concerns.
                              </p>

                              <h5 className="disclaimer-h5">
                                Educational Use Only
                              </h5>
                              <p>
                                Our content is designed for educational purposes
                                to promote understanding and awareness of sexual
                                health topics. It is not intended to endorse
                                specific treatments, products, or medical
                                procedures.
                              </p>

                              <h5 className="disclaimer-h5">
                                Accuracy of Information
                              </h5>
                              <p>
                                While we strive to provide accurate and
                                up-to-date information, SexEdu.in makes no
                                representations or warranties of any kind,
                                express or implied, about the completeness,
                                accuracy, reliability, suitability, or
                                availability of the information contained on our
                                website.
                              </p>

                              <h5 className="disclaimer-h5">
                                User Responsibility
                              </h5>
                              <p>
                                Users of SexEdu.in are responsible for
                                evaluating the accuracy, completeness, and
                                usefulness of the information provided. Reliance
                                on any information presented on this website is
                                strictly at your own risk.
                              </p>

                              <h5 className="disclaimer-h5">
                                Changes to Disclaimer
                              </h5>
                              <p>
                                SexEdu.in reserves the right to modify, update,
                                or change this Disclaimer Policy at any time
                                without prior notice. It is your responsibility
                                to review this policy periodically for changes.
                              </p>

                              <h5 className="disclaimer-h5">Contact Us</h5>
                              <p>
                                If you have any questions or concerns about our
                                Disclaimer Policy, please contact us at
                                support@SexEdu.in.
                              </p>
                            </div>
                            <div className="tags-section">
                              <ul className="tags lab-ul"></ul>
                              <ul className="lab-ul social-icons">
                                <p>Last Updated On: 19/06/2024</p>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default DisclaimerPolicy;
