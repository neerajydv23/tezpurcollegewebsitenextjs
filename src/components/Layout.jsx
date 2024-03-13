import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Stick } from "next/font/google";
import StickyButton from "./StickyButton";
import AdmissionForm from "./AdmissionForm";

function Layout({ children }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative">
        <Header></Header>
        <StickyButton setShow={setShow}></StickyButton>
        {show && <AdmissionForm></AdmissionForm>}
        {children}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Layout;
