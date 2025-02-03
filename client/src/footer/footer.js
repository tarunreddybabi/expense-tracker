import React from "react";

const Footer = () => {
const currentYear=new Date().getFullYear();
  return (
    <footer className="bg-dark text-light py-4">
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          margin: "20px 0",
        }}
      ></div>
      <br />
      <br />
      <p style={{ marginLeft:"350px", textAlign: "center", fontSize: "14px", color: "black" }}>
        © {currentYear} Expense Tracker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
