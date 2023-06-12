import React from "react";

function ShowMenu({toggleHandler}) {
  return (
    <button onClick={toggleHandler} type="button" className="flex cursor-pointer md:hidden">
      <svg
        width="24"
        height="20"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H13M1 5H5M1 9H9"
          stroke="#ABAFD1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default ShowMenu;
