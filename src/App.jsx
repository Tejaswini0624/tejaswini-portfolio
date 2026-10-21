// App.jsx

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "AI-Based Automated Exam Evaluation System",
    status: "Ongoing",
    category: "AI / Machine Learning",
    description:
  "An ongoing academic project exploring NLP and machine-learning techniques to evaluate descriptive student answers and generate structured feedback reports.",
    details:
      "The project explores NLP and machine-learning techniques for automated answer evaluation and report generation. It is being developed as an academic AI project.",
    overview:
      "An academic AI project focused on reducing the manual effort involved in evaluating descriptive student answers.",
    problem:
      "Manual evaluation of descriptive answers can take significant time and may vary between evaluators.",
    solution:
      "Use NLP and machine-learning techniques to compare answers with expected concepts and produce structured evaluation feedback.",
    contribution:
      "Designed the project flow, explored NLP-based evaluation approaches and worked on the application structure.",
    outcome:
      "A work-in-progress prototype direction for automated answer evaluation and reporting.",
    tags: ["Python", "AI/ML", "NLP"],
  },
  {
    number: "02",
    title: "QR Code Based Attendance System",
    status: "Completed",
    category: "Web Application",
    description:
  "A QR-based attendance web application built to streamline classroom attendance recording and manage attendance data through a web interface.",
    details:
      "The application combines a Flask backend with a web interface and database to support QR-based attendance workflows.",
    overview:
      "A web application that uses QR codes to make classroom attendance collection faster and easier to manage.",
    problem:
      "Traditional attendance collection can be repetitive and requires maintaining records manually.",
    solution:
      "Use QR-based attendance workflows with a web interface, Flask backend and database-backed records.",
    contribution:
      "Worked on the web interface and application workflow while connecting the frontend with the backend and database.",
    outcome:
      "A completed academic web application concept for QR-based attendance management.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQL"],
  },
];


const dataScienceTasks = [
  {
    number: "01",
    title: "Iris Flower Classification",
    category: "Machine Learning",
    description:
      "A machine learning task focused on classifying iris flower species using flower measurements.",
    tags: ["Python", "Machine Learning", "Classification"],
    github:
      "https://github.com/Tejaswini0624/OIBSIP/commit/b76f6cea36c6038e04449df1aecc136b68d813ad",
  },
  {
    number: "02",
    title: "Unemployment Analysis with Python",
    category: "Data Analysis",
    description:
      "A data analysis task exploring unemployment data to identify patterns and trends using Python.",
    tags: ["Python", "Data Analysis", "Visualization"],
    github:
      "https://github.com/Tejaswini0624/OIBSIP/commit/bddfc3f10145879489656adfb4e035a3b3895555",
  },
  {
    number: "03",
    title: "Car Price Prediction with Machine Learning",
    category: "Machine Learning",
    description:
      "A machine learning task focused on predicting car prices using relevant vehicle features.",
    tags: ["Python", "Machine Learning", "Prediction"],
    github:
      "https://github.com/Tejaswini0624/OIBSIP/commit/597282ad2d89177c7c73ddfc8ba627b5b8f9289a",
  },
];


const experience = [
  {
    period: "Nov 2025 — Jun 2026",
    role: "Full Stack Development Intern",
    company: "Eduversity",
    points: [
      "Worked on front-end and back-end web development.",
      "Used React.js, JavaScript, Node.js and MongoDB.",
      "Worked with APIs, responsive interfaces and database operations.",
    ],
  },
  {
    period: "Jul 2026 — Aug 2026",
    role: "Data Science Intern",
    company: "Oasis Infobyte",
    points: [
      "Completed Iris Flower Classification using machine learning.",
      "Performed Unemployment Analysis with Python.",
      "Worked on Car Price Prediction with Machine Learning.",
    ],
  },
];

const education = [
  {
    title: "B.Tech — Computer Science & Engineering",
    school: "Mahaveer Institute of Science & Technology, Hyderabad",
    period: "2023 — 2027 Expected",
    detail: "Specialization: Artificial Intelligence & Machine Learning",
    score: "8.0",
    label: "CGPA",
  },
  {
    title: "Intermediate — MPC",
    school: "Sri Gayatri Junior College",
    period: "2021 — 2023",
    detail: "Intermediate",
    score: "80%",
    label: "Marks",
  },
  {
    title: "SSC",
    school: "New Hope High School",
    period: "2021",
    detail: "Secondary School Certificate",
    score: "10.0",
    label: "GPA",
  },
];

const navItems = [
  "home",
  "about",
  "skills",
  "services",
  "projects",
  "data-science",
  "experience",
  "education",
  "contact",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [toast, setToast] = useState("");
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState("");
  const [resumeOpen, setResumeOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [githubProjects, setGithubProjects] = useState([]);
  const [githubProfile, setGithubProfile] = useState(null);
  const [formStatus, setFormStatus] = useState("");

  const showToast = (message) => {
    setToast(message);

    window.clearTimeout(window.__portfolioToast);

    window.__portfolioToast = window.setTimeout(() => {
      setToast("");
    }, 2400);
  };
useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-15% 0px -70% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setCommandOpen((previous) => !previous);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setResumeOpen(false);
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyboard);

    return () => window.removeEventListener("keydown", handleKeyboard);
  }, []);

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/Tejaswini0624").then((response) =>
        response.ok ? response.json() : null
      ),
      fetch(
        "https://api.github.com/users/Tejaswini0624/repos?sort=updated&per_page=6"
      ).then((response) => (response.ok ? response.json() : [])),
    ])
      .then(([profile, repositories]) => {
        if (profile) setGithubProfile(profile);
        if (Array.isArray(repositories)) setGithubProjects(repositories);
      })
      .catch(() => {
        setGithubProfile(null);
        setGithubProjects([]);
      });
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("tejaswini21424@gmail.com");
      showToast("Email copied to clipboard ✓");
    } catch {
      showToast("tejaswini21424@gmail.com");
    }
  };

 
const handleContact = async (event) => {
  event.preventDefault();

  const formElement = event.currentTarget;
  const formData = new FormData(formElement);

  setFormStatus("Sending message...");

  const data = {
    access_key: "1e45f249-802d-4b49-af57-74c47dc3dc6a",
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    subject: "New Portfolio Contact Message",
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setFormStatus(
        "Message sent successfully! Thank you for contacting me."
      );
      showToast("Message sent successfully! ✓");
      formElement.reset();
    } else {
      setFormStatus(
        result.message || "Unable to send your message. Please try again."
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    setFormStatus("Unable to connect. Please try again.");
  }
};


  const goTo = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });

    setCommandOpen(false);
    setShowQuickMenu(false);
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "site-shell dark-theme" : "site-shell"}>
      <div className="top-progress">
        <span />
      </div>

      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">T</span>

          <span>
            Tejaswini<span className="brand-dot">.</span>
          </span>
        </a>

        
<button
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={menuOpen}
  aria-controls="portfolio-navigation"
>
  {menuOpen ? "×" : "☰"}
</button>

<nav
  id="portfolio-navigation"
  className={menuOpen ? "nav-links open" : "nav-links"}
>
  {navItems.map((item) => (
    <a
      key={item}
      href={`#${item}`}
      className={activeSection === item ? "active" : ""}
      onClick={() => setMenuOpen(false)}
    >
     {item === "data-science"
  ? "Data Science"
  : item.charAt(0).toUpperCase() + item.slice(1)}
    </a>
  ))}
</nav>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => {
              setDarkMode(!darkMode);
              showToast(
                darkMode ? "Light mode enabled" : "Dark mode enabled"
              );
            }}
            aria-label="Toggle theme"
          >
            {darkMode ? "☼" : "◐"}
          </button>

          <button
            className="command-button"
            onClick={() => setCommandOpen(true)}
          >
            <span>⌘</span> K
          </button>

          <a className="nav-cta" href="#contact">
            Let's Connect ↗
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy reveal-on-scroll">
              <p className="eyebrow">
                <span className="status-dot" />
                Open to opportunities
              </p>

              <h1>
                Hi, I'm <span>Tejaswini.</span>
                <br />
                I build with <em>code & curiosity.</em>
              </h1>

              <p className="hero-text">
                Computer Science Engineering student specializing in AI & ML,
                with hands-on experience in full-stack development and a
                passion for building useful digital solutions.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View My Work ↗
                </a>

                <button
                  className="button secondary"
                  onClick={() => setResumeOpen(true)}
                >
                  View Resume
                </button>
              </div>

              <div className="hero-meta">
                <span>Hyderabad, India</span>
                <span className="meta-line" />
                <span>B.Tech CSE • AI/ML</span>
              </div>

              <div className="currently-strip">
                <span className="currently-dot" />
                <span><strong>Currently:</strong> Building projects, learning and preparing for software development opportunities.</span>
              </div>
            </div>

            <div className="hero-visual reveal-on-scroll">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="profile-card interactive-card">
                <div className="profile-top">
                  <span>PROFILE</span>
                  <span>01 / 01</span>
                </div>

                <div className="monogram animated-monogram profile-photo-frame">
                  <img
                    className="profile-photo"
                    src="/profile-photo.png"
                    alt="Tejaswini Mamidisetti"
                  />
                </div>

                <h2>
                  Mamidisetti
                  <br />
                  Tejaswini
                </h2>

                <p>CSE • AI/ML • FULL STACK</p>

                <div className="card-footer">
                  <span>2023 — 2027</span>
                  <span>CGPA 8.0</span>
                </div>
              </div>

              <div className="floating-note note-one">AI / ML</div>

              <div className="floating-note note-two">FULL STACK</div>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            Scroll to explore ↓
          </a>
        </section>

        <section id="about" className="section about">
          <div className="section-heading reveal-on-scroll">
            <p className="section-number">01 — About</p>

            <h2>
              A curious mind building <span>practical things.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-lead reveal-on-scroll">
              <p className="large-copy">
                I'm a final-year Computer Science Engineering student
                specializing in Artificial Intelligence & Machine Learning.
              </p>
            </div>

            <div className="about-body reveal-on-scroll">
              <p>
                My interests sit at the intersection of web development and
                AI. I enjoy turning ideas into functional applications,
                learning new technologies and improving my development skills
                through hands-on projects.
              </p>

              <p>
                I'm currently seeking an entry-level opportunity where I can
                contribute, keep learning and grow as a software developer.
              </p>

              <div className="about-stats">
                <AnimatedStat value="8.0" label="CGPA" />
                <AnimatedStat value="01+" label="Internship" />
                <AnimatedStat value="02" label="Projects" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading reveal-on-scroll">
            <p className="section-number">02 — Skills</p>

            <h2>
              What I work <span>with.</span>
            </h2>
             <p className="section-description">
  My technical toolkit for building responsive web applications
  and exploring AI-powered solutions.
</p>
          </div>

          <div className="skills-editorial">
            <div className="skill-row reveal-on-scroll">
              <span className="skill-number">01</span>

              <div className="skill-info">
                <span className="skill-category">Programming</span>
                <h3>Programming Languages</h3>
                <p>Python · Java · C · JavaScript</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>

            <div className="skill-row reveal-on-scroll">
              <span className="skill-number">02</span>

              <div className="skill-info">
                <span className="skill-category">Frontend</span>
                <h3>Frontend Development</h3>
                <p>HTML5 · CSS3 · React.js</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>

            <div className="skill-row reveal-on-scroll">
              <span className="skill-number">03</span>

              <div className="skill-info">
                <span className="skill-category">Backend</span>
                <h3>Backend Development</h3>
                <p>Node.js · MongoDB · SQL</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>

            <div className="skill-row reveal-on-scroll">
              <span className="skill-number">04</span>

              <div className="skill-info">
                <span className="skill-category">Artificial Intelligence</span>
                <h3>AI & Machine Learning</h3>
                <p>Artificial Intelligence · Machine Learning · NLP</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>

            <div className="skill-row reveal-on-scroll">
              <span className="skill-number">05</span>

              <div className="skill-info">
                <span className="skill-category">Development Tools</span>
                <h3>Tools & Platforms</h3>
                <p>Git · GitHub · VS Code · REST APIs</p>
              </div>

              <span className="skill-arrow">↗</span>
            </div>
          </div>
        </section>

        
<section id="services" className="section services-section">
  <div className="section-heading reveal-on-scroll">
    <p className="section-number">03 — Services</p>

    <h2>
      What I can <span>build.</span>
    </h2>

    <p className="section-description">
      I enjoy creating responsive websites, useful web applications,
      and exploring AI-powered solutions.
    </p>
  </div>

  <div className="services-grid">
    <article className="service-card reveal-on-scroll">
      <span className="service-number">01</span>
      <div className="service-icon" aria-hidden="true">✳</div>

      <h3>Frontend Development</h3>

      <p>
        Building responsive and user-friendly interfaces with
        HTML, CSS, JavaScript, and React.
      </p>

      <span className="service-tag">Web Design & UI</span>
    </article>

    <article className="service-card reveal-on-scroll">
      <span className="service-number">02</span>
      <div className="service-icon" aria-hidden="true">⌘</div>

      <h3>Full Stack Development</h3>

      <p>
        Developing web applications with frontend interfaces,
        backend APIs, and database integration.
      </p>

      <span className="service-tag">Web Applications</span>
    </article>

    <article className="service-card reveal-on-scroll">
      <span className="service-number">03</span>
      <div className="service-icon" aria-hidden="true">✧</div>

      <h3>AI & Machine Learning</h3>

      <p>
        Exploring intelligent applications and machine learning
        solutions through academic and personal projects.
      </p>

      <span className="service-tag">AI Projects</span>
    </article>
  </div>
</section>


        <section id="projects" className="section projects">
          <div className="section-heading heading-row reveal-on-scroll">
            <div>
              <p className="section-number">03 — Featured Work</p>

              <h2>
                Projects with a <span>purpose.</span>
              </h2>
            </div>

            <p className="heading-note">
              Explore my academic and practical work.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className="project-card reveal-on-scroll"
                key={project.number}
              >
                <div className="project-number">{project.number}</div>

                <div className="project-content">
                  <div className="project-title-row">
                    <div>
                      <p className="project-status">{project.status} • Case Study</p>

                      <h3>{project.title}</h3>
                    </div>

                  
<button
  className="project-link"
 onClick={() => setSelectedProject(project)}
  aria-label={`View details for ${project.title}`}
  title={`View details for ${project.title}`}
>
  ↗
</button>

                  </div>

                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        
<section id="data-science" className="section projects">
  <div className="section-heading heading-row reveal-on-scroll">
    <div>
      <p className="section-number">04 — Data Science</p>
      <h2>Exploring data. <span>Finding insights.</span></h2>
    </div>
    <p className="heading-note">
      Tasks completed during my Oasis Infobyte internship.
    </p>
  </div>

  <div className="project-list">
    {dataScienceTasks.map((task) => (
      <article
        className="project-card reveal-on-scroll"
        key={task.number}
      >
        <div className="project-number">{task.number}</div>

        <div className="project-content">
          <div className="project-title-row">
            <div>
              <p className="project-status">
                {task.category} • Oasis Infobyte
              </p>
              <h3>{task.title}</h3>
            </div>
          </div>

          <p>{task.description}</p>

          <div className="tag-list">
            {task.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a
            className="button secondary"
            href={task.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub ↗
          </a>
        </div>
      </article>
    ))}
  </div>
</section>


        <section className="section github-section">
          <div className="section-heading heading-row reveal-on-scroll">
            <div>
              <p className="section-number">03.5 — GitHub</p>

              <h2>
                Code, projects & <span>experiments.</span>
              </h2>
            </div>

            <p className="heading-note">
              A live look at my work on GitHub.
            </p>
          </div>

          <div className="github-profile-card reveal-on-scroll">
            <div className="github-profile-main">
              <div className="github-avatar">
                T
              </div>

              <div>
                <span className="github-label">GITHUB PROFILE</span>

                <h3>Tejaswini0624</h3>

                <p>
                  Building projects, learning technologies and sharing my
                  development journey.
                </p>
              </div>
            </div>

            <div className="github-profile-actions">
              <a
                className="github-profile-button"
                href="https://github.com/Tejaswini0624"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub ↗
              </a>

              <a
                className="github-profile-button"
                href="https://www.linkedin.com/in/tejaswini-mamidisetti-a3580523b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="github-stats reveal-on-scroll">
            <div>
              <span>REPOSITORIES</span>
              <strong>{githubProfile?.public_repos ?? "—"}</strong>
            </div>

            <div>
              <span>FOLLOWERS</span>
              <strong>{githubProfile?.followers ?? "—"}</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Web + AI/ML</strong>
            </div>
          </div>

          <div className="github-repositories">
            <div className="github-repositories-heading">
              <p>RECENT REPOSITORIES</p>
            </div>

            {githubProjects.length > 0 ? (
              githubProjects.map((repo) => (
                <a
                  className="github-repository reveal-on-scroll"
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  key={repo.id}
                >
                  <div className="repository-number">
                    ↗
                  </div>

                  <div className="repository-content">
                    <h3>{repo.name}</h3>

                    <p>
                      {repo.description ||
                        "A project from my GitHub profile."}
                    </p>

                    <div className="repository-meta">
                      {repo.language && <span>{repo.language}</span>}

                      <span>
                        ★ {repo.stargazers_count}
                      </span>

                      <span>
                        Updated recently
                      </span>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <div className="github-empty reveal-on-scroll">
                <span>GITHUB</span>

                <h3>Explore my repositories</h3>

                <p>
                  My GitHub repositories will appear here when available.
                  You can also visit my profile directly.
                </p>

                <a
                  href="https://github.com/Tejaswini0624"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open GitHub Profile ↗
                </a>
              </div>
            )}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-heading reveal-on-scroll">
            <p className="section-number">04 — Experience</p>

            <h2>
              Learning by <span>building.</span>
            </h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article
                className="timeline-item reveal-on-scroll"
                key={item.company}
              >
                <div className="timeline-marker" />

                <div className="timeline-date">{item.period}</div>

                <div className="timeline-content">
                  <p className="project-status">Internship</p>

                  <h3>{item.role}</h3>

                  <h4>{item.company}</h4>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section-heading reveal-on-scroll">
            <p className="section-number">05 — Education</p>

            <h2>
              The foundation behind <span>the work.</span>
            </h2>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <div
                className="education-card reveal-on-scroll"
                key={item.title}
              >
                <div>
                  <p className="project-status">{item.period}</p>

                  <h3>{item.title}</h3>

                  <p className="education-school">{item.school}</p>

                  <p className="education-specialization">
                    {item.detail}
                  </p>
                </div>

                <div className="cgpa">
                  <span>{item.label}</span>
                  <strong>{item.score}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-panel reveal-on-scroll">
            <p className="section-number">06 — Contact</p>

            <h2>
              Let's build something <span>meaningful.</span>
            </h2>

            <p>
              I'm open to entry-level opportunities in software development,
              AI/ML and web development.
            </p>

            <div className="contact-actions">
              <a
                className="email-link"
                href="mailto:tejaswini21424@gmail.com"
              >
                tejaswini21424@gmail.com ↗
              </a>

              <button className="copy-email" onClick={copyEmail}>
                Copy email
              </button>
            </div>

            <div className="socials">
              <a
                href="https://github.com/Tejaswini0624"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <span className="social-divider" />

              <a href="https://www.linkedin.com/in/tejaswini-mamidisetti-a3580523b/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>

            <form className="contact-form" onSubmit={handleContact}>
              <div className="form-row">
               <input
  name="name"
  type="text"
  placeholder="Your name"
  aria-label="Your name"
  autoComplete="name"
  required
/>

              <input
  name="email"
  type="email"
  placeholder="Your email"
  aria-label="Your email"
  autoComplete="email"
  required
/>
              </div>

             <textarea
  name="message"
  placeholder="Tell me about your opportunity or idea..."
  aria-label="Your message"
  rows={5}
  required
/>

              <button className="form-submit" type="submit">
                Send Message ↗
              </button>

           {formStatus && (
  <p className="form-status" role="status" aria-live="polite">
    {formStatus}
  </p>
)}
            </form>
          </div>
        </section>
      </main>

      <div className="floating-tools">
        <button
          className={
            showQuickMenu
              ? "floating-button active"
              : "floating-button"
          }
          onClick={() => setShowQuickMenu(!showQuickMenu)}
        >
          •••
        </button>

        {showQuickMenu && (
          <div className="quick-menu">
            <p>QUICK NAVIGATION</p>

            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => goTo(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {activeSection !== "home" && (
        <button
          className="back-top"
          onClick={() => goTo("home")}
        >
          ↑
        </button>
      )}

{selectedProject && (
  <div
    className="modal-backdrop"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal case-study-modal"
      onClick={(event) => event.stopPropagation()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        className="modal-close"
        onClick={() => setSelectedProject(null)}
        aria-label="Close project case study"
      >
        ×
      </button>

      <div className="case-study-header">
        <div>
          <p className="project-status">
            {selectedProject.status} • {selectedProject.category}
          </p>
          <h2 id="project-modal-title">{selectedProject.title}</h2>
        </div>
        <span className="case-study-index">
          {selectedProject.number} / 02
        </span>
      </div>

      <p className="case-study-intro">{selectedProject.details}</p>

      <div className="case-study-grid">
        <div>
          <span className="case-study-label">01 — Overview</span>
          <p>{selectedProject.overview}</p>
        </div>
        <div>
          <span className="case-study-label">02 — Problem</span>
          <p>{selectedProject.problem}</p>
        </div>
        <div>
          <span className="case-study-label">03 — Solution</span>
          <p>{selectedProject.solution}</p>
        </div>
        <div>
          <span className="case-study-label">04 — My Contribution</span>
          <p>{selectedProject.contribution}</p>
        </div>
        <div className="case-study-result">
          <span className="case-study-label">05 — Outcome</span>
          <p>{selectedProject.outcome}</p>
        </div>
      </div>

      <div className="case-study-footer">
        <div className="tag-list">
          {selectedProject.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button
          className="button secondary"
          onClick={() => setSelectedProject(null)}
        >
          Close Case Study
        </button>
      </div>
    </div>
  </div>
)}
      
      {resumeOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setResumeOpen(false)}
        >
          <div
            className="resume-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setResumeOpen(false)}
            >
              ×
            </button>

            <p className="section-number">RESUME</p>

            <h2>Mamidisetti Tejaswini</h2>

            <p>B.Tech CSE • AI/ML • Full Stack</p>

         <div className="resume-preview">
  <iframe
    src="/resume.pdf"
    title="My Resume Preview"
    className="resume-pdf-preview"
  />
</div>
            <div className="resume-buttons">
              <a
                className="button primary"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open Full Resume ↗
              </a>

              <a
                className="button secondary"
                href="/resume.pdf"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}

      {commandOpen && (
        <div
          className="command-backdrop"
          onClick={() => setCommandOpen(false)}
        >
          <div
            className="command-palette"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="command-search">
              <span>⌘</span>

             <input
  autoFocus
  placeholder="Jump to a section..."
  value={commandQuery}
  onChange={(event) => setCommandQuery(event.target.value)}
/>

              <kbd>ESC</kbd>
            </div>

            <div className="command-items">
             {navItems.filter((item) =>
  item.toLowerCase().includes(commandQuery.toLowerCase())
).map((item) => (
                <button
                  key={item}
                  onClick={() => goTo(item)}
                >
                  <span>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>

                  <span>↗</span>
                </button>
              ))}

              <button
                onClick={() => {
                  setCommandOpen(false);
                  setResumeOpen(true);
                }}
              >
                <span>View Resume</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} Mamidisetti Tejaswini
        </span>

        <span>Designed & built with React</span>
      </footer>
    </div>
  );
}

function AnimatedStat({ value, label }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let current = 0;
        const numeric = parseFloat(value);

        const timer = setInterval(() => {
          current += numeric / 20;

          if (current >= numeric) {
            setDisplay(value);
            clearInterval(timer);
          } else {
            setDisplay(
              Number.isInteger(numeric)
                ? Math.floor(current)
                : current.toFixed(1)
            );
          }
        }, 35);

        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [value]);

  
useEffect(() => {
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      setSelectedProject(null);
      setResumeOpen(false);
      setCommandOpen(false);
      setShowQuickMenu(false);
    }
  };

  window.addEventListener("keydown", handleEscape);

  return () => {
    window.removeEventListener("keydown", handleEscape);
  };
}, []);


  return (
    <div ref={ref}>
      <strong>{display}</strong>
      <span>{label}</span>
    </div>
  );
}

export default App;