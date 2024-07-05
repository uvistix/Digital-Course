import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const UserPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"User Responsibilities Policy"}
        curPage={"User Responsibilities Policy"}
      />
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
                            <div className="user-responsibilities-policy">
                              <h5 className="user-responsibilities-policy-h5">
                                User Responsibilities
                              </h5>
                              <p>
                                SexEdu.in ("we," "us," "our") provides valuable
                                educational content and services related to
                                sexual health and wellness. By accessing and
                                using our website, you agree to accept and
                                adhere to the following responsibilities:
                              </p>

                              <h5 className="user-responsibilities-policy-h5">
                                Age Requirement
                              </h5>
                              <p>
                                Users must be 18 years of age or older to access
                                our website and its content. It is your
                                responsibility to ensure compliance with legal
                                age requirements in your jurisdiction.
                              </p>

                              <h5 className="user-responsibilities-policy-h5">
                                Use of Information
                              </h5>
                              <p>
                                The information provided on SexEdu.in is for
                                educational purposes only and should not be
                                considered medical advice. It is your
                                responsibility to consult with qualified
                                healthcare professionals regarding specific
                                health concerns or conditions.
                              </p>

                              <h5 className="user-responsibilities-policy-h5">
                                Respect for Others
                              </h5>
                              <p>
                                Respect the privacy, dignity, and rights of
                                other users and members of the community. Do not
                                engage in activities that violate the rights or
                                disrupt the experiences of others.
                              </p>

                              <h5 className="user-responsibilities-policy-h5">
                                Accurate Information
                              </h5>
                              <p>
                                Provide accurate and truthful information when
                                interacting with our website and community. Do
                                not misrepresent yourself or impersonate others.
                              </p>

                              <h5 className="user-responsibilities-policy-h5">
                                Compliance with Policies
                              </h5>
                              <p>
                                Familiarize yourself with and abide by our
                                Privacy Policy, Terms and Conditions, Community
                                Guidelines, and other applicable policies. Your
                                continued use of SexEdu.in constitutes
                                acceptance of these policies.
                              </p>

                              <h5 className="user-responsibilities-policy-h5">
                                Reporting Violations
                              </h5>
                              <p>
                                Report any violations of our policies or
                                inappropriate behavior to our moderation team.
                                Your cooperation helps us maintain a safe and
                                supportive environment for all users.
                              </p>

                              <h5 className="user-responsibilities-policy-h5">
                                Updates and Changes
                              </h5>
                              <p>
                                SexEdu.in reserves the right to update or modify
                                these user responsibilities at any time. It is
                                your responsibility to review these policies
                                periodically to stay informed of any changes.
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

export default UserPolicy;
