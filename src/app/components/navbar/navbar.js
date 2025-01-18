'use client'
import { useEffect } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => {
            link.classList.remove(styles.active);
            const matchingLink = document.querySelector(
              `header nav a[href*="${id}"]`
            );
            matchingLink?.classList.add(styles.active);
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        ActiveLink.
      </a>
      <nav className = {styles.nav}>
        <a href="#home" className={styles.active}>
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;