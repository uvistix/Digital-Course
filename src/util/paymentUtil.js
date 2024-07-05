import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";

export const cashfree = await load({
  mode: process.env.REACT_APP_CASHFREE_MODE || "sandbox",
});

export const getSessionId = async ({ name, number, email }) => {
  try {
    const res = await axios.get(process.env.REACT_APP_API_PAY, {
      params: { name, number, email },
    });

    if (res.data && res.data.payment_session_id && res.data.order_id) {
      return res.data;
    } else {
      throw new Error("Failed to get payment session ID");
    }
  } catch (error) {
    throw new Error("Failed to initiate payment. Please try again.");
  }
};

export const verifyPayment = async (orderId) => {
  try {
    if (!orderId) {
      throw new Error("Missing orderId");
    }
    const res = await axios.post(process.env.REACT_APP_API_VER, {
      orderId,
    });
    if (res && res.data) {
      return res.data;
    } else {
      throw new Error("Payment verification failed");
    }
  } catch (error) {
    throw new Error("Payment verification failed. Please try again.");
  }
};

export const validateEmail = async (email) => {
  try {
    const response = await axios.post(process.env.REACT_APP_API_VAl_EM, {
      email,
    });
    return response.data.exists;
  } catch (error) {
    throw new Error("Failed validating email. Please try again.");
  }
};
