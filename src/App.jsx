import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Loader from "./components/Loader.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Education from "./sections/Education.jsx";
import Contact from "./sections/Contact.jsx";

function App() {
  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    document.documentElement.classList.add("motion-ready");

    revealTargets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${(index % 4) * 55}ms`);
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
