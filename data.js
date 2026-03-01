// Portfolio Data - Update everything here
const portfolioData = {
  // Personal Info
  personal: {
    name: "Manohar Pediredla",
    title:
      "Junior Software Engineer | MERN Stack Developer | Application Support Engineer",
    email: "manoharpediredla2@gmail.com",
    phone: "+91 7989655205",
    location: "Visakhapatnam, India",
  },

  // Navigation (Removed Media, Canvas, Details)
  navigation: [
    { text: "Home", href: "#hero" },
    { text: "About", href: "#about" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    title: "Manohar Pediredla",
    subtitle:
      "Junior Software Engineer | MERN Stack Developer | Application Support Engineer",
    description:
      "I build secure full-stack web applications using React, Node.js, and MongoDB while supporting enterprise production systems used by 300+ users. Passionate about solving real-world problems through scalable web applications.Currently open to Junior Software Engineer and MERN Stack opportunities.",
    buttons: [
      { text: "View Projects", href: "#projects", class: "btn" },
      {
        text: "Download Resume",
        href: "assets/images/Manohar_Pediredla_MERN_Stack_dev.pdf",
        class: "btn",
      },
      { text: "Contact Me", href: "#contact", class: "btn" }
    ],
  },

  // About Section
  about: {
    title: "About Me",
    image: "assets/images/profile.png",
    description: [
      "Application Support Engineer with 2+ years of experience supporting enterprise web applications used by 300+ users in production environments.",

      "Hands-on MERN Stack Developer building full-stack applications using React.js, Node.js, Express.js, and MongoDB with authentication and role-based access control.",

      "My production support experience gives me strong understanding of debugging, user workflows, and real software delivery beyond coding alone. Currently pursuing MCA and actively seeking Junior Software Engineer or MERN Stack opportunities.",
    ],
  },

  // Education
  education: [
    {
      degree: "Master of Computer Application",
      degreeShort: "M.C.A.",
      university: "Andhra University",
      universityShort: "A.U.",
      year: "2024 - 2026",
      grade: "6.8 GPA (currently pursuing)",
    },
    {
      degree: "Bachelor of Civil Engineering",
      degreeShort: "B.Tech.",
      university: "Jawaharlal Nehru Technological University, Kakinada",
      universityShort: "JNTUK",
      year: "2018 - 2021",
      grade: "7.22 GPA",
    },
    {
      degree: "Diploma in Civil Engineering",
      degreeShort: "Diploma",
      university: "Maharaja Anandha Gajapathi Raju govt. polytechnic",
      universityShort: "M.R.A.G.R. govt. polytechnic",
      year: "2015 - 2018",
      grade: "68.5%",
    },
  ],

  // Skills
  skills: [
    { name: "HTML", icon: "assets/skills/html.png" },
    { name: "CSS", icon: "assets/skills/css.png" },
    { name: "JavaScript", icon: "assets/skills/js.png" },
    { name: "React", icon: "assets/skills/react.png" },
    { name: "Node.js", icon: "assets/skills/node-js.png" },
    { name: "REST APIs", icon: "assets/skills/api.png" },
    { name: "JWT Authentication", icon: "assets/skills/jwt.png" },
    { name: "Application Support", icon: "assets/skills/support.png" },
    { name: "Python", icon: "assets/skills/python.png" },
    { name: "Java", icon: "assets/skills/java.png" },
    { name: "MySQL", icon: "assets/skills/mysql.png" },
    { name: "Git", icon: "assets/skills/git.png" },
    { name: "MongoDB", icon: "assets/skills/mongodb.png" },
    { name: "Express", icon: "assets/skills/express.png" },
    { name: "Redux", icon: "assets/skills/redux.png" },
    { name: "Bootstrap", icon: "assets/skills/bootstrap.png" },
    { name: "Postman", icon: "assets/skills/postman.png" },
    { name: "FireBase", icon: "assets/skills/Firebase.png" },
    { name: "Tailwind.css", icon: "assets/skills/Tailwind CSS.png" },
  ],

  // Experience - Updated with technical focus
  experience: [
    {
      title: "Technical Support Engineer",
      company: "Innomise Technologies pvt. ltd.",
      duration: "2024 - Present",
      points: [
        "Provided L2 application support for enterprise web application serving 300+ government users.",
        "Validated React UI modules and Node.js APIs during staging and production releases.",
        "Performed REST API testing using Postman to verify request/response workflows.",
        "Investigated production issues and collaborated with developers to validate fixes.",
        "Conducted user onboarding, demos, and training sessions improving system adoption.",
      ],
    },
  ],

  projects: [
    {
      name: "Role-Based Access Control (RBAC) Platform",
      description:
        "Full-stack MERN application implementing JWT authentication, role-based authorization, protected APIs, and admin dashboard similar to enterprise SaaS systems.",
      image: "assets/project-previews/rbac.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "JWT",
        "Redux",
        "Tailwind.CSS",
      ],
      github: "https://github.com/Manohar7730/Role-Base-Access-Controller",
      liveDemo: "https://rolebasedcontrol.netlify.app/",
    },
    {
      name: "TaskHub V1.0",
      description:
        "A Production-Ready MERN Project Manager-including authentication, OTP verification, project/task workflows, file handling, and a clean single-user experience.",
      image: "assets/project-previews/TaskHub-V1.png",
      technologies: ["React", "Tailwind", "Node", "Express", "MongoDB"],
      github: "https://github.com/Manohar7730/taskhub",
      liveDemo: "https://taskub.netlify.app/",
    },
    {
      name: "Job Tracker",
      description:
        "Full-stack job application tracking system with Firebase authentication and real-time management.",
      image: "assets/project-previews/job-tracker.jpg",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      github: "https://github.com/Manohar7730/job-tracker",
      liveDemo: "https://jobprogress.netlify.app/",
    },
    {
      name: "Vault Vista Expense Tracker",
      description:
        "Comprehensive financial tracking application with real-time calculations and analytics.",
      image: "assets/project-previews/Vault-Vista.png",
      technologies: ["React", "Firebase", "CSS3", "JavaScript"],
      github: "https://github.com/Manohar7730/Expense_Tracker-Vault-Vista-",
      liveDemo: "https://vaultvista.netlify.app/",
    },
    {
      name: "Habit Tracker Fullstack",
      description:
        "Complete habit tracking system with user authentication and MongoDB database integration.",
      image: "assets/project-previews/habit-tracker.png",
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/Manohar7730/habit-tracker-fullstack",
      liveDemo: "https://habit-tracker-cx1z.onrender.com/",
    },
    {
      name: "URL Shortener",
      description:
        "Full-stack URL shortening platform with user authentication and analytics dashboard.",
      image: "assets/project-previews/url-shortener.png",
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      github: "https://github.com/Manohar7730/URL_shortener",
      liveDemo: "https://url-shortener-aey6.onrender.com/",
    },
    {
      name: "Task Management",
      description:
        "Collaborative task management application with real-time updates and team collaboration.",
      image: "assets/project-previews/Task-list.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Manohar7730/Task-Management",
      liveDemo: "https://trackitdaily.netlify.app/",
    },
    {
      name: "E-Commerce API",
      description:
        "Full-featured e-commerce platform with product management and secure payment integration.",
      image: "assets/project-previews/E-Commerce.png",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Manohar7730/E-Commerce_api",
      liveDemo: "https://e-commerce-oy6q.onrender.com/",
    },
  ],

  // Social Links
  social: [
    {
      name: "GitHub",
      url: "https://github.com/Manohar7730",
      icon: "assets/icons/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manoharpediredla/",
      icon: "assets/icons/linkedin.png",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Manohar7730",
      icon: "assets/icons/twitter.png",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@manohar_pediredla",
      icon: "assets/icons/youtube.png",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/manohar_pediredla",
      icon: "assets/icons/instagram.png",
    },
    {
      name: "Resume",
      url: "assets/images/Manohar_Pediredla_MERN_Stack_dev.pdf",
      icon: "assets/icons/downloads.png",
      download: true,
    },
    {
      name: "Email",
      url: "mailto:manoharpediredla2@gmail.com",
      icon: "assets/icons/email.png",
    },
    {
      name: "Phone",
      url: "tel:+917989655205",
      icon: "assets/icons/phone-call.png",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/917989655205",
      icon: "assets/icons/whatsapp.png",
    },
    {
      name: "Telegram",
      url: "https://t.me/_ma_n_o_h_a_r_",
      icon: "assets/icons/telegram.png",
    },
  ],
};
