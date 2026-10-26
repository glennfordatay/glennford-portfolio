"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Clapperboard,
  FileWarning,
  FolderOpen,
  Mail,
  Menu,
  Moon,
  Network,
  ScanSearch,
  ShieldCheck,
  Sun,
  Terminal,
  X,
} from "lucide-react";

type Category = "All work" | "Technical" | "Data & analysis" | "Creative" | "Professional";
type Project = {
  id: string;
  category: Exclude<Category, "All work">;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  index: string;
  theme: string;
  icon: typeof ShieldCheck;
  details: string[];
  report?: string;
  reports?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    id: "gophish",
    category: "Technical",
    title: "GoPhish Awareness Lab",
    report: "/projects/Atay,Glennford_GoPhish_Report.docx.pdf",
    subtitle: "SECURITY / 001",
    description:
      "A controlled security-awareness simulation using GoPhish and MailHog in a local Kali Linux environment.",
    status: "Documented lab",
    index: "01",
    theme: "ink",
    icon: ShieldCheck,
    details: [
      "Configured GoPhish for local campaign testing and MailHog for SMTP capture.",
      "Built an awareness-focused landing page that did not collect credentials.",
      "Recorded test activity: 1 email sent, 1 opened, 1 link clicked, 0 submitted data, and 0 reported emails.",
      "The metrics describe the author's own controlled test activity, not a real-world phishing success rate.",
    ],
  },
  {
    id: "cowrie",
    category: "Technical",
    title: "Cowrie SSH Honeypot",
    report: "/projects/Atay,Glennford_Honeypot_Report.docx.pdf",
    subtitle: "SECURITY / 002",
    description:
      "A contained SSH honeypot lab using Cowrie in Kali Linux, with Windows-to-VM connectivity through VirtualBox NAT forwarding.",
    status: "Documented lab",
    index: "02",
    theme: "lime",
    icon: Terminal,
    details: [
      "Installed and ran Cowrie inside a Python virtual environment.",
      "Configured local host-to-VM SSH access using VirtualBox NAT port forwarding on port 2222.",
      "Verified the service listener and reviewed Cowrie event logs.",
      "The environment was intended for local validation, not for targeting external systems.",
    ],
  },
  {
    id: "incident-reporting",
    category: "Technical",
    title: "Incident Reporting",
    report: "/projects/Activity1_IncidentReport_Atay,Glennford.docx.pdf",
    subtitle: "OPERATIONS / 003",
    description:
      "A reporting-focused work sample for documenting an incident, preserving relevant observations, and communicating next steps.",
    status: "Portfolio work sample",
    index: "03",
    theme: "blue",
    icon: FileWarning,
    details: [
      "Structure an incident summary with time, scope, observed indicators, and impact assessment.",
      "Separate confirmed observations from assumptions and unknowns.",
      "Record recommended containment, escalation, and follow-up actions.",
      "Replace this sample with a sanitized report or clearly labelled exercise evidence before claiming a completed investigation.",
    ],
  },
  {
    id: "triage",
    category: "Technical",
    title: "Alert Triage",
    report: "/projects/Activity2_IncidentTickets_Atay,Glennford.docx.pdf",
    subtitle: "OPERATIONS / 004",
    description:
      "A structured approach to reviewing alerts, assessing priority, gathering context, and deciding what needs further investigation.",
    status: "Learning activity / work sample",
    index: "04",
    theme: "paper",
    icon: ScanSearch,
    details: [
      "Capture the alert source, timestamp, severity, and affected asset where known.",
      "Review supporting context and distinguish signal from incomplete evidence.",
      "Document a reasoned disposition and recommended next action.",
      "Add screenshots or exercise results when you have evidence from a completed triage activity.",
    ],
  },
  {
    id: "splunk",
    category: "Data & analysis",
    title: "Splunk Activities & Dashboard",
    
reports: [
  {
    label: "View Dashboard",
    url: "/images/Atay,Glennford_Activity_4_Splunk%20Dashboard.png",
  },
  {
    label: "View Workbook",
    url: "/projects/Atay,Glennford_Splunk_Tier1_SOC_Student_Workbook.docx.pdf",
  },
],

    subtitle: "DATA / 001",
    description:
      "A space for log searches, event exploration, and dashboard visualizations built during Splunk learning activities.",
    status: "Add evidence before publishing as completed",
    index: "05",
    theme: "blue",
    icon: ChartNoAxesCombined,
    details: [
      "Document the data source and what each search is intended to answer.",
      "Show selected search queries and explain the resulting observations.",
      "Include a dashboard screenshot and short interpretation of its panels.",
      "This entry is a content scaffold until your actual Splunk activity and dashboard evidence are added.",
    ],
  },
  {
    id: "wireshark",
    category: "Technical",
    title: "Wireshark Packet Analysis",
    report: "/projects/Atay,Glennford_Day1_Lab_Student_Worksheet.pdf",
    subtitle: "NETWORKS / 001",
    description:
      "A work area for packet-capture inspection, display filters, protocol observations, and network-traffic interpretation.",
    status: "Add evidence before publishing as completed",
    index: "06",
    theme: "coral",
    icon: Network,
    details: [
      "Identify the capture source and define the scope of analysis.",
      "Record relevant protocols, filters, and observed packet behavior.",
      "Explain what the capture supports and what it cannot establish on its own.",
      "Add sanitized screenshots from your own Wireshark activity before marking this work complete.",
    ],
  },
];

const categories: Category[] = ["All work", "Technical", "Data & analysis", "Creative", "Professional"];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
      <span className="section-label-line" />
    </div>
  );
}

export default function Home() {
  const [category, setCategory] = useState<Category>("All work");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects = useMemo(
    () => projects.filter((project) => category === "All work" || project.category === category),
    [category],
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className={darkMode ? "site dark-mode" : "site"}>
      <div className="topline"><span>GSA® / PERSONAL ARCHIVE</span><span>CEBU, PH · 2026</span></div>
      <header className="nav-wrap">
        <a className="wordmark" href="#home" aria-label="Glennford Atay home">GA<span>.</span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {[ ["Projects", "#projects"], ["Experience", "#experience"], ["Skills", "#skills"], ["About", "#about"] ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={14}/></a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <Sun size={17}/> : <Moon size={17}/>}
          </button>
          <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={19}/> : <Menu size={19}/>}
          </button>
        </div>
      </header>

      <section className="hero section-pad" id="home">
        <div className="hero-meta"><span>INDEX 001—007</span><span>INDEPENDENT / MULTIDISCIPLINARY</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot"/> A PORTFOLIO IN PROGRESS</p>
            <h1>I work between <em>systems</em> and stories.</h1>
            <p className="hero-intro">I’m Glennford Atay, a multidisciplinary professional exploring technology, analysis, people, and film. This is an evolving record of the work I do, the questions I investigate, and the things I’m learning to make.</p>
            <div className="hero-buttons">
              <a className="button button-dark" href="#projects">Explore the index <ArrowDownRight size={16}/></a>
              <a className="text-link" href="#about">A little about me <ArrowRight size={15}/></a>
            </div>
            <div className="hero-principles"><span>01 / INVESTIGATE</span><span>02 / ANALYZE</span><span>03 / CREATE</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract editorial collage representing technical and creative work">
            <div className="art-stamp">FIELD<br/>NOTES<br/><span>№ 026</span></div>
            <div className="art-ring ring-one"/><div className="art-ring ring-two"/>
            <div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
            <div className="art-block art-block-lime"><Terminal size={24}/><span>SYS / 001</span></div>
            <div className="art-block art-block-blue"><ChartNoAxesCombined size={24}/><span>DATA / 002</span></div>
            <div className="art-block art-block-coral"><Clapperboard size={24}/><span>FRAME / 003</span></div>
            <div className="art-caption">A collection of<br/>different perspectives.</div>
            <div className="art-index">FIG. 01 — MULTIPERSPECTIVE INDEX</div>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO DISCOVER</span><span className="scroll-line"/><span>TECHNOLOGY · ANALYSIS · CREATIVE WORK</span></div>
      </section>

      <section className="summary-band section-pad" id="summary">
        <SectionLabel number="00">Executive summary</SectionLabel>
        <div className="summary-grid">
          <h2>Different disciplines.<br/><span>One curious mind.</span></h2>
          <div className="summary-copy"><p>My experience spans technical support, administrative operations, cybersecurity lab work, and creative production. Across these settings, I bring problem-solving, documentation, communication, analytical thinking, and a willingness to learn.</p><p>This portfolio brings those threads together through practical projects, professional experience, credentials, and creative collaborations. It’s not a claim to know everything. It’s a record of work, evidence, and progress.</p></div>
        </div>
      </section>

      <section className="projects-section section-pad" id="projects">
        <SectionLabel number="01">Selected work / project index</SectionLabel>
        <div className="section-heading-row"><div><p className="eyebrow">THE WORKING ARCHIVE</p><h2>Ideas, tested<br/>and documented<span className="period">.</span></h2></div><p className="section-description">Each entry is a different lens: a technical lab, a data exercise, a process, or a creative collaboration. Open a card to explore its scope and evidence.</p></div>
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((item) => <button key={item} className={category === item ? "filter active" : "filter"} onClick={() => setCategory(item)}>{item}<span>{item === "All work" ? projects.length : item === "Creative" || item === "Professional" ? "—" : projects.filter((p) => p.category === item).length}</span></button>)}
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => {
            const Icon = project.icon;
            return <div className={`project-card project-${project.theme}`} key={project.id} onClick={() => setActiveProject(project)}>
              <div className="project-card-top"><span>{project.subtitle}</span><span className="project-open"><ArrowUpRight size={17}/></span></div>
              <div className="project-visual"><Icon size={34} strokeWidth={1.35}/><span className="visual-index">{project.index}</span><span className="visual-grid-mark">＋</span></div>
              <div className="project-card-bottom"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p>
                {project.report && (
  <a
    href={project.report}
    target="_blank"
    rel="noopener noreferrer"
    className="project-report-link"
    onClick={(event) => event.stopPropagation()}
  >
    View Report ↗
  </a>
)}
                
              {project.reports?.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-report-link"
                  onClick={(event) => event.stopPropagation()}
                >
                  {item.label} ↗
                </a>
              ))}

              </div><span className="project-status">{project.status}</span></div>
            </div>;
          })}
          {(category === "Creative" || category === "Professional") && <div className="empty-filter"><p className="eyebrow">MORE IN THE ARCHIVE</p><h3>{category === "Creative" ? "Creative work has its own frame." : "Experience is part of the evidence."}</h3><p>{category === "Creative" ? "Film production and selected creative collaborations appear in the experience timeline below." : "Your professional roles and transferable skills are documented in the experience section."}</p><a href={category === "Creative" ? "#experience" : "#experience"} className="text-link">Explore experience <ArrowRight size={15}/></a></div>}
        </div>
        <p className="archive-note"><span>NOTE / 001</span> Work samples and learning activities are labelled honestly. Entries marked for evidence need your screenshots, files, or results before they should be presented as completed projects.</p>
      </section>

      <section className="experience-section section-pad" id="experience">
        <SectionLabel number="02">Experience / timeline</SectionLabel>
        <div className="section-heading-row"><div><p className="eyebrow">WORK, PEOPLE & PRACTICE</p><h2>Different rooms.<br/>Transferable skills<span className="period">.</span></h2></div><p className="section-description">Each role taught a different way to work: support people, keep operations moving, or help a creative team bring a project to life.</p></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-date">AUG 2026 <span>01 MONTH</span></div><div className="timeline-marker coral-marker"><Clapperboard size={17}/></div><div className="timeline-content"><div className="timeline-title-row"><div><p className="timeline-type">CREATIVE PRODUCTION</p><h3>Production Assistant — <em>BAYNTE</em></h3><p className="timeline-org">INVISION Films · Freelance</p></div><span className="timeline-count">EXP / 03</span></div><p>Supported on-set and behind-the-scenes production needs, prepared equipment and materials, coordinated with crew, and helped keep production organized.</p><div className="achievement-note"><Award size={16}/><span><strong>Festival recognition</strong> — *BAYNTE* placed 5th at the Linggo ng Kabataan Film Festival 2026, according to the supplied experience details.</span></div><div className="tag-row"><span>Field production</span><span>Coordination</span><span>Teamwork</span></div></div></article>
          <article className="timeline-item"><div className="timeline-date">JAN–APR 2026 <span>4 MONTHS</span></div><div className="timeline-marker blue-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-content"><div className="timeline-title-row"><div><p className="timeline-type">CUSTOMER & TECHNICAL SUPPORT</p><h3>Technical Support Representative</h3><p className="timeline-org">Concentrix · Full-time</p></div><span className="timeline-count">EXP / 02</span></div><p>Handled customer inquiries and troubleshooting, worked toward timely resolutions, documented interactions, and maintained service quality in a fast-paced environment.</p><div className="tag-row"><span>Troubleshooting</span><span>Customer support</span><span>Documentation</span></div></div></article>
          <article className="timeline-item"><div className="timeline-date">MAY 2024–DEC 2025 <span>1 YR 8 MOS*</span></div><div className="timeline-marker lime-marker"><FolderOpen size={17}/></div><div className="timeline-content"><div className="timeline-title-row"><div><p className="timeline-type">ADMINISTRATION & OPERATIONS</p><h3>Working Scholar</h3><p className="timeline-org">University of Cebu · Full-time</p></div><span className="timeline-count">EXP / 01</span></div><p>Assisted with administrative and operational tasks, managed records and documents, handled basic data entry, and supported staff and students with inquiries while balancing academic responsibilities.</p><div className="tag-row"><span>Administration</span><span>Data entry</span><span>Time management</span></div></div></article>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills">
        <SectionLabel number="03">Skills / working toolkit</SectionLabel>
        <div className="skills-intro"><h2>Different tools.<br/><span>Shared habits.</span></h2><p>Tools matter, but so do the habits behind them: careful observation, clear notes, thoughtful analysis, collaboration, and follow-through.</p></div>
        <div className="skills-grid">
          <article className="skill-card skill-dark"><span className="skill-number">01</span><Terminal size={23}/><h3>Technical & security</h3><p>Linux lab environments, GoPhish, Cowrie, technical troubleshooting, and cybersecurity learning activities.</p><div className="skill-footer">TOOLS / SYSTEMS</div></article>
          <article className="skill-card skill-blue"><span className="skill-number">02</span><ChartNoAxesCombined size={23}/><h3>Data & analysis</h3><p>Analytical thinking, data handling, reporting, dashboard learning activities, and structured problem-solving.</p><div className="skill-footer">PATTERNS / INSIGHTS</div></article>
          <article className="skill-card skill-lime"><span className="skill-number">03</span><FolderOpen size={23}/><h3>Administration</h3><p>Microsoft Office, Google Workspace, data entry, document management, record keeping, and organization.</p><div className="skill-footer">PROCESS / DETAIL</div></article>
          <article className="skill-card skill-coral"><span className="skill-number">04</span><Clapperboard size={23}/><h3>Creative production</h3><p>Production assistance, field coordination, teamwork, visual storytelling, and adapting on set.</p><div className="skill-footer">PEOPLE / STORIES</div></article>
        </div>
      </section>

      <section className="credentials-section section-pad" id="certifications">
        <SectionLabel number="04">Credentials / learning record</SectionLabel>
        <div className="section-heading-row"><div><p className="eyebrow">COURSES & BADGES</p><h2>Learning, in progress<span className="period">.</span></h2></div><p className="section-description">A record of structured learning. Credential names and issuing details should match the certificates and badges you actually received.</p></div>
        <div className="credential-list">
          {[ ["DATA / 001", "Data Analytics Level 3", "Data & analysis", "#DCE4FF"], ["SEC / 003", "Cyber Threat Monitoring Level 1", "Cybersecurity", "#C7F36B"], ["FORT / 001", "Fortinet NSE 1", "Network security foundations", "#E8A58C"], ["FORT / 002", "Fortinet NSE 2", "Network security foundations", "#DCE4FF"], ["FORT / 003", "Fortinet NSE 3", "Network security foundations", "#C7F36B"] ].map(([code, name, type, color]) => <article className="credential-row" key={code}><span className="credential-code">{code}</span><div className="credential-symbol" style={{ backgroundColor: color }}><Award size={20}/></div><div className="credential-name"><h3>{name}</h3><p>{type}</p></div><span className="credential-proof">ADD CERTIFICATE / DATE</span></article>)}
        </div>
        <p className="fine-print credential-note">Before launch, add each issuing organization, completion date, and verification link where available. Use the exact title shown on each certificate.</p>
      </section>

      <section className="about-section section-pad" id="about">
        <SectionLabel number="05">About / context</SectionLabel>
        <div className="about-layout"><div className="about-side"><p className="eyebrow">A LITTLE CONTEXT</p><h2>Curiosity is<br/>the common thread<span className="period">.</span></h2><div className="about-mark">G<span>.</span>A</div></div><div className="about-copy"><p className="about-lead">I’m interested in the space where technical thinking and creative thinking meet.</p><p>My path includes customer support, administrative work, cybersecurity labs, and film production. These disciplines may look unrelated on paper, but each asks for observation, preparation, problem-solving, and the ability to work with people.</p><p>I use this portfolio to document what I have done, what I can demonstrate, and what I am learning next. I value clear evidence over inflated claims, and collaboration over pretending to know everything.</p><div className="about-facts"><div><span>BASE</span><strong>Cebu, Philippines</strong></div><div><span>INTERESTS</span><strong>Technology / Data / Film</strong></div><div><span>APPROACH</span><strong>Learn by doing</strong></div></div></div></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-top"><SectionLabel number="06">Contact / next conversation</SectionLabel><span className="contact-orbit">LET’S CONNECT ↗</span></div>
        <div className="contact-main"><h2>Good work starts<br/>with a conversation<span className="period">.</span></h2><p>For opportunities, collaborations, or a closer look at the work, reach out through the links below.</p><div className="contact-links"><a href="mailto:glennford.sigueatay@gmail.com"><Mail size={18}/><span>Email me</span><ArrowUpRight size={16}/></a><a href="https://www.linkedin.com/in/glennford-atay-a702b63bb/" target="_blank" rel="noreferrer"><ArrowUpRight size={18}/><span>LinkedIn profile</span><ArrowUpRight size={16}/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Terminal size={18}/><span>GitHub</span><ArrowUpRight size={16}/></a></div></div>
        <footer className="footer"><a className="wordmark" href="#home">GA<span>.</span></a><span>THE MULTIPERSPECTIVE INDEX</span><a href="#home">BACK TO TOP ↑</a><span>© 2026 GLENNFORD ATAY</span></footer>
      </section>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}><div className="modal-top"><span>{activeProject.subtitle}</span><button className="icon-button" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={19}/></button></div><p className="eyebrow">{activeProject.category} / CASE FILE</p><h2 id="modal-title">{activeProject.title}</h2><p className="modal-description">{activeProject.description}</p><div className="modal-status">CURRENT LABEL <strong>{activeProject.status}</strong></div><h3>Scope & notes</h3><ul>{activeProject.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="modal-bottom"><span>INDEX {activeProject.index.padStart(3, "0")}</span><button className="button button-dark" onClick={() => setActiveProject(null)}>Close case file <X size={15}/></button></div></section></div>}
    </main>
  );
}
