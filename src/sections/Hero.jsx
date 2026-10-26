function Hero() {
  function handleHeroPointerMove(event) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const visual = event.currentTarget;
    const bounds = visual.getBoundingClientRect();

    if (!bounds.width || !bounds.height) {
      return;
    }

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    visual.style.setProperty("--hero-tilt-x", `${(0.5 - y) * 4}deg`);

    visual.style.setProperty("--hero-tilt-y", `${(x - 0.5) * 6}deg`);

    visual.style.setProperty("--hero-shift-x", `${(x - 0.5) * 8}px`);

    visual.style.setProperty("--hero-shift-y", `${(y - 0.5) * 8}px`);
  }

  function resetHeroPointer(event) {
    const visual = event.currentTarget;

    visual.style.setProperty("--hero-tilt-x", "0deg");
    visual.style.setProperty("--hero-tilt-y", "0deg");
    visual.style.setProperty("--hero-shift-x", "0px");
    visual.style.setProperty("--hero-shift-y", "0px");
  }

  return (
    <section className="hero-section container" id="home">
      <div className="hero-copy" data-reveal="left">
        <p className="section-eyebrow">
          
          <span aria-hidden="true" />
          ASPIRING DEVELOPER
        </p>

        <h1>
          Shreya Singh
          <em>Aspiring Software Developer.</em>
        </h1>

        <p className="hero-description">
          I'm a B.Sc. IT student learning through projects and practical experience. I enjoy
          exploring how things work, solving problems, and turning ideas into
          working applications. I’m looking for opportunities to apply what I’ve
          learned, contribute to a team, and keep growing as a developer.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work
            <span aria-hidden="true">↗</span>
          </a>

          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>

      <div
        className="hero-visual"
        data-reveal="right"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={resetHeroPointer}
      >
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />

        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

        <div className="hero-photo-frame">
          <img
            src="/images/profile.png"
            alt="Shreya Singh"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
