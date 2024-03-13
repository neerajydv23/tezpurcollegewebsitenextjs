import React from "react";

function StickyButton({ setShow }) {
  return (
    <button
      onClick={() => setShow((e) => !e)}
      className="fixed -left-[50px] top-1/2 transform -translate-y-1/2 -translate-x-1 -rotate-90 bg-[#104B84] text-white px-4 py-2 rounded-r z-[99]"
    >
      Admissions Open
    </button>
  );
}

export default StickyButton;
