import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, ChevronUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProfileImage from './components/ProfileImage';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: "JPMorgan Chase & Co. Job Simulation",
      subtitle: "Software Engineering Virtual Experience",
      date: "Recent",
      description: [
        "Built a Spring Boot backend application through a hands-on software engineering simulation.",
        "Integrated Apache Kafka for asynchronous transaction processing and messaging workflows.",
        "Implemented transaction validation, persistence using Spring Data JPA with an H2 database, and external REST API integration.",
        "Developed a REST controller exposing a GET endpoint for retrieving user account balances."
      ],
      tags: ["Spring Boot", "Java", "Kafka", "REST API", "JPA"],
      github: "#"
    },
    {
      title: "MediMind",
      subtitle: "AI Clinical Decision Support System",
      date: "Jan 2025 – Mar 2025",
      description: [
        "Addressed clinicians spending excessive time manually reviewing dense, unstructured patient reports.",
        "Parsed medical reports with PyMuPDF; extracted clinical entities using BioBERT and scispaCy.",
        "Predicted disease risks via XGBoost; generated concise clinical summaries using LLMs.",
        "Modular pipeline architecture enables plug-and-play scalability across medical specialties."
      ],
      tags: ["Python", "BioBERT", "scispaCy", "XGBoost", "PyMuPDF", "LLMs"],
      github: "#"
    },
    {
      title: "Campus Compass",
      subtitle: "Lost & Found Platform",
      date: "Aug 2024 – Oct 2024",
      description: [
        "Solved the lack of a centralised, trackable system for reporting and reclaiming lost items on campus.",
        "Full-stack app with JWT auth, photo uploads, and a live status board.",
        "Designed 5-table relational schema with 11 REST endpoints and optimised JOIN queries."
      ],
      tags: ["Node.js", "Express.js", "MySQL", "JWT"],
      github: "#"
    },
    {
      title: "Abhaya",
      subtitle: "Smart Emergency Safety App",
      date: "Nov 2024 – Jan 2025",
      description: [
        "Tackled the absence of a fast, accessible emergency response tool for individuals in unsafe situations.",
        "One-tap SOS alerts with real-time GPS tracking visualised on interactive Leaflet.js maps.",
        "Live trip-sharing with guardians and crowd-sourced unsafe-zone reporting for proactive safety awareness."
      ],
      tags: ["HTML", "CSS", "JavaScript", "Leaflet.js"],
      github: "#"
    },
    {
      title: "Peltier-Based Smart Face Mask",
      subtitle: "Automated Thermal Control",
      date: "2025",
      description: [
        "Designed and developed a smart face mask integrating a Peltier module and sensors to enable automated temperature control.",
        "Focused on improving user comfort under varying environmental conditions through real-time thermal regulation."
      ],
      tags: ["Hardware", "Sensors", "Innovation"],
      github: "#"
    },
    {
      title: "VR-Based Tourism Experience",
      subtitle: "Samsung PRISM Ideathon Finalist",
      date: "2025",
      description: [
        "Led and coordinated a 5-member team to design a VR-based tourism solution enabling virtual travel experiences.",
        "Focused on improving accessibility for physically challenged individuals and enhancing learning for school students."
      ],
      tags: ["VR", "Team Leadership"],
      github: "#"
    },
    {
      title: "Tourism Planning Application",
      subtitle: "Curated Travel for Goa",
      date: "2024",
      description: [
        "Developed an application that plans daily itineraries and travel packages based on trip duration and user preferences.",
        "Enabled users to organize activities, optimize daily schedules, and explore curated tourism packages for Goa."
      ],
      tags: ["Web Dev", "Planning Algorithm"],
      github: "#"
    }
  ];

  return (
    <>
      <nav>
        <div className="container nav-content">
          <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => scrollTo('home')}>
            Akshada B.
          </div>
          <div className="nav-links">
            {['home', 'about', 'skills', 'projects', 'achievements'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                onClick={(e) => { e.preventDefault(); scrollTo(section); }}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                style={{ textTransform: 'capitalize' }}
              >
                {section}
              </a>
            ))}
            <a 
              href="/akshada_resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="nav-link"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '70px' }}>
          <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }} className="animate-fade-in">
              <ProfileImage />
            </div>
            <div style={{ flex: '1 1 500px' }} className="animate-fade-in delay-200">
              <h2 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 500 }}>Hello, I'm</h2>
              <h1 className="text-gradient" style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Akshada B
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                Computer Science undergraduate with experience in AI/ML, backend, and full-stack development. Skilled in Java, Python, Spring Boot, Node.js, REST APIs, and machine learning, with a strong interest in building scalable software solutions.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="btn btn-primary">
                  View Work
                </a>
                <a href="mailto:akshada1901@gmail.com" className="btn btn-outline">
                  <Mail size={18} /> Contact Me
                </a>
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                <a href="https://github.com/akshada1901" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover-white">
                  <FaGithub size={24} />
                </a>
                <a href="#" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover-white">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About & Education */}
        <section id="about" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Education & Background</h2>
            <div className="timeline">
              <div className="timeline-item left">
                <div className="timeline-content">
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>B.Tech in Computer Science and Engineering</h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>SRM Institute of Science and Technology, Kattankulathur</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>2024 – 2028 | Chennai, India</p>
                  <p>CGPA: 9.28</p>
                </div>
              </div>
              <div className="timeline-item right">
                <div className="timeline-content">
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Higher Secondary Certificate (Class XII)</h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>CBSE</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>2023 – 2024 | Chennai, India</p>
                  <p>Percentage: 85.8%</p>
                </div>
              </div>
              <div className="timeline-item left">
                <div className="timeline-content">
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Secondary School Certificate (Class X)</h3>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>CBSE</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>2021 – 2022 | Chennai, India</p>
                  <p>Percentage: 92.8%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills">
          <div className="container">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Technical Skills</h2>
            <div className="skills-grid">
              <div className="glass-panel">
                <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Languages</h3>
                <p style={{ color: 'var(--text-secondary)' }}>C++, Java, Python, C, JavaScript</p>
              </div>
              <div className="glass-panel">
                <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Frameworks</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Spring Boot, Node.js, Express.js, Kafka, REST APIs</p>
              </div>
              <div className="glass-panel">
                <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>AI & ML</h3>
                <p style={{ color: 'var(--text-secondary)' }}>BioBERT, scispaCy, XGBoost, LLMs, n8n</p>
              </div>
              <div className="glass-panel">
                <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Databases & Tools</h3>
                <p style={{ color: 'var(--text-secondary)' }}>MySQL, H2, JPA, Git, Maven, PyMuPDF, phpMyAdmin</p>
              </div>
              <div className="glass-panel" style={{ gridColumn: '1 / -1' }}>
                <h3 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Core Concepts</h3>
                <p style={{ color: 'var(--text-secondary)' }}>OOP, DSA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="glass-panel project-card">
                  <div className="content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 500 }}>{project.subtitle}</p>
                      </div>
                      <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} className="hover-white" title="View on GitHub">
                        <FaGithub size={20} />
                      </a>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.5rem' }}>{project.date}</p>
                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      {project.description.map((desc, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section id="achievements">
          <div className="container">
            <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Achievements & Certifications</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              
              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Awards & Recognition
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.1rem' }}>Top 9 Finalist — Hackstreet 4.0 Pentathon</h4>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2026</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>MediMind advanced to finals out of 100+ teams in NextGen AI, SRM IST.</p>
                  </div>
                  
                  <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.1rem' }}>Finalist — Samsung PRISM Metaverse Ideathon</h4>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2025</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Led 5-member team into top 20 of 120+ teams (450+ participants).</p>
                  </div>

                  <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h4 style={{ fontSize: '1.1rem' }}>Best Project Award — SRM IST</h4>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2025</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Peltier smart face mask with automated thermal control; top pick among 80+ teams.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Certifications & Extracurriculars
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Courses</h4>
                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <li>JPMorgan Chase & Co. Software Engineering Job Simulation — Forage</li>
                      <li>Object Oriented Programming — NPTEL</li>
                      <li>Java Programming — NPTEL & MyCaptain</li>
                      <li>Operating Systems — NPTEL</li>
                      <li>Agentic AI Workshop — Hands-on training with n8n</li>
                      <li>Web Development Workshop — Practical full-stack with Node.js</li>
                    </ul>
                  </div>

                  <div className="glass-panel" style={{ padding: '1.5rem' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Extracurriculars</h4>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <strong style={{ color: 'var(--text-primary)' }}>Volunteer, Alumni Affairs</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>2025 - Present</span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Shortlisted alumni, pitched events, and supported end-to-end planning at SRM IST.</p>
                    </div>
                    <div>
                      <strong style={{ color: 'var(--text-primary)' }}>Competitive Chess Player</strong>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>National and state-level tournaments; demonstrates strategic thinking.</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

      </main>

      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '3rem 0 2rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
            <a href="mailto:akshada1901@gmail.com" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hover-white">
              <Mail size={18} /> akshada1901@gmail.com
            </a>
            <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} /> 9677038754
            </span>
            <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={18} /> Chennai, India
            </span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            © {new Date().getFullYear()} Akshada B. All rights reserved.
          </p>
          <button 
            onClick={() => scrollTo('home')}
            style={{ 
              background: 'transparent', 
              border: '1px solid var(--border-color)', 
              color: 'var(--text-secondary)', 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'white'; e.currentTarget.style.color = 'white'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
