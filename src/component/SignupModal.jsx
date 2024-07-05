import { useState } from "react";
import Modal from "react-modal";

const SignupModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  Modal.setAppElement("#root");

  return (
    <div>
      <button onClick={() => setModalIsOpen(!modalIsOpen)}>Open Modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="container section-bg p-2">
          <div className="account-wrapper ">
            {/* <div className="text-end d-flex">
                <button onClick={closeModal}>
                  <i className="icofont-close"></i>
                </button>
              </div> */}
            <h3 className="title">
              Enroll Comprehensive Sexual Education Course
            </h3>
            <form className="account-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="number" name="number" placeholder="Number" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="text" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group">
                <button className="lab-btn">Proceed Payment</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SignupModal;
