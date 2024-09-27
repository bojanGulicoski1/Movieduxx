import React from "react";
import "../styles.css";

export default function Footer() {
  const currnetYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {currnetYear} Moviedux, All rights reseved.
      </p>
    </footer>
  );
}
