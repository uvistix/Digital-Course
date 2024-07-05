import React from "react";
import { Accordion } from "react-bootstrap";

const Faqs = () => {
  return (
    <div className="instructor-section padding-tb pt-0" id="faqs">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Still Confused</span>
          <h2 className="title">Frequently Asked Questions</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="section-wrapper">
              <Accordion defaultActiveKey={window.innerWidth > 992 ? "0" : "0"}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="accordion-header">
                    Is the course suitable for all age groups?
                  </Accordion.Header>
                  <Accordion.Body>
                    The course is designed for adults (18+ years) and is
                    suitable for individuals of all ages who are looking to
                    improve their sexual health knowledge.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="accordion-header">
                    Do I need any prior knowledge to take this course?
                  </Accordion.Header>
                  <Accordion.Body>
                    No prior knowledge is required. The course is designed to be
                    accessible to everyone, regardless of their current level of
                    understanding.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="accordion-header">
                    How is the course delivered?
                  </Accordion.Header>
                  <Accordion.Body>
                    The course is delivered entirely online through engaging
                    video modules, making it convenient for you to learn at your
                    own pace.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="accordion-header">
                    Can couples take the course together?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, couples are encouraged to take the course together to
                    improve their mutual understanding and communication about
                    sexual health.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="accordion-header">
                    How long do I have access to the course materials?
                  </Accordion.Header>
                  <Accordion.Body>
                    Once you purchase the course, you have access to the
                    materials for one year, allowing you to revisit the content
                    as needed.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-md-6">
            <div className="section-wrapper">
              <Accordion defaultActiveKey={window.innerWidth > 992 ? "5" : ""}>
                <Accordion.Item eventKey="5">
                  <Accordion.Header className="accordion-header">
                    Is the course material sensitive to cultural differences?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we strive to ensure that our content is culturally
                    sensitive and respectful of diverse backgrounds and beliefs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header className="accordion-header">
                    Will the course help with sexual dysfunctions?
                  </Accordion.Header>
                  <Accordion.Body>
                    The course provides information on common sexual
                    dysfunctions and offers strategies and techniques to address
                    them, but it is not a substitute for professional medical
                    advice.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header className="accordion-header">
                    Is there a certification upon completion of the course?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, the course does not provide certification, but it equips
                    you with valuable knowledge and skills to enhance your
                    sexual health and relationships.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header className="accordion-header">
                    Can I access the course on my mobile device?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, our course is optimized for mobile devices, so you can
                    learn on the go from your smartphone or tablet or laptop.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header className="accordion-header">
                    Is my privacy protected while taking the course?
                  </Accordion.Header>
                  <Accordion.Body>
                    Absolutely. We take your privacy seriously and ensure that
                    your personal information is kept confidential and secure.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
