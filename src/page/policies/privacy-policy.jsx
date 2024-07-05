import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const PrivacyPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Privacy Policy"} curPage={"Privacy Policy"} />
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
                            <div className="privacy-policy">
                              <h5 className="privacy-h5">Introduction</h5>
                              <p>
                                SexEdu.in ("we," "us," "our") is committed to
                                protecting your privacy and ensuring the
                                security of your personal information. This
                                Privacy Policy outlines our practices regarding
                                the collection, use, and protection of your
                                personal data when you visit our website and use
                                our services. By accessing SexEdu.in, you
                                consent to the practices described in this
                                policy.
                              </p>

                              <h5 className="privacy-h5">
                                Information We Collect
                              </h5>
                              <p>
                                <strong>Personal Information:</strong> When you
                                register on our site, enroll in a course,
                                subscribe to our newsletter, or contact us, we
                                may collect personal information such as your
                                name, email address, date of birth, payment
                                information, and other details necessary to
                                provide you with our services.
                              </p>
                              <p>
                                <strong>Usage Data:</strong> We collect
                                information on how you access and use our
                                website and services. This includes your IP
                                address, browser type, operating system,
                                referral URLs, pages visited, and other activity
                                on our site.
                              </p>
                              <p>
                                <strong>
                                  Cookies and Tracking Technologies:
                                </strong>{" "}
                                We use cookies and similar tracking technologies
                                to enhance your user experience, analyze site
                                traffic, and collect information about your
                                interactions with our website.
                              </p>

                              <h5 className="privacy-h5">
                                How We Use Your Information
                              </h5>
                              <p>
                                <strong>Providing Services:</strong> We use your
                                personal information to deliver our courses,
                                process transactions, provide customer support,
                                and communicate with you about your account and
                                our services.
                              </p>
                              <p>
                                <strong>Improving Our Services:</strong> Usage
                                data helps us understand how users interact with
                                our website, allowing us to improve our
                                offerings and user experience.
                              </p>
                              <p>
                                <strong>Marketing and Communication:</strong>{" "}
                                With your consent, we may send you newsletters,
                                promotional materials, and updates about our
                                services. You can opt out of these
                                communications at any time.
                              </p>

                              <h5 className="privacy-h5">Data Security</h5>
                              <p>
                                We implement various security measures to
                                protect your personal information from
                                unauthorized access, disclosure, alteration, and
                                destruction. These measures include secure
                                servers, encryption, and access controls.
                                However, please be aware that no method of
                                transmission over the internet or electronic
                                storage is 100% secure.
                              </p>

                              <h5 className="privacy-h5">Data Retention</h5>
                              <p>
                                We retain your personal information for as long
                                as necessary to fulfill the purposes outlined in
                                this Privacy Policy unless a longer retention
                                period is required or permitted by law.
                              </p>

                              <h5 className="privacy-h5">
                                Third-Party Services
                              </h5>
                              <p>
                                We may use third-party services such as payment
                                processors, email service providers, and
                                analytics tools to help us operate our website
                                and provide our services. These third parties
                                have access to your personal information only to
                                perform specific tasks on our behalf and are
                                obligated to protect your information.
                              </p>

                              <h5 className="privacy-h5">Your Rights</h5>
                              <p>
                                <strong>Access and Correction:</strong> You have
                                the right to access and update your personal
                                information stored with us. You can do this by
                                logging into your account or contacting us
                                directly.
                              </p>
                              <p>
                                <strong>Deletion:</strong> You may request the
                                deletion of your personal information. We will
                                comply with your request unless we are required
                                to retain certain information for legal or
                                operational reasons.
                              </p>

                              <h5 className="privacy-h5">Children's Privacy</h5>
                              <p>
                                Our services are intended for users who are at
                                least 18 years old. We do not knowingly collect
                                personal information from children under 18. If
                                we become aware that we have inadvertently
                                collected information from a child under 18, we
                                will delete such information from our records.
                              </p>

                              <h5 className="privacy-h5">Policy Updates</h5>
                              <p>
                                We may update this Privacy Policy from time to
                                time to reflect changes in our practices or for
                                other operational, legal, or regulatory reasons.
                                Users are responsible for reviewing this policy
                                periodically for any changes. Continued use of
                                our services after any changes constitutes your
                                acceptance of the updated policy.
                              </p>

                              <h5 className="privacy-h5">Legal Jurisdiction</h5>
                              <p>
                                Any disputes arising from this Privacy Policy
                                will be subject to the laws and jurisdiction of
                                the courts in Karnataka, India.
                              </p>

                              <h5 className="privacy-h5">Contact Us</h5>
                              <p>
                                If you have any questions or concerns about this
                                Privacy Policy or our data practices, please
                                contact us at support@SexEdu.in.
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

export default PrivacyPolicy;
