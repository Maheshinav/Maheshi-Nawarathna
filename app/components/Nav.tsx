"use client";

import  { useState } from "react";
import styles from "./Nav.module.css";


const Nav = () => {
    const [activeLink, setActiveLink] = useState("#home");

    return (
        <div className={styles.navbar}>
            <a 
                href="#home" 
                className={`${styles.navLink} ${activeLink === "#home" ? styles.active : ""}`}
                onClick={() => setActiveLink("#home")}
            >
                Home
            </a>
            <a 
                href="#about-me" 
                className={`${styles.navLink} ${activeLink === "#about-me" ? styles.active : ""}`}
                onClick={() => setActiveLink("#about-me")}
            >
                About
            </a>
            <a 
                href="#my-projects" 
                className={`${styles.navLink} ${activeLink === "#my-projects" ? styles.active : ""}`}
                onClick={() => setActiveLink("#my-projects")}
            >
                Portfolio
            </a>
        </div>
    );
};

export default Nav;
