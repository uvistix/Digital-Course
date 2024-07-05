import React, { useState } from "react";
import {
  cashfree,
  getSessionId,
  verifyPayment,
  validateEmail,
} from "../util/paymentUtil";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig/FirebaseConfig";

const Cashfree = ({
  clsName,
  btnName,
  btnType,
  name,
  number,
  email,
  password,
  confirmPassword,
  policies,
}) => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (!name || !number || !email || !password || !confirmPassword) {
      alert("Please fill all the fields!");
      setDisable(false);
      return;
    }
    if (number.length !== 10) {
      alert("Invalid Number!");
      setDisable(false);
      return;
    }
    if (password.length < 6) {
      alert("Minimum 6 characters password required!");
      setDisable(false);
      return;
    }
    if (password !== confirmPassword) {
      alert("Mismatch password!");
      setDisable(false);
      return;
    }
    if (!policies || policies === false) {
      alert("Please acknowledge the policies!");
      setDisable(false);
      return;
    }

    try {
      const userExists = await validateEmail(email);
      if (userExists) {
        alert(
          "An account with this email already exists. Please try using a different email address."
        );
        setDisable(false);
        return;
      }

      let res = await getSessionId({ name, number, email });
      if (res.payment_session_id && res.order_id) {
        const checkoutOptions = {
          paymentSessionId: res.payment_session_id,
          redirectTarget: process.env.REACT_APP_REDIRECT_TARGET,
        };

        cashfree.checkout(checkoutOptions).then(async (result) => {
          if (result.error) {
            alert("Payment Cancelled");
            setDisable(false);
          }
          if (result.redirect) {
            console.log("Payment will be redirected");
          }
          if (result.paymentDetails) {
            const status = await verifyPayment(res.order_id);
            if (
              status.length > 0 &&
              status[0].payment_status &&
              status[0].payment_status === process.env.REACT_APP_PAYMENT_STATUS
            ) {
              await handleSignup(status);
              navigate("/thank-you");
              setDisable(false);
            } else {
              alert("Payment failed");
              setDisable(false);
            }
          }
        });
      }
    } catch (error) {
      alert("Payment process failed. Please try again.");
      setDisable(false);
    } finally {
      setDisable(false);
      setCreatingAccount(false);
    }
  };

  const handleSignup = async (status) => {
    setCreatingAccount(true);
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = userCredential;

      const today = new Date();
      const courseExpiryDate = new Date(today);
      courseExpiryDate.setDate(today.getDate() + 365);

      await db.collection("users").doc(user.uid).set({
        email,
        name,
        number,
        uid: user.uid,
        userType: "user",
        createdAt: today,
        order_id: status[0].order_id,
        cf_payment_id: status[0].cf_payment_id,
        payment_completion_time: status[0].payment_completion_time,
        courseExpiryDate: courseExpiryDate,
      });

      await user.sendEmailVerification();
      setCreatingAccount(false);
      return user;
    } catch (err) {
      const errorCode = err.code;
      let errorMessage = "";

      switch (errorCode) {
        case "auth/invalid-email":
          errorMessage = "Invalid email";
          break;
        case "auth/email-already-in-use":
          errorMessage =
            "A user with this email already exists. Please use a different email.";
          break;
        default:
          errorMessage = "An error occurred during signup";
          break;
      }
      alert(errorMessage);
      setCreatingAccount(false);
    } finally {
      setCreatingAccount(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={clsName}
        type={btnType}
        disabled={disable || creatingAccount}
      >
        {creatingAccount ? (
          "Creating Account"
        ) : (
          <>{disable ? "Loading..." : btnName}</>
        )}
      </button>
    </>
  );
};

export default Cashfree;
