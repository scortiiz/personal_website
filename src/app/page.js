import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import styles from "./page.module.css";
import { getExperience, getProjects } from "./lib/getTable.server";

export default async function Home() {
  // Fetch data server-side
  const experience = await getExperience();
  const projects = await getProjects();

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <About />
        {/* Pass fetched data as props */}
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <p>umm</p>
      </footer>
    </div>
  );
}