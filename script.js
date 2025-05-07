document.addEventListener("DOMContentLoaded", () => {
  const skillsData = [
    { name: "HTML", icon: "/assets/basic/icons/html.png" },
    { name: "CSS", icon: "/assets/basic/icons/css.png" },
    { name: "JavaScript", icon: "/assets/basic/icons/js.png" },
    { name: "Bootstrap", icon: "/assets/basic/icons/bootstrap.png" },
    { name: "React", icon: "/assets/basic/icons/react.png" },
    { name: "Git", icon: "/assets/basic/icons/git.png" },
    { name: "Java", icon: "/assets/basic/icons/java.png" },
    { name: "OOPs", icon: "/assets/basic/icons/oops.png" },
  ];

  const skillsContainer = document.getElementById("skillsContainer");

  // Function to create skill elements
  const createSkillElement = (skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill");

    skillDiv.innerHTML = `
            <img src="${skill.icon}" alt="${skill.name}" class="skill-icon" aria-label="${skill.name}" />
            <p>${skill.name}</p>
          `;
    return skillDiv;
  };

  // Dynamically Add Skills
  skillsData.forEach((skill) => {
    skillsContainer.appendChild(createSkillElement(skill));
  });

  // Clone skills for seamless looping
  skillsData.forEach((skill) => {
    skillsContainer.appendChild(createSkillElement(skill));
  });

  // Smooth Auto-Scroll Logic
  let autoScroll;
  let scrollSpeed = 10; // Default speed

  const startAutoScroll = () => {
    autoScroll = requestAnimationFrame(function scroll() {
      skillsContainer.scrollLeft += scrollSpeed;

      // Handle infinite scrolling when reaching the far right
      if (
        skillsContainer.scrollLeft + skillsContainer.clientWidth >=
        skillsContainer.scrollWidth
      ) {
        skillsContainer.scrollLeft = 0; // Reset to the start
      }

      // Handle infinite scrolling when reaching the far left
      if (skillsContainer.scrollLeft <= 0 && scrollSpeed < 0) {
        skillsContainer.scrollLeft =
          skillsContainer.scrollWidth - skillsContainer.clientWidth; // Reset to the end
      }

      autoScroll = requestAnimationFrame(scroll);
    });
  };

  const stopAutoScroll = () => {
    cancelAnimationFrame(autoScroll);
  };

  // Adjust Speed on Hover
  skillsContainer.addEventListener("mousemove", (e) => {
    const rect = skillsContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    if (mouseX < 100) {
      scrollSpeed = -20; // Faster scroll to the left
    } else if (mouseX > rect.width - 100) {
      scrollSpeed = 20; // Faster scroll to the right
    } else {
      scrollSpeed = 10; // Normal speed
    }
  });

  // Pause on Hover
  skillsContainer.addEventListener("mouseenter", stopAutoScroll);
  skillsContainer.addEventListener("mouseleave", startAutoScroll);

  // Arrow Navigation
  const scrollAmount = skillsContainer.clientWidth / 3;

  document.querySelector(".left-arrow").addEventListener("click", () => {
    stopAutoScroll();
    skillsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    setTimeout(startAutoScroll, 1000);
  });

  document.querySelector(".right-arrow").addEventListener("click", () => {
    stopAutoScroll();
    skillsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(startAutoScroll, 1000);
  });

  // Start scrolling on page load
  startAutoScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const educationEvents = [
    {
      date: "Apr 2015",
      image: "/assets/universities/apSSC.png",
      name: "School Secondary Course (SSC / Xth)",
      completion: "Apr 2015",
      studyDetails: ["Completed with 8.5 CGPA"],
      school: "Kumar's Public School",
    },
    {
      date: "Jul 2015 - Apr 2018",
      image: "/assets/universities/apSBTET.jpg",
      name: "Diploma",
      completion: "Jul 2015 - Apr 2018",
      studyDetails: ["In Civil Engineering course.", "Completed with 68.59%"],
      school: "M.R.A.G.R. govt. Polytechnic College",
      schoolImage: "/assets/institutes/MRAGR.jpg",
    },
    {
      date: "Jul 2018 - Aug 2021",
      image: "/assets/universities/JNTUK.png",
      name: "Bachelors of Technology (B.Tech)",
      completion: "Jul 2018 - Jul 2021",
      studyDetails: [
        "In Civil Engineering course.",
        "Completed with 7.22 CGPA",
      ],
      school: "Visakha Technical Campus",
      schoolImage: "/assets/institutes/Visakha Technical Campus.jpg",
    },
  ];

  const timelineContainer = document.querySelector(".timeline");

  educationEvents.forEach((event) => {
    const educationEvent = document.createElement("div");
    educationEvent.classList.add("event");
    educationEvent.setAttribute("data-date", event.date);

    educationEvent.innerHTML = `
        <div class="university-image">
          <img src="${event.image}" alt="${event.name}" />
        </div>
        <div class="event-details">
          <div class="course-name">
            ${event.name}
            <div class="courseCompletion">${event.completion}</div>
          </div>
          <div class="aboutStudy">
            <ul>${event.studyDetails
              .map((detail) => `<li>${detail}</li>`)
              .join("")}</ul>
          </div>
          <div class="courseSchool">
            ${
              event.schoolImage
                ? `<img src="${event.schoolImage}" alt="${event.school}" />`
                : ""
            }
            <p>${event.school}</p>
          </div>
        </div>
      `;

    timelineContainer.appendChild(educationEvent);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const experienceData = [
    {
      role: "Technical Support Engineer",
      company: "Innomise Technologies Pvt Ltd",
      date: "March 2024 - Present",
      companyLogo: "/assets/companies/innomise.png",
      details: [
        "Requirement Gathering: Collaborated with end-users to understand software requirements.",
        "Software Implementation: Deployed and supported E-MB software at Visakhapatnam Port Authority.",
        "User Training: Conducted training sessions for staff to adapt to new systems.",
        "Technical Communication: Acted as a bridge between developers and end-users.",
      ],
      achievements: [
        "Played a key role in the successful implementation of E-MB software.",
      ],
    },
    {
      role: "Junior Relationship Officer",
      company: "Quess (Axis Bank Ltd)",
      date: "January 2022 - March 2023",
      companyLogo: "/assets/companies/axis.png",
      details: [
        "Client Relationship Management: Cultivated relationships with car loan clients, achieving a 98% satisfaction rate.",
        "Sales & Service Optimization: Exceeded car loan sales targets by 150%.",
      ],
      achievements: [
        "Awarded 'Super Star' for generating over ₹10 Cr in car loan business.",
      ],
    },
  ];

  const timelineContainer = document.querySelector(".experience-timeline");

  experienceData.forEach((experience) => {
    const experienceEvent = document.createElement("div");
    experienceEvent.classList.add("experience");

    experienceEvent.innerHTML = `
      <div class="company-details">
        <img src="${experience.companyLogo}" alt="${experience.company}" />
        <div class="experience-role">
          <h2>${experience.role}</h2>
          <div class=" experience-date">
          <p>${experience.date}</p>
          </div>
          <h3>${experience.company}</h3>
        </div>
      </div>
      <div class="event-details">
        
        <div class="experience-details">
          <ul>${experience.details
            .map((detail) => `<li>${detail}</li>`)
            .join("")}</ul>
        </div>
        <div class="experience-achievements">
          <h4>Achievements:</h4>
          <ul>${experience.achievements
            .map((achievement) => `<li>${achievement}</li>`)
            .join("")}</ul>
        </div>
      </div>
    `;

    timelineContainer.appendChild(experienceEvent);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const projectsData = [
    {
      href: "https://vaultvista.netlify.app/",
      previewSrc: "assets/projectPreview/VaultVista.png",
      title: "Vault Vista Expense Tracker",
      description:
        "Empowering financial management with login, register, income, expense tracking, and transaction history features. Built with React, Firebase, Bootstrap, Styled-components, and Vite-React.",
    },
    {
      href: "https://e-commerce-oy6q.onrender.com",
      previewSrc: "assets/projectPreview/e-commerce.png",
      title: "E-Commerce Website",
      description:
        "A full-stack product management app using React, Node.js, and MongoDB, supporting CRUD operations and tested REST APIs.",
    },
    {
      href: "https://trackitdaily.netlify.app/",
      previewSrc: "assets/projectPreview/Task Management.png",
      title: "Track it Daily Website",
      description:
        "A full-stack task management system with React, Node.js, and MongoDB, enabling task creation, updates, status tracking, and tested REST APIs.",
    },
    {
      href: "https://manohar7730.github.io/IMDB-Clone/",
      previewSrc: "assets/projectPreview/IMDBClone.png",
      title: "IMDB-Clone",
      description:
        "Developed a movie information website and ensured seamless accessibility across various devices by applying responsive design principles.",
    },
    {
      href: "https://add-to-cart-mobile-app-2102.netlify.app/",
      previewSrc: "assets/projectPreview/AddToCartMobileApp.png",
      title: "Add-To-Cart Mobile App",
      description:
        "The Firebase Realtime Shopping List is a web app using Firebase Database for dynamic item addition and removal, providing real-time updates and collaborative management.",
    },
    {
      href: "https://manohar7730.github.io/IPOD/",
      previewSrc: "assets/projectPreview/Ipod.png",
      title: "React IPOD App",
      description:
        "The React iPod App is a nostalgic music player, recreating the classic iPod interface with a responsive touch interface, rotating click wheel, and customizable themes using React.",
    },
    {
      href: "https://weather-app-2102.netlify.app/",
      previewSrc: "assets/projectPreview/weatherApp.png",
      title: "Weather Insight App",
      description:
        "Providing real-time updates on temperature, humidity, and wind speed. The intuitive and visually appealing interface ensures a seamless user experience for staying informed about weather conditions.",
    },

    {
      href: "https://blackjack-game-2102.netlify.app/",
      previewSrc: "assets/projectPreview/BlackJackGame.png",
      title: "BlackJack Game",
      description:
        "In this game, players aim to achieve a card sum close to 21 without exceeding it, with dynamic player statistics and restrictions on the maximum number of games allowed.",
    },

    {
      href: "https://github.com/Manohar7730/LeadsTracker-ChromeExtension",
      previewSrc: "assets/projectPreview/Chrome-Extension.png",
      title: "Leads Tracker Chrome Extension",
      description:
        "This JavaScript code serves as a concise bookmark management extension, capturing and storing the current tab URL on button click. It displays clickable bookmarks and allows users to clear all with a double-click.",
    },
  ];

  const displayProjects = (projectsData) => {
    const projectsContainer = document.querySelector(".projects-tiles");

    projectsData.forEach((project) => {
      const projectTile = document.createElement("a");
      projectTile.href = project.href;
      projectTile.target = "_blank";
      projectTile.classList.add("project-tile");

      projectTile.innerHTML = `
              <div class="preview">
                <img src="${project.previewSrc}" alt="${project.title} Project Preview" />
              </div>
              <div class="about">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
              </div>
            `;

      projectsContainer.appendChild(projectTile);
    });
  };

  displayProjects(projectsData);
});
