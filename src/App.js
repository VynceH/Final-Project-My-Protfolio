import React from 'react';
import { styles } from './styles';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <ThemeToggle />
      <ScrollToTop />
      
      <nav className={`fixed w-full top-0 z-50 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm shadow-lg`}>
        <div className={`${styles.sectionContent} py-4`}>
          <div className={styles.flexBetween}>
            <div className="text-2xl font-bold text-white">My Portfolio</div>
            <div className="flex space-x-6">
              {['About', 'Education', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      <main>
        <section id="header" className={`${styles.sectionContainer} ${styles.sectionBackground}`}>
          <div className={styles.sectionContent}>
            <div className="text-center h-screen flex flex-col justify-end pb-20">
              <AboutMe />
            </div>
          </div>
        </section>

        <section id="education" className={`${styles.sectionContainer} ${styles.sectionBackground}`}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <Education />
          </div>
        </section>

        <section id="experience" className={`${styles.sectionContainer} ${styles.sectionBackground}`}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <Experience />
          </div>
        </section>

        <section id="skills" className={`${styles.sectionContainer} ${styles.sectionBackground}`}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <Skills />
          </div>
        </section>

        <section id="contact" className={`${styles.sectionContainer} ${styles.sectionBackground}`}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <Contact />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
