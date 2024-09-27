"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./styles/SlidingMenu.module.css";

function SlidingMenu() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </div>
      <nav className={`${styles.navMenu} ${menuActive ? styles.active : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/pages/cv" onClick={toggleMenu}>
              CV
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SlidingMenu;
