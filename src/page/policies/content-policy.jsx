import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const ContentPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Content Policy"} curPage={"Content Policy"} />
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
                            <div className="content-policy">
                              <h5 className="content-h5">Content Policy</h5>
                              <p>
                                SexEdu.in ("we," "us," "our") is committed to
                                providing accurate and informative content
                                related to sexual education. This Content Policy
                                outlines the guidelines and standards we adhere
                                to in creating and delivering our educational
                                materials.
                              </p>

                              <h5 className="content-h5">Content Accuracy</h5>
                              <p>
                                All content published on SexEdu.in is based on
                                meticulous research from credible sources.
                                However, we do not claim to be medical
                                professionals or licensed educators. Our content
                                is intended for educational purposes only and
                                should not be considered a substitute for
                                professional advice.
                              </p>

                              <h5 className="content-h5">
                                Source of Information
                              </h5>
                              <p>
                                Information presented on SexEdu.in may include
                                data gathered from various reputable sources
                                such as academic journals, health organizations,
                                educational institutions, and verified experts
                                in the field of sexual education.
                              </p>

                              <h5 className="content-h5">
                                Medical Advice Disclaimer
                              </h5>
                              <p>
                                While our content aims to provide accurate
                                information, it is not intended to diagnose,
                                treat, or cure any medical condition. Users are
                                advised to consult healthcare professionals for
                                personalized medical advice or treatment.
                              </p>

                              <h5 className="content-h5">
                                Copyright and Usage
                              </h5>
                              <p>
                                All content, including text, images, videos, and
                                graphics, on SexEdu.in is protected by copyright
                                law. Users may not reproduce, distribute, or
                                modify our content without prior written
                                permission.
                              </p>

                              <h5 className="content-h5">Changes to Content</h5>
                              <p>
                                We reserve the right to update, modify, or
                                remove content on SexEdu.in at any time without
                                prior notice. Users are responsible for staying
                                informed about changes to our content and
                                policies.
                              </p>

                              <h5 className="content-h5">Contact Us</h5>
                              <p>
                                If you have any questions or concerns about our
                                Content Policy, please contact us at
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

export default ContentPolicy;
