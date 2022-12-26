import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="light-bg flex justify-space">
      <span className="white">
        {/* Copyright © {year} <Link href="/">David</Link> - All rights reserved. */}
        Copyright © {year} All rights reserved.
      </span>
      {/* <ul className="flex">
        <li>
          <a
            href="https://www.facebook.com/blaiti"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/blaiti.codes"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/skanderblaiti"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/davidbolaji" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </li>
      </ul> */}
    </footer>
  );
}
