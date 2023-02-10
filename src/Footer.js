import React, { useState } from "react";

function Footer({ currentPage, setPage }) {
  const styleString = "active";
  const navigations = [];
  const [selectedButton, setSelectedButton] = useState(-2);
  const handlePage = (index) => {
    setPage(index);
    setSelectedButton(index - 1);
  };
  for (let index = 0; index < 10; index++) {
    navigations.push(
      <button
        className={`btn-primary ${selectedButton === index ? styleString : ""}`}
        onClick={() => handlePage(index + 1)}
        key={index}>
        {index + 1}
      </button>
    );
  }
  return (
    <div className="footer">
      <button
        disabled={currentPage === 1}
        className="btn-primary"
        onClick={() => handlePage(currentPage - 1)}>
        Prev
      </button>
      {navigations}

      <button
        disabled={currentPage === 10}
        className="btn-primary"
        onClick={() => handlePage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}

export default Footer;
