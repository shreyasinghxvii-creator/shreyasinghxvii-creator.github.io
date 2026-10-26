import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaCogs,
  FaFileAlt,
} from "react-icons/fa";

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    description:
      "Languages I've practised through coursework and programming projects.",
    skills: [
      { name: "Python", Icon: FaPython, color: "#3776AB" },
      { name: "Java", Icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    ],
  },
  {
    number: "02",
    title: "Web development",
    description:
      "Technologies I've used to explore web interfaces and application development.",
    skills: [
      { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
      { name: "React", Icon: FaReact, color: "#61DAFB" },
    ],
  },
  {
    number: "03",
    title: "Automation & data",
    description:
      "Tools I've explored for browser automation, text extraction, databases, and code management.",
    skills: [
      { name: "Selenium", Icon: FaCogs, color: "#43B02A" },
      { name: "Tesseract OCR", Icon: FaFileAlt, color: "#E7A18F" },
      { name: "MySQL", Icon: FaDatabase, color: "#4479A1" },
      { name: "MongoDB", Icon: FaDatabase, color: "#47A248" },
      { name: "Git", Icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", Icon: FaGithub, color: "#FFFFFF" },
    ],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* Section introduction */}

        <div className="section-heading skills-heading" data-reveal="up">

          <h2>
            Tools I've explored.
            <br />
            <em className="gradient-text">Skills I'm developing.</em>
          </h2>

          <p>
            These are the technologies I've practised through coursework,
            exercises, and projects. I'm still learning and working to become
            more confident using them in real applications.
          </p>
        </div>

        {/* Skill categories */}

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article
              className="skill-group"
              key={group.number}
              data-reveal="up"
            >
              <span className="skill-group__number">{group.number}</span>

              <h3>{group.title}</h3>

              <p className="skill-group__description">{group.description}</p>

              <div
                className="skill-list"
                aria-label={`${group.title} technologies`}
              >
                {group.skills.map(({ name, Icon, color }) => (
                  <span className="skill-chip" key={name}>
                    <Icon
                      className="skill-chip__icon"
                      style={{ color }}
                      aria-hidden="true"
                    />

                    <span>{name}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
