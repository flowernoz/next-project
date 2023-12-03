"use client";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import photo from "./../../public/nextLogo.png";
import { data } from "../../public/headerdata";
import { useState } from "react";
function Navbar() {
  const [lang, setlang] = useState("uz");
  return (
    <header>
      <a href="/" className="logo">
        <Image src={photo} width={30} height={30} alt="logo" />
        Next Js
      </a>

      <div className="nav_links">
        <Link href="/contact">{data[lang].home}</Link>
        <Link href="/blog">{data[lang].contact}</Link>
        <select onChange={(e) => setlang(e.target.value)}>
          <option value="uz">Uz</option>
          <option value="en">En</option>
        </select>
      </div>
    </header>
  );
}

export default Navbar;
