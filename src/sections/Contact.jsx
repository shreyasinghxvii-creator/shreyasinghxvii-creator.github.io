import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    label: "GitHub",
    detail: "Projects & source code",
    href: "https://github.com/shreyasinghxvii-creator/",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    detail: "Professional profile",
    href: "https://www.linkedin.com/in/shreya-singh-935239361/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Email",
    detail: "Get in touch",
    href: "mailto:shreyasinghxvii@gmail.com",
    Icon: FaEnvelope,
  },
];

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-panel" data-reveal="up">
            <div className="contact-panel__copy">
              <h2>
                Have an opportunity?
                <br />
                <em className="gradient-text">Let's talk.</em>
              </h2>

              <p className="contact-description">
                I'm a B.Sc. IT student building my skills through coursework and
                hands-on projects. I'm interested in internship and entry-level
                opportunities where I can learn, contribute, and grow with a
                team.
              </p>

              <a
                className="button button-primary contact-email-button"
                href="mailto:shreyasinghxvii@gmail.com?subject=Portfolio%20Enquiry"
              >
                <FaEnvelope aria-hidden="true" />
                <span>Email me</span>
                <span aria-hidden="true">↗</span>
              </a>

              <p className="contact-email-text">shreyasinghxvii@gmail.com</p>
            </div>

            <div className="contact-panel__links">
              <p className="contact-links-label">FIND ME ONLINE</p>

              {socialLinks.map(({ label, detail, href, Icon }) => {
                const isExternal = label !== "Email";

                return (
                  <a
                    className="social-link"
                    href={href}
                    key={label}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <span className="social-link__icon">
                      <Icon aria-hidden="true" />
                    </span>

                    <span className="social-link__text">
                      <strong>{label}</strong>
                      <small>{detail}</small>
                    </span>

                    <span className="social-link__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__top">
            {/* Personal Introduction */}
            <div className="site-footer__identity">
              <p className="footer-eyebrow">
                SHREYA SINGH
                <span aria-hidden="true"> / </span>
                PORTFOLIO
              </p>

              <a
                className="footer-brand"
                href="#home"
                aria-label="Shreya Singh — back to home"
              >
                Shreya Singh
                <span className="footer-brand__period">.</span>
              </a>

              <p className="footer-description">
                Information Technology student exploring software development
                through coursework and personal projects.
              </p>

              <div className="footer-availability">
                <span className="footer-availability__dot" aria-hidden="true" />
                <span>Interested in internship & entry-level roles</span>
              </div>
            </div>

            {/* Footer Navigation */}
            <nav className="footer-navigation" aria-label="Footer navigation">
              <p className="footer-column-title">EXPLORE</p>

              {footerLinks.map(({ label, href }) => (
                <a href={href} key={href}>
                  {label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </nav>

            {/* Social Profiles */}
            <div className="footer-connect">
              <p className="footer-column-title">ELSEWHERE</p>

              <div className="footer-socials">
                {socialLinks.map(({ label, detail, href, Icon }) => {
                  const isExternal = label !== "Email";

                  return (
                    <a
                      className="footer-social-link"
                      href={href}
                      key={label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      aria-label={`${label}: ${detail}`}
                    >
                      <span className="footer-social-link__icon">
                        <Icon aria-hidden="true" />
                      </span>

                      <span className="footer-social-link__text">
                        <strong>{label}</strong>
                        <small>{detail}</small>
                      </span>

                      <span
                        className="footer-social-link__arrow"
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom">
            <span className="footer-copyright">
              © {new Date().getFullYear()} Shreya Singh
            </span>

            <a className="footer-back-top" href="#home">
              Back to top
              <span className="footer-back-top__icon" aria-hidden="true">
                ↑
              </span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
