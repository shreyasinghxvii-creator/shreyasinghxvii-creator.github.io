const internship = {
  organization: "INFOSYS SPRINGBOARD",
  type: "VIRTUAL INTERNSHIP",
  title: "Infosys Springboard Virtual Internship",
  detail: "Internship completion",
  date: "October – December 2025",
  preview: "infosys-springboard-internship.webp",
  document: "infosys-springboard-internship.pdf",
};

const credentials = [
  {
    organization: "IIRS · ISRO",
    type: "ONLINE COURSE",
    title: "Recent Trends in Ecological Modelling & Simulation",
    detail: "Online course · May 19–23, 2025",
    award: "Grade A+ · 100% attendance",
    preview: "ecological-modelling-iirs-isro.webp",
    document: "ecological-modelling-iirs-isro.pdf",
  },
  {
    organization: "INFOSYS",
    type: "CERTIFICATION",
    title: "Python Foundation",
    detail: "Python programming",
    date: "July 8, 2025",
    preview: "infosys-python-foundation.webp",
    document: "infosys-python-foundation.pdf",
  },
  {
    organization: "TECHFEST · IIT BOMBAY",
    type: "WORKSHOP",
    title: "LLMs using Python",
    detail: "Workshop certificate",
    date: "December 2025",
    preview: "techfest-iit-bombay-llm-workshop.webp",
    document: "techfest-iit-bombay-llm-workshop.jpeg",
  },
  {
    organization: "SIMPLE VEDAS",
    type: "COURSE",
    title: "Gita Diploma Course",
    detail: "Course completion",
    preview: "gita-diploma.webp",
    document: "gita-diploma.pdf",
  },
];

function CertificatePreview({ credential }) {
  const previewUrl = `/certificates/previews/${credential.preview}`;
  const documentUrl = `/certificates/documents/${credential.document}`;

  return (
    <a
      className="certificate-preview"
      href={documentUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open original document: ${credential.title}`}
    >
      <img
        src={previewUrl}
        alt={`Document preview: ${credential.title}`}
        loading="lazy"
      />
    </a>
  );
}

function InternshipFeature() {
  return (
    <article className="certificate-featured" data-reveal="up">
      <div className="certificate-featured__media">
        <CertificatePreview credential={internship} />
      </div>

      <div className="certificate-featured__body">
        <span className="credential-type">{internship.type}</span>

        <p className="certificate-organization">{internship.organization}</p>

        <h3>{internship.title}</h3>

        <p className="certificate-detail">
          I completed a virtual internship through Infosys Springboard. This is
          the internship completion document.
        </p>

        <p className="certificate-date">{internship.date}</p>

        <a
          className="certificate-text-link"
          href={`/certificates/documents/${internship.document}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View internship certificate
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function CertificateCard({ credential }) {
  return (
    <article className="certificate-card" data-reveal="up">
      <CertificatePreview credential={credential} />

      <div className="certificate-card__body">
        <span className="credential-type">{credential.type}</span>

        <p className="certificate-organization">{credential.organization}</p>

        <h4>{credential.title}</h4>

        <p className="certificate-detail">{credential.detail}</p>

        {credential.award && (
          <p className="credential-award">{credential.award}</p>
        )}

        {credential.date && (
          <span className="certificate-date">{credential.date}</span>
        )}

        <a
          className="certificate-text-link"
          href={`/certificates/documents/${credential.document}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View certificate
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        {/* Section introduction */}

        <div
          className="section-heading education-page-heading"
          data-reveal="up"
        >

          <h2>
            Education <em className="gradient-text">& credentials.</em>
          </h2>

          <p>
            My academic background, internship, and selected certifications and
            learning experiences.
          </p>
        </div>

        {/* Academic background */}

        <article className="education-degree-strip" data-reveal="up">
          <div className="education-degree-mark" aria-hidden="true">
            B.Sc.
          </div>

          <div className="education-degree-copy">
            <span className="education-mini-label">ACADEMIC BACKGROUND</span>

            <h3>B.Sc. Information Technology</h3>

            <p>Thakur College of Science and Commerce</p>
          </div>

          <span className="education-degree-status">Currently pursuing</span>
        </article>

        {/* Featured internship */}

        <div className="certificate-gallery-heading" data-reveal="up">
          <div>

            <h3>Practical learning</h3>
          </div>
        </div>

        <InternshipFeature />

        {/* Other certificates */}

        <div className="certificate-gallery-heading" data-reveal="up">
          <div>

            <h3>Other credentials</h3>
          </div>

          <span className="certificate-count">
            {String(credentials.length).padStart(2, "0")} DOCUMENTS
          </span>
        </div>

        <div className="certificate-grid">
          {credentials.map((credential) => (
            <CertificateCard
              key={credential.document}
              credential={credential}
            />
          ))}
        </div>

        {/* Appointment / role, not a course certificate */}

        <div className="recognition-heading" data-reveal="up">

          <h3>College ambassador</h3>
        </div>

        <article className="campus-role" data-reveal="up">
          <div className="campus-role__mark" aria-hidden="true">
            TI
          </div>

          <div className="campus-role__copy">
            <p className="certificate-organization">TECHFEST · IIT BOMBAY</p>

            <h4>College Ambassador</h4>

            <p>Appointment documented by an offer letter.</p>
          </div>

          <a
            className="certificate-text-link"
            href="/certificates/documents/techfest-college-ambassador-offer-letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View offer letter
            <span aria-hidden="true">↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}

export default Education;
