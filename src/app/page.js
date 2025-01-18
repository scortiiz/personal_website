import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about"

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <main className={styles.main}>
        <About/>
      </main>
      <footer className={styles.footer}>
        this is footer
      </footer>
    </div>
  );
}
