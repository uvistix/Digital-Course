import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const SupportPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Support Policy"} curPage={"Support Policy"} />
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
                            <div className="support-policy">
                              <h5 className="support-policy-h5">
                                Support Policy
                              </h5>
                              <p>
                                SexEdu.in ("we," "us," "our") provides support
                                to users through email only. Our support team
                                strives to respond to inquiries and requests
                                promptly, although response times may vary based
                                on the volume of requests.
                              </p>

                              <h5 className="support-policy-h5">
                                Contacting Support
                              </h5>
                              <p>
                                For assistance or inquiries related to our
                                services, you can contact our support team at
                                support@SexEdu.in. Please include detailed
                                information about your issue or request to
                                facilitate a quicker response.
                              </p>

                              <h5 className="support-policy-h5">Limitations</h5>
                              <p>
                                While we aim to provide helpful and timely
                                support, we cannot guarantee immediate
                                resolutions to all issues. Some inquiries may
                                require further investigation or coordination
                                with third-party providers.
                              </p>

                              <h5 className="support-policy-h5">
                                Availability
                              </h5>
                              <p>
                                Support services are available during our
                                business hours, Monday through Friday, excluding
                                public holidays. Responses may be delayed
                                outside of these hours.
                              </p>

                              <h5 className="support-policy-h5">Feedback</h5>
                              <p>
                                We value your feedback on our support services.
                                If you have suggestions for improvement or
                                encounter any issues with our support, please
                                let us know at feedback@SexEdu.in.
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

export default SupportPolicy;
