import { FaFileAlt } from "react-icons/fa";
import { SiPython, SiSelenium } from "react-icons/si";

const technologies = [
  {
    name: "Python",
    Icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "Selenium",
    Icon: SiSelenium,
    color: "#43B02A",
  },
  {
    name: "Tesseract OCR",
    Icon: FaFileAlt,
    color: "#E7A18F",
  },
];

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section introduction */}

        <div className="section-heading projects-heading" data-reveal="up">

          <h2>
            Learning through
            <br />
            <em className="gradient-text">building things.</em>
          </h2>

          <p>
            I learn best by putting concepts into practice. This project gave me
            an opportunity to explore Python, browser automation, and text
            extraction while working on a practical problem.
          </p>
        </div>

        {/* Project demonstration and details */}

        <article className="project-spotlight" data-reveal="up">
          {/* Demo video */}

          <div className="project-spotlight__media">
            <div className="project-spotlight__media-top">
              <span className="project-live-label">
                <span aria-hidden="true" />
                PROJECT DEMONSTRATION
              </span>

              <span className="project-duration">01:50</span>
            </div>

            <video
              className="project-spotlight__video"
              controls
              preload="metadata"
              playsInline
              aria-label="Demonstration of the Price Comparison Web App"
            >
              <source
                src="/videos/price-comparison-demo.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>

            <p className="project-spotlight__caption">
              A look at the project in action.
            </p>
          </div>

          {/* Project information */}

          <div className="project-spotlight__content">
            <h3>Price Comparison Web App</h3>

            <p className="project-spotlight__description">
              I built this Python project to explore automated product price
              collection and comparison. Selenium handles browser automation,
              while Tesseract OCR is used for text extraction.
            </p>

            <p className="project-spotlight__description">
              Working on it helped me practise combining different tools to
              approach a practical programming problem.
            </p>

            {/* Technologies */}

            <p className="project-tech-heading">TECHNOLOGIES USED</p>

            <div className="project-tech-list" aria-label="Technologies used">
              {technologies.map(({ name, Icon, color }) => (
                <span className="project-tech-item" key={name}>
                  <Icon
                    className="project-tech-icon"
                    style={{ color }}
                    aria-hidden="true"
                  />

                  <span>{name}</span>
                </span>
              ))}
            </div>

            {/* GitHub repository */}

            <a
              className="project-source-link"
              href="https://github.com/shreyasinghxvii-creator/price-comparison-web-app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View the Price Comparison Web App source code on GitHub"
            >
              View source code on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
