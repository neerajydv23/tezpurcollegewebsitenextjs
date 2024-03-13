import React from "react";

function Header() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-[#fff] text-black">
      <div className="nav-left flex items-center gap-3">
        <img
          src="/images/WhatsApp Image 2024-03-08 at 6.11.26 PM.jpeg"
          alt=""
          style={{ height: 50 }}
        />{" "}
        <h2 className="text-[20px] font-bold lg:text-[sm] text-[#104B84] font-heebo  leading-1 tracking-wide" >
          TEZPUR COLLEGE OF PARAMEDICAL SCIENCES
        </h2>
      </div>
     <div className="nav-right ">
        <ul className="flex items-center gap-7  text-[#104B84] font-heebo font-semibold  leading-1 tracking-wide">
          <li>
            <a href="#" className="text-[17px] lg:text-[sm]">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-[16px] lg:text-[sm]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-[16px] lg:text-[sm]">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="text-[16px] lg:text-[sm]">
              Contact
            </a>
          </li>
        </ul>
     </div>
    </nav>
  );
}

export default Header;
