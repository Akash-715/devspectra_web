import { useRef, useState } from "react";
import "../Styles/career.css";

const internships = [
  {
    title: "Frontend Developer Intern",
    domain: "Frontend Development",
    description:
      "Work on modern UI development using React, responsive layouts, and interactive design systems.",
    skills: [
      "React.js",
      "HTML / CSS",
      "JavaScript (ES6+)",
      "API Integration",
      "Responsive Design"
    ]
  },
  {
    title: "Backend Developer Intern",
    domain: "Backend Development",
    description:
      "Build scalable backend systems, REST APIs and integrate databases with real-world applications.",
    skills: [
      "Node.js / Express",
      "Django / Spring Boot",
      "MySQL / MongoDB",
      "REST APIs",
      "Authentication Systems"
    ]
  },
  {
    title: "UI / UX Design Intern",
    domain: "UI / UX Design",
    description:
      "Design intuitive user experiences, wireframes, and modern interfaces for web applications.",
    skills: [
      "Figma / Adobe XD",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Systems"
    ]
  }
];

export default function Career() {
  const cvRef = useRef(null);

  const [selectedDomain, setSelectedDomain] = useState("");
  const [duration, setDuration] = useState("");

  const handleApplyClick = (domain) => {
    setSelectedDomain(domain);

    cvRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="career-page">

      <div className="career-container">

        {/* HEADER */}
        <div className="career-header">
          <p className="career-eyebrow">CAREERS</p>
          <h1>Internship Opportunities at DevSpectra</h1>
          <p>
            Gain hands-on experience building modern digital products with our team.
          </p>
        </div>

        {/* INTERNSHIP CARDS */}
        <div className="internship-grid">
          {internships.map((intern, index) => (
            <div key={index} className="internship-card">

              <h3>{intern.title}</h3>

              <div className="duration">
                Duration: <span>1 – 3 Months</span>
              </div>

              <p>{intern.description}</p>

              <ul>
                {intern.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

              <button
                className="apply-btn"
                onClick={() => handleApplyClick(intern.domain)}
              >
                Apply Now
              </button>

            </div>
          ))}
        </div>

        {/* CV SECTION */}
        <div ref={cvRef} className="cv-section">

          <h2>Apply for Internship</h2>

          <p>
            Fill in your details and upload your CV. We’ll contact you shortly.
          </p>

          <form className="cv-form">

            <div className="form-group">
              <label>Domain</label>
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                <option value="">Select Domain</option>
                <option value="Frontend Development">Frontend Development</option>
                <option value="Backend Development">Backend Development</option>
                <option value="UI / UX Design">UI / UX Design</option>
              </select>
            </div>

            <div className="form-group">
              <label>Internship Duration</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Select Duration</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
              </select>
            </div>

            <div className="form-group">
              <label>Upload CV</label>
              <input type="file" />
            </div>

            <button type="submit" className="submit-btn">
              Submit Application
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}