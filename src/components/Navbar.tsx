"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import styles from "@/styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/">
            <Image src="/logo.svg" alt="M&G Logo" width={100} height={40} />
          </a>
        </div>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/company" className={styles.navLink}>
            Company
          </Link>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>

        <div>
          <Link href="/signin" className={styles.bookNowButton}>
            Book Now
          </Link>
        </div>

        <div className={styles.hamburger}>
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/company" className={styles.navLink}>
          Company
        </Link>
        <Link href="/services" className={styles.navLink}>
          Services
        </Link>
        <Link href="/contact" className={styles.navLink}>
          Contact
        </Link>
        <Link href="/signin" className={styles.bookNowButton}>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
