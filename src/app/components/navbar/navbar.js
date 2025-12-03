'use client';
import { useEffect } from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  // Highlight active link on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      const header = document.querySelector('header');
      const headerHeight = header?.offsetHeight || 0;

      sections.forEach((section) => {
        const top = window.scrollY + headerHeight + 10; // where we "look" in the viewport
        const offset = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) =>
            link.classList.remove(styles.active)
          );
          const matchingLink = document.querySelector(
            `header nav a[href="#${id}"]`
          );
          matchingLink?.classList.add(styles.active);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⬇️ This controls EXACTLY where the page scrolls
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    const header = document.querySelector('header');
    const headerHeight = header?.offsetHeight || 0;

    if (!section) return;

    const y = section.offsetTop - headerHeight - 120; 
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#about" onClick={scrollToSection('about')}>
          About
        </a>
        <a href="#experience" onClick={scrollToSection('experience')}>
          Experience
        </a>
        <a href="#projects" onClick={scrollToSection('projects')}>
          Projects
        </a>
        <a href="#contact" onClick={scrollToSection('contact')}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
