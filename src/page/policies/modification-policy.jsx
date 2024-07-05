import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const ModificationPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Modification Policy"}
        curPage={"Modification Policy"}
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
                            <div className="modification-policy">
                              <h5 className="modification-policy-h5">
                                Modification Policy
                              </h5>
                              <p>
                                SexEdu.in ("we," "us," "our") reserves the right
                                to modify, amend, or update these policies at
                                any time without prior notice. Changes to our
                                policies will be effective immediately upon
                                posting. It is your responsibility to review
                                these policies periodically for updates.
                              </p>

                              <h5 className="modification-policy-h5">
                                Notification of Changes
                              </h5>
                              <p>
                                We may notify you of significant changes to our
                                policies through prominent announcements on our
                                website or by sending a notification to the
                                email address associated with your account.
                                However, we are not obligated to do so.
                              </p>

                              <h5 className="modification-policy-h5">
                                Acceptance of Changes
                              </h5>
                              <p>
                                By continuing to access or use SexEdu.in after
                                changes to these policies become effective, you
                                agree to be bound by the revised policies. If
                                you do not agree with the modifications, you
                                must stop using our website and services.
                              </p>

                              <h5 className="modification-policy-h5">
                                Contact Us
                              </h5>
                              <p>
                                If you have any questions or concerns about our
                                Modification Policy, please contact us at
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

export default ModificationPolicy;
