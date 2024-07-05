import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const TermsAndConditions = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Terms & Conditions"} curPage={"Terms & Conditions"} />
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
                            <div className="terms-and-conditions">
                              <h5 className="terms-h5">Introduction</h5>
                              <p>
                                Welcome to SexEdu.in. These terms and conditions
                                ("Terms") govern your access to and use of our
                                website, services, and content. By accessing or
                                using SexEdu.in, you agree to comply with these
                                Terms. If you do not agree with these Terms,
                                please do not use our website or services.
                              </p>

                              <h5 className="terms-h5">Use of Our Services</h5>
                              <p>
                                You must be at least 18 years old to use our
                                services. By using SexEdu.in, you represent that
                                you are at least 18 years old and capable of
                                entering into a legally binding agreement.
                              </p>
                              <p>
                                You agree to use our services for lawful
                                purposes and in compliance with all applicable
                                laws and regulations. You may not use our
                                services to engage in any illegal activities or
                                violate the rights of others.
                              </p>

                              <h5 className="terms-h5">
                                Intellectual Property Rights
                              </h5>
                              <p>
                                All content on SexEdu.in, including text,
                                graphics, logos, images, and videos, is the
                                property of SexEdu.in or its licensors and is
                                protected by copyright and other intellectual
                                property laws. You may not reproduce,
                                distribute, or modify any content from SexEdu.in
                                without our prior written consent.
                              </p>

                              <h5 className="terms-h5">User Accounts</h5>
                              <p>
                                You may need to create an account to access
                                certain features of SexEdu.in. You are
                                responsible for maintaining the confidentiality
                                of your account credentials and for all
                                activities that occur under your account. You
                                agree to notify us immediately of any
                                unauthorized use of your account.
                              </p>

                              <h5 className="terms-h5">Payment and Pricing</h5>
                              <p>
                                Prices for our services are listed on SexEdu.in
                                and are subject to change without notice. You
                                agree to pay all fees and charges associated
                                with your purchases. Payments are processed
                                through secure third-party payment processors,
                                and we do not store your payment information.
                              </p>

                              <h5 className="terms-h5">
                                Modification of Terms
                              </h5>
                              <p>
                                We reserve the right to modify these Terms at
                                any time. Any changes to these Terms will be
                                effective immediately upon posting on SexEdu.in.
                                It is your responsibility to review these Terms
                                periodically for updates. Continued use of our
                                services after any changes constitutes your
                                acceptance of the updated Terms.
                              </p>

                              <h5 className="terms-h5">Termination</h5>
                              <p>
                                We may terminate or suspend your access to
                                SexEdu.in and its services without prior notice
                                or liability for any reason, including if you
                                breach these Terms or engage in prohibited
                                activities.
                              </p>

                              <h5 className="terms-h5">
                                Limitation of Liability
                              </h5>
                              <p>
                                To the extent permitted by law, SexEdu.in and
                                its affiliates, officers, directors, employees,
                                agents, and licensors shall not be liable for
                                any indirect, incidental, special,
                                consequential, or punitive damages, including
                                without limitation, loss of profits, data, use,
                                goodwill, or other intangible losses, resulting
                                from your access to or use of or inability to
                                access or use SexEdu.in and its services.
                              </p>

                              <h5 className="terms-h5">Governing Law</h5>
                              <p>
                                These Terms shall be governed by and construed
                                in accordance with the laws of Karnataka, India,
                                without regard to its conflict of law
                                principles.
                              </p>

                              <h5 className="terms-h5">Contact Us</h5>
                              <p>
                                If you have any questions or concerns about
                                these Terms, please contact us at
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

export default TermsAndConditions;
