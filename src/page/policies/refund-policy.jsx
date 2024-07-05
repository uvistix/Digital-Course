import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const RefundPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Refund Policy"} curPage={"Refund Policy"} />
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
                            <div className="refund-policy">
                              <h5 className="refund-h5">Refund Policy</h5>
                              <p>
                                We at SexEdu.in strive to provide high-quality
                                educational content and resources to our users.
                                However, due to the nature of our digital
                                products and services, we have a strict policy
                                regarding refunds.
                              </p>

                              <h5 className="refund-h5">Digital Products</h5>
                              <p>
                                All purchases of digital products (courses,
                                modules, etc.) on SexEdu.in are non-refundable.
                                Once a purchase is made, you will have access to
                                the content immediately, and we are unable to
                                offer refunds.
                              </p>

                              <h5 className="refund-h5">Exceptions</h5>
                              <p>
                                Refunds may be considered in exceptional
                                circumstances, such as:
                              </p>
                              <ul>
                                <li>
                                  If there is a technical issue preventing
                                  access to purchased content.
                                </li>
                                <li>
                                  If duplicate charges were made in error.
                                </li>
                              </ul>
                              <p>
                                Requests for refunds must be submitted within 7
                                days of purchase. To request a refund, please
                                contact our support team at support@SexEdu.in
                                with your purchase details and the reason for
                                your request.
                              </p>

                              <h5 className="refund-h5">Contact Us</h5>
                              <p>
                                If you have any questions or concerns about our
                                Refund Policy, please contact us at
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

export default RefundPolicy;
