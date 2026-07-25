// Central content file for the portfolio.
// Edit values here to update the site — no need to touch component markup.

export const personal = {
  name: "Vijay R",
  firstName: "Vijay",
  role: "Aspiring Java Developer",
  tagline: "Java Developer | Data & ML Enthusiast",
  location: "The Nilgiris, Tamil Nadu, India",
  email: "vijayjai316@gmail.com",
  phone: "+91 9025233781",
  linkedin: "https://www.linkedin.com/in/vijay-r-099520324",
  github: "https://github.com/Vijay79055",
  resumeUrl: "/resume/Vijay-R-Resume.pdf",
  objective:
    "Aspiring Java developer with a strong foundation in Java, object-oriented programming, Python, and software development principles. I enjoy solving problems with code and I'm looking for an entry-level software development role where I can build efficient, scalable applications while continuing to learn new technologies in a collaborative, innovation-driven team.",
  aboutParagraphs: [
    "I'm Vijay, a final-year B.Tech Information Technology student at Dr. Mahalingam College of Engineering and Technology, Pollachi (Anna University, Chennai), holding an 8 CGPA through my sixth semester.",
    "My core strength is Java and object-oriented programming, and I've built that out with Python, SQL, and hands-on data work — cleaning and visualizing data with Power BI, and applying machine learning basics like regression and classification with Scikit-learn. I got a taste of applying these skills professionally during a software development internship at Ascentz Technologies, where I built dashboards to track business KPIs.",
    "I like projects that combine practical software engineering with a bit of AI — from a movie recommendation engine to an AI chatbot and a news summarizer. I communicate clearly, think analytically when debugging or tracing a root cause, and I'm looking for an entry-level opportunity to keep growing as a developer.",
  ],
};

export const skills = {
  programming: [
    { name: "Java" },
    { name: "Python" },
    { name: "SQL" },
  ],
  tools: [
    { name: "Power BI" },
    { name: "Git" },
    { name: "MySQL" },
    { name: "Scikit-learn" },
  ],
  interests: [
    "Data Science & Analytics",
    "Data Visualization",
    "Machine Learning",
    "Predictive Modeling",
    "Interactive Dashboards",
  ],
  soft: ["Communication", "Problem-Solving", "Analytical Thinking", "Root Cause Analysis"],
};

export const projects = [
  {
    id: "cinemind",
    title: "CineMind — Movie Recommendation System",
    period: "Dec 2025 – Jan 2026",
    description:
      "A content-based movie recommendation engine that suggests films tailored to a user's preferences, paired with live movie data for a polished, interactive experience.",
    features: [
      "Content-based filtering using TF-IDF vectorization and cosine similarity",
      "Real-time movie metadata and poster retrieval via the TMDB API",
      "Interactive, user-friendly recommendation flow",
    ],
    tech: ["Python", "TF-IDF", "Cosine Similarity", "TMDB API"],
    github: "https://github.com/Vijay79055",
    demo: "",
  },
  {
    id: "student-chatbot",
    title: "Student Consultant — AI Chatbot",
    period: "Jan 2025 – Mar 2025",
    description:
      "An AI chatbot built to support students with academic consulting, refined through peer-tested feedback to improve response quality over time.",
    features: [
      "React frontend paired with a Java backend",
      "Handles academic consulting queries for students",
      "Iteratively refined using peer-tested feedback to boost response efficiency",
    ],
    tech: ["React", "Java", "Chatbot Design"],
    github: "https://github.com/Vijay79055",
    demo: "",
  },
  {
    id: "ai-news-summarizer",
    title: "AI News Summarizer",
    period: "Jul 2025 – Aug 2025",
    description:
      "An AI-powered web application that condenses lengthy news articles into concise, readable summaries using natural language processing.",
    features: [
      "Automatic summarization of long-form news articles",
      "NLP-driven text processing for concise, readable output",
      "Web application interface for quick access to summaries",
    ],
    tech: ["Python", "NLP"],
    github: "https://github.com/Vijay79055",
    demo: "",
  },
];

export const internship = {
  role: "Software Development Intern",
  company: "Ascentz Technologies",
  location: "Coimbatore",
  duration: "11 Jun – 27 Jun 2025",
  points: [
    "Worked on data collection, cleaning, and visualization using Excel and Python",
    "Created interactive dashboards to monitor business KPIs",
  ],
};

export const education = [
  {
    degree: "Bachelor of Technology — Information Technology",
    school: "Dr. Mahalingam College of Engineering and Technology, Pollachi (Anna University, Chennai)",
    duration: "2023 – 2027",
    detail: "CGPA: 8.0 (through 6th semester)",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    school: "Alpha G.K Matriculation Higher Secondary School, Aravenu, The Nilgiris",
    duration: "2022 – 2023",
    detail: "Percentage: 83.5%",
  },
  {
    degree: "SSLC",
    school: "Alpha G.K Matriculation Higher Secondary School, Aravenu, The Nilgiris",
    duration: "2019 – 2020",
    detail: "Result: Pass",
  },
];

export const certifications = [
  {
    title: "Java Certification",
    org: "SimpleLearn",
    duration: "May 2025 – Jul 2025",
  },
  {
    title: "Data Analyst Training",
    org: "Ascentz Technology",
    duration: "",
  },
];

export const achievements = [
  "Winner, Inter-College Poster Making Competition for World Environment Day (September 2024)",
  "Certified in Java",
];

export const extracurricular = [
  "Member, National Service Scheme (NSS) — Jan 2024 to Jan 2025",
  "Volunteered at a Road Safety event organized by RTO Pollachi",
];
