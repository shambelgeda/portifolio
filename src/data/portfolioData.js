export const personalInfo = {
  name: "Shambel Geda",
  eyebrow: "Computer Science Student • Software Developer",
  primaryRole: "Computer Science Student | Software Developer",
  secondaryAreas: "Web Development | Software Engineering | Cybersecurity",
  heroHeading: "Hi, I'm Shambel Geda",
  supportingStatement: "Building practical, user-focused software with modern web technologies, while developing additional expertise in cybersecurity.",
  description: "I enjoy designing, developing, and improving software applications while continuously expanding my knowledge of programming, web development, databases, and secure software engineering.",
  cvPath: "/assets/Shambel-Geda-CV.pdf",
  socials: {
    github: {
      name: "GitHub",
      url: "#",
      placeholderLabel: "Add GitHub profile link",
      isPlaceholder: true,
    },
    linkedin: {
      name: "LinkedIn",
      url: "#",
      placeholderLabel: "Add LinkedIn profile link",
      isPlaceholder: true,
    },
    email: {
      name: "Email",
      address: "shambelgeda.contact@example.com",
      placeholderLabel: "Add official email address",
      isPlaceholder: true,
    }
  }
};

export const aboutData = {
  heading: "About Me",
  paragraphs: [
    "I am a Computer Science student with a strong interest in software development and practical problem solving. My academic background has introduced me to programming, web development, databases, algorithms, artificial intelligence, and software engineering concepts.",
    "I enjoy learning by building projects and experimenting with technologies that can be applied to real-world problems. My main interest is developing useful, maintainable, and user-friendly software applications.",
    "In addition to software development, I have gained practical exposure to cybersecurity and penetration testing through internship training and hands-on laboratory experience. This additional knowledge helps me understand the importance of developing applications with security, authentication, authorization, and data protection in mind.",
    "My goal is to continue improving my practical software-development skills and become a strong software engineer capable of designing and building reliable real-world systems."
  ],
  pillars: [
    {
      number: "01",
      title: "Computer Science",
      description: "Academic foundation in programming, algorithms, databases, AI, and software engineering.",
      isPrimary: false,
    },
    {
      number: "02",
      title: "Software Development",
      description: "Primary professional interest focused on building practical and maintainable applications.",
      isPrimary: true, // Visually prominent
      tag: "Primary Focus",
    },
    {
      number: "03",
      title: "Web Technologies",
      description: "Frontend, backend, APIs, databases, and responsive web development.",
      isPrimary: false,
    },
    {
      number: "04",
      title: "Cybersecurity",
      description: "Additional practical exposure to web application security and penetration testing.",
      isPrimary: false,
      tag: "Security Mindset",
    },
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: ["Python", "JavaScript", "PHP", "SQL"]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "jQuery", "Responsive Web Design"]
  },
  {
    category: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "PHP", "REST APIs", "Authentication", "JWT", "Server-side Development"]
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["SQL", "SQLite", "Database Design", "DBMS", "Advanced Database Concepts"]
  },
  {
    category: "Software Engineering",
    icon: "Cpu",
    skills: [
      "Object-Oriented Programming",
      "Data Structures and Algorithms",
      "Software Design",
      "Problem Solving",
      "API Development",
      "Debugging",
      "Version Control"
    ]
  },
  {
    category: "Development Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Visual Studio Code", "Linux", "Kali Linux"]
  }
];

export const cybersecurityExperience = {
  heading: "Additional Cybersecurity Experience",
  description: "Alongside software development, I have practical exposure to cybersecurity and penetration testing through internship training, security laboratories, and authorized web application assessments.",
  takeaway: "Understanding cybersecurity allows me to consider security throughout the software development process rather than treating it as an afterthought.",
  conceptsAndTools: [
    "Web Application Security",
    "Penetration Testing",
    "OWASP Top 10",
    "Vulnerability Assessment",
    "Authentication Testing",
    "Authorization Testing",
    "API Security",
    "SQL Injection",
    "Cross-Site Scripting",
    "Burp Suite",
    "Nmap",
    "SQLMap",
    "Wireshark",
    "Kali Linux"
  ]
};

export const experienceData = [
  {
    role: "Cybersecurity / Penetration Testing Intern",
    organization: "Information Network Security Administration (INSA)",
    department: "Cyber Security / Penetration Testing",
    type: "Internship",
    description: "Completed practical cybersecurity training and authorized penetration-testing activities involving web applications, APIs, vulnerability assessment, and security reporting.",
    activities: [
      "Studied ethical hacking and information security fundamentals",
      "Practiced OWASP Top 10 concepts",
      "Used Burp Suite for web application testing",
      "Performed security testing in controlled environments",
      "Conducted white-box testing with application source code",
      "Conducted black-box testing without source code",
      "Tested authentication and authorization mechanisms",
      "Tested API security",
      "Used Nmap, SQLMap, Burp Suite, and Wireshark",
      "Documented vulnerabilities and remediation recommendations"
    ],
    perspectiveNote: "Provided hands-on defensive & offensive security perspective that now strengthens code architecture, input validation, and access control in software engineering."
  }
];

export const projectsData = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    filterCategories: ["Web Development", "Software Development"],
    priorityOrder: 1,
    description: "A modern responsive personal portfolio website designed to present my education, technical skills, projects, experience, and professional background.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "#",
    githubPlaceholder: "Add GitHub repository link",
    liveDemoUrl: "#",
    liveDemoPlaceholder: "Currently Viewing",
    isPlaceholder: false,
    badge: "Featured Portfolio",
    highlights: [
      "Responsive component-driven design",
      "Tailwind CSS with design tokens and dark theme",
      "Interactive filtering and smooth section navigation",
      "Accessible semantics & form verification"
    ]
  },
  {
    id: "fullstack-application",
    title: "Full-Stack Web Application — Project details to be added",
    category: "Software Development",
    filterCategories: ["Software Development", "Web Development"],
    priorityOrder: 2,
    description: "A full-stack web application demonstrating frontend development, backend logic, database integration, user authentication, and API communication.",
    technologies: ["JavaScript", "React", "Node.js", "REST API", "Database"],
    githubUrl: "#",
    githubPlaceholder: "Repository link to be updated",
    liveDemoUrl: "#",
    liveDemoPlaceholder: "Demo to be deployed",
    isPlaceholder: true,
    badge: "Project in Development",
    highlights: [
      "Component-based UI state architecture",
      "RESTful backend endpoint integration",
      "Relational or document schema integration",
      "User session & auth workflows"
    ]
  },
  {
    id: "database-application",
    title: "Database Application",
    category: "Database",
    filterCategories: ["Database", "Software Development"],
    priorityOrder: 3,
    description: "A database-driven application demonstrating database design, SQL queries, CRUD operations, data management, and integration between an application and a relational database.",
    technologies: ["SQL", "SQLite", "Python / PHP"],
    githubUrl: "#",
    githubPlaceholder: "Add repository link",
    liveDemoUrl: "#",
    liveDemoPlaceholder: "Local database script",
    isPlaceholder: false,
    badge: "Database System",
    highlights: [
      "Relational schema normalization",
      "Parameterized SQL queries & CRUD logic",
      "Data consistency & indexing concepts",
      "Backend data access layer"
    ]
  },
  {
    id: "vulnbank-assessment",
    title: "VulnBank Security Assessment",
    category: "Cybersecurity",
    filterCategories: ["Cybersecurity"],
    priorityOrder: 4,
    description: "A hands-on security assessment of a deliberately vulnerable banking application conducted in a controlled environment. The project involved identifying web application vulnerabilities, analyzing their technical causes, understanding their impact, and documenting remediation.",
    technologies: ["Python", "Flask", "SQLite", "Burp Suite", "Kali Linux"],
    githubUrl: "#",
    githubPlaceholder: "Add security report / lab link",
    liveDemoUrl: "#",
    liveDemoPlaceholder: "Controlled lab environment",
    isPlaceholder: false,
    badge: "Security Lab",
    highlights: [
      "Vulnerability assessment across authentication & API workflows",
      "Testing for SQL injection and broken access controls",
      "Remediation documentation for secure development practices",
      "Controlled sandbox security analysis"
    ]
  }
];

export const educationData = {
  degree: "Bachelor of Science in Computer Science",
  university: "Dilla University",
  status: "Current Student",
  focusAreas: [
    "Software Development & Programming",
    "Algorithms & Data Structures",
    "Relational Databases & DBMS",
    "Computer Systems & Networking",
    "Artificial Intelligence Fundamentals"
  ]
};

export const certificationsData = [
  {
    title: "Certified Ethical Hacker (CEH)",
    status: "Security Training / Study",
    type: "Study & Lab Training",
    note: "Focused on ethical hacking methodologies, reconnaissance, vulnerability analysis, and security controls.",
    isOfficialCertification: false
  },
  {
    title: "CompTIA Security+",
    status: "Security Training / Study",
    type: "Study & Security Concepts",
    note: "Foundational knowledge in network security, threat mitigation, access management, and organizational security.",
    isOfficialCertification: false
  },
  {
    title: "PortSwigger Web Security Academy",
    status: "Practical Web Security Training",
    type: "Practical Learning",
    note: "Hands-on laboratory exercises covering web vulnerabilities, injection flaws, authentication weaknesses, and defense techniques.",
    isOfficialCertification: false
  }
];

export const philosophySteps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the problem, users, and requirements."
  },
  {
    number: "02",
    title: "Design",
    description: "Plan the architecture, user experience, database, and technical approach."
  },
  {
    number: "03",
    title: "Build",
    description: "Develop clean, maintainable, and functional software."
  },
  {
    number: "04",
    title: "Improve",
    description: "Test, debug, optimize, secure, and continuously improve the application."
  }
];

export const philosophyQuote = "I believe good software is not only about making something work. It should also be understandable, maintainable, usable, and secure.";

export const currentlyExploring = [
  { name: "Full-Stack Development", category: "Core Development", detail: "End-to-end web architecture & state flow" },
  { name: "React", category: "Frontend", detail: "Declarative component patterns & hooks" },
  { name: "Node.js", category: "Backend", detail: "Asynchronous runtime & server workflows" },
  { name: "REST APIs", category: "Integration", detail: "Resource design, HTTP semantics, and contracts" },
  { name: "Database Systems", category: "Data", detail: "Relational optimization & query patterns" },
  { name: "Software Engineering", category: "Methodology", detail: "Clean architecture, testing & maintainability" },
  { name: "Artificial Intelligence", category: "Emerging Tech", detail: "Academic foundational AI & machine learning concepts" },
  { name: "Secure Software Development", category: "Security", detail: "Defensive design, input validation & OWASP principles" },
  { name: "Web Application Security", category: "Security", detail: "Testing auth flows & mitigating web vulnerabilities" }
];
