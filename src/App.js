import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import ContactPage from "./page/contact";
import Home from "./page/home";
import Thankyou from "./page/thankyou";
import PrivacyPolicy from "./page/policies/privacy-policy";
import TermsConditions from "./page/policies/terms-conditions";
import RefundPolicy from "./page/policies/refund-policy";
import SupportPolicy from "./page/policies/support-policy";
import UserPolicy from "./page/policies/user-policy";
import IntellectualPolicy from "./page/policies/intellectual-policy";
import ModificationPolicy from "./page/policies/modification-policy";
import ContentPolicy from "./page/policies/content-policy";
import CommunityPolicy from "./page/policies/community-policy";
import DisclaimerPolicy from "./page/policies/disclaimer-policy";
import Cashfree from "./component/Cashfree.jsx";
import Signup from "./page/signup.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="support-policy" element={<SupportPolicy />} />
        <Route path="user-responsibility-policy" element={<UserPolicy />} />
        <Route path="intellectual-policy" element={<IntellectualPolicy />} />
        <Route path="modification-policy" element={<ModificationPolicy />} />
        <Route path="content-policy" element={<ContentPolicy />} />
        <Route path="community-policy" element={<CommunityPolicy />} />
        <Route path="disclaimer-policy" element={<DisclaimerPolicy />} />
        <Route path="Cashfree" element={<Cashfree />} />
        <Route path="enroll" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
