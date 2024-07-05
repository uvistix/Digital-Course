import { Fragment } from "react";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";

const IntellectualPolicy = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Intellectual Property Policy"}
        curPage={"Intellectual Property Policy"}
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
                            <div className="intellectual-property-policy">
                              <h5 className="intellectual-property-h5">
                                Intellectual Property Policy
                              </h5>
                              <p>
                                SexEdu.in ("we," "us," "our") respects the
                                intellectual property rights of others and
                                expects our users to do the same. This
                                Intellectual Property Policy outlines our
                                approach to intellectual property protection on
                                our website.
                              </p>

                              <h5 className="intellectual-property-h5">
                                Ownership of Content
                              </h5>
                              <p>
                                All content provided on SexEdu.in, including but
                                not limited to text, images, videos, and
                                graphics, is the property of SexEdu.in or its
                                licensors and is protected by copyright laws.
                              </p>

                              <h5 className="intellectual-property-h5">
                                Use of Content
                              </h5>
                              <p>
                                You may access and view the content on SexEdu.in
                                for personal, non-commercial use only. Any
                                unauthorized use, reproduction, or distribution
                                of our content without prior written consent is
                                strictly prohibited.
                              </p>

                              <h5 className="intellectual-property-h5">
                                User Contributions
                              </h5>
                              <p>
                                By submitting any content (such as comments or
                                feedback) to SexEdu.in, you grant us a
                                non-exclusive, royalty-free, perpetual,
                                irrevocable, and fully sublicensable right to
                                use, reproduce, modify, adapt, publish,
                                translate, create derivative works from,
                                distribute, and display such content worldwide
                                in any media.
                              </p>

                              <h5 className="intellectual-property-h5">
                                Notification of Copyright Infringement
                              </h5>
                              <p>
                                SexEdu.in respects the intellectual property
                                rights of others. If you believe that any
                                content on our website infringes upon your
                                copyright, please notify us immediately by
                                providing the following information: (a) a
                                physical or electronic signature of the
                                copyright owner or a person authorized to act on
                                their behalf; (b) identification of the
                                copyrighted work claimed to have been infringed;
                                (c) identification of the material that is
                                claimed to be infringing or to be the subject of
                                infringing activity; (d) your contact
                                information; and (e) a statement that you have a
                                good faith belief that use of the material in
                                the manner complained of is not authorized by
                                the copyright owner, its agent, or the law.
                              </p>

                              <h5 className="intellectual-property-h5">
                                Contact Us
                              </h5>
                              <p>
                                If you have any questions or concerns about our
                                Intellectual Property Policy, please contact us
                                at support@SexEdu.in.
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

export default IntellectualPolicy;
