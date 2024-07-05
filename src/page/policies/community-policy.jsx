import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const CommunityPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Community Guidelines Policy"}
        curPage={"Community Guidelines Policy"}
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
                            <div className="community-guidelines-policy">
                              <h5 className="community-guidelines-policy-h5">
                                Community Guidelines
                              </h5>
                              <p>
                                SexEdu.in ("we," "us," "our") is committed to
                                fostering a safe and supportive community for
                                all users. Our community guidelines are designed
                                to ensure respectful interactions and promote a
                                positive learning environment. By participating
                                in our community, you agree to adhere to these
                                guidelines:
                              </p>

                              <h5 className="community-guidelines-policy-h5">
                                Respectful Behavior
                              </h5>
                              <p>
                                Treat all members of the community with respect
                                and dignity. Avoid personal attacks, harassment,
                                discrimination, or offensive language.
                              </p>

                              <h5 className="community-guidelines-policy-h5">
                                Constructive Communication
                              </h5>
                              <p>
                                Engage in constructive discussions and debates.
                                Provide feedback and opinions in a thoughtful
                                and considerate manner.
                              </p>

                              <h5 className="community-guidelines-policy-h5">
                                Privacy and Confidentiality
                              </h5>
                              <p>
                                Respect the privacy and confidentiality of
                                others. Do not share personal or sensitive
                                information without permission.
                              </p>

                              <h5 className="community-guidelines-policy-h5">
                                Compliance with Laws
                              </h5>
                              <p>
                                Follow all applicable laws and regulations. Do
                                not engage in activities that violate
                                intellectual property rights or any other legal
                                statutes.
                              </p>

                              <h5 className="community-guidelines-policy-h5">
                                Moderation and Enforcement
                              </h5>
                              <p>
                                Our moderators may take action, including
                                warning, suspending, or banning users who
                                violate these guidelines. We reserve the right
                                to remove content that does not align with our
                                community standards.
                              </p>

                              <h5 className="community-guidelines-policy-h5">
                                Feedback and Reporting
                              </h5>
                              <p>
                                Report any violations of these guidelines or
                                inappropriate behavior to our moderation team.
                                Your feedback helps us maintain a safe and
                                welcoming community environment.
                              </p>

                              <h5 className="community-guidelines-policy-h5">
                                Updates to Guidelines
                              </h5>
                              <p>
                                We may update these community guidelines from
                                time to time to reflect changes in community
                                expectations or legal requirements. Users are
                                responsible for reviewing and understanding the
                                latest version of these guidelines.
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

export default CommunityPolicy;
