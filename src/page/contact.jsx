import { Fragment, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { db } from "../firebaseConfig/FirebaseConfig";

const conSubTitle = "Get in touch with Contact us";
const conTitle = "Please fill out the form to help us understand your needs.";
const btnText = "Send our Message";
const btnLoadingText = "Sending...";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formDataWithDate = {
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
        supportTicketCreatedAt: new Date(),
        supportStatus: "pending",
      };
      await db.collection("supportTickets").add(formDataWithDate);
      alert(
        "Your support ticket has been successfully created. We will review your request and respond as soon as possible."
      );
      setName("");
      setEmail("");
      setNumber("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error creating ticket. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />

      <div className="contact-section padding-tb">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle">{conSubTitle}</span>
            <h2 className="title">{conTitle}</h2>
          </div>
          <div className="section-wrapper">
            <form className="contact-form" onSubmit={handleForm}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="number"
                  placeholder="Mobile Number *"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Your Subject *"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  rows="8"
                  type="text"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group w-100 text-center">
                <button className="lab-btn" type="submit" disabled={loading}>
                  {loading ? btnLoadingText : btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ContactPage;
