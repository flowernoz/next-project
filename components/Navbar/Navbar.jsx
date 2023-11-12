import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import photo from "./../../public/nextLogo.png";
function Navbar() {
  return (
    <header>
      <div className="logo">
        <Image
          src={photo}
          width={30}
          height={30}
          alt="logo"
        />
        Next Js
      </div>
      
      <div className="nav_links">
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/services">Services</Link>
      </div>
    </header>
  );
}

export default Navbar;
