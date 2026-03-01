// Initialize Portfolio with Data
function initializePortfolio() {
  loadNavigation();
  loadHeroSection();
  loadAboutSection();
  loadEducation();
  loadSkills();
  loadExperience();
  loadProjects();
  loadSocialLinks();

  // Initialize existing functionality (only contact form and navigation)
  initializeExistingFeatures();
}

// Load Navigation
function loadNavigation() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.innerHTML = portfolioData.navigation
    .map((item) => `<li><a href="${item.href}">${item.text}</a></li>`)
    .join("");
}

// Load Hero Section
function loadHeroSection() {
  const hero = portfolioData.hero;
  const heroSection = document.querySelector(".hero-content");

  heroSection.innerHTML = `
    <h1>${hero.title}</h1>
    <h2 class="hero-subtitle">${hero.subtitle}</h2>
    <p>${hero.description}</p>
    <div class="hero-buttons">
      ${hero.buttons
        .map(
          (btn) => `<a href="${btn.href}" class="${btn.class}">${btn.text}</a>`,
        )
        .join("")}
    </div>
  `;
}

// Load About Section
function loadAboutSection() {
  const about = portfolioData.about;
  const aboutSection = document.querySelector(".about-content");

  aboutSection.innerHTML = `
    <div class="about-image">
      <img src="${about.image}" alt="Manohar Profile Picture" />
    </div>
    <div class="about-text">
      ${about.description.map((para) => `<p>${para}</p>`).join("")}
    </div>
  `;
}

// Load Education Section
function loadEducation() {
  const educationTable = document.querySelector(".education-table tbody");

  educationTable.innerHTML = portfolioData.education
    .map(
      (edu) => `
    <tr>
      <td>${edu.degree} <span>${edu.degreeShort}</span></td>
      <td>${edu.university} <span>${edu.universityShort}</span></td>
      <td>${edu.year}</td>
      <td>${edu.grade}</td>
    </tr>
  `,
    )
    .join("");
}

// Load Skills Section
function loadSkills() {
  const skillsList = document.querySelector(".skills-list");

  skillsList.innerHTML = portfolioData.skills
    .map(
      (skill) => `
    <li>
      <span>${skill.name}</span>
      <img src="${skill.icon}" alt="${skill.name} Icon" />
    </li>
  `,
    )
    .join("");
}

// Load Experience Section
function loadExperience() {
  const experienceContainer = document.querySelector(".experience .container");
  // Remove any previously injected items (keep the h2)
  experienceContainer.querySelectorAll(".experience-item").forEach(el => el.remove());

  const html = portfolioData.experience
    .map(
      (exp) => `
    <article class="experience-item">
      <h3>${exp.title}</h3>
      <h4>${exp.company}</h4>
      <p>Duration: ${exp.duration}</p>
      <ul>
        ${exp.points.map((point) => `<li><p>${point}</p></li>`).join("")}
      </ul>
    </article>
  `
    )
    .join("");

  experienceContainer.insertAdjacentHTML("beforeend", html);
}

// Load Projects Section
function loadProjects() {
  const projectsGrid = document.querySelector(".projects-grid");

  projectsGrid.innerHTML = portfolioData.projects
    .map(
      (project) => `
    <article class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.name} Screenshot" />
      </div>
      <div class="project-details">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank">
            <img src="assets/icons/github.png" alt="GitHub Icon" />
            <span>GitHub</span>
          </a>
          <a href="${project.liveDemo}" target="_blank">
            <img src="assets/icons/external-link.png" alt="Live Demo Icon" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  `,
    )
    .join("");
}

// Load Social Links
function loadSocialLinks() {
  const socialLinks = document.querySelector(".social-links");

  socialLinks.innerHTML = portfolioData.social
    .map(
      (social) => `
    <li>
      <a 
        href="${social.url}" 
        ${social.download ? "download" : 'target="_blank"'} 
        aria-label="${social.name}"
      >
        <img src="${social.icon}" alt="${social.name} Icon" />
      </a>
    </li>
  `,
    )
    .join("");
}

// Initialize existing features (only essential features)
function initializeExistingFeatures() {
  // --- Initialize EmailJS ---
  emailjs.init({ publicKey: "TCvyjLwaMZolWGiLo" });

  // --- Hamburger Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // --- Highlight Navbar on Scroll ---
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    // Header scroll effect
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // --- Contact Form ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all required fields!");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        return;
      }

      // Send email using EmailJS v4
      emailjs
        .sendForm("service_v41rt9h", "template_kon4whc", contactForm)
        .then(() => {
          alert("Message sent successfully!");
          contactForm.reset();
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to send message.");
        });
    });

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  }

}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializePortfolio);
