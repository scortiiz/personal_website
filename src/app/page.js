import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar"
import About from "./components/about/about"
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <main className={styles.main}>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
      <footer className={styles.footer}>
        <p>umm</p>
      </footer>
    </div>
  );
}
