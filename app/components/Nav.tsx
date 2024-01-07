import React from 'react';
import styles from './Nav.module.css'; // Ensure the path is correct

const Nav = () => {
  return (
    <div className={styles.navbar}> 
    <div className={styles.navbarOverlay}></div>
       <div className={styles.navbarContent}>
      <a href="#home" className="btn btn-ghost text-xl">Home</a>
        <a href="#about-me" className="btn btn-ghost text-xl">About</a>
        <a href="#my-projects" className="btn btn-ghost text-xl">Portfolio</a>
        </div>
      </div>
  );
};

export default Nav;
