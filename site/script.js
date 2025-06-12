// script.js

document.addEventListener('DOMContentLoaded', () => {

    // 1. Custom Cursor
    const customCursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });
    document.addEventListener('mousedown', () => {
        customCursor.classList.add('clicked');
    });
    document.addEventListener('mouseup', () => {
        customCursor.classList.remove('clicked');
    });

    // 2. Typing Animation for Hero Section
    const typingElement = document.querySelector('.typing-animation');
    const textToType = "Soham Dhara";
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 150);
        } else {
            // Optional: You can make it delete and retype or just stop
        }
    }
    typeText();

    // 3. Navbar Toggle for Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close navbar when a link is clicked (for mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // 4. Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target);
            } else {
                // entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // 5. Skill Bar Animations
    const skillProgressBars = document.querySelectorAll('.progress-bar');
    const skillsSection = document.getElementById('skills');

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillProgressBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = `${progress}%`;
                });
                observer.unobserve(skillsSection);
            }
        });
    }, {
        threshold: 0.5
    });
    skillObserver.observe(skillsSection);


    // 6. Project Modal Functionality
    const projectModal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    const projectsData = [
        {
            id: 1,
            title: "Hosted a Static Website on AWS",
            image: "project-website-aws-full.jpg",
            description: "This project involved leveraging Amazon Simple Storage Service (S3) to host static website files (HTML, CSS, images) and configuring AWS Identity and Access Management (IAM) to control who can modify or view the S3 bucket.",
            link: "" // Removed from UI, but kept here for data structure consistency
        },
        {
            id: 2,
            title: "RESTful To-Do List API Development",
            image: "project-todolist-full.jpg",
            description: "Developed a robust RESTful To-Do List API using Java and Spring Boot. The backend utilized Spring Data JPA for database interaction and H2 Database for efficient data management. Postman was used for API testing and Maven for project build automation.",
            link: "" // Removed from UI
        },
        {
            id: 3,
            title: "Sarnaash PDF Reader",
            image: "project-pdfreader-full.jpg",
            description: "A PDF reader application built with StreamLit for the user interface, LangChain for language model integration, and ChromaDB for efficient data storage and retrieval. This project demonstrates capabilities in modern data handling and UI development.",
            link: "" // Removed from UI
        },
        {
        id: 4,
                    title: "Static Website Deployment using Docker and Nginx",
                    image: "project-pdfreader-full.jpg",
                    description: "Created a Docker container to serve a static portfolio website using Nginx as the web server. Packaged the website (HTML, CSS, JS) into an image and deployed it using Docker.Demonstrated understanding of containerization, static site hosting, and web server configuration.",
                    link: "" // Removed from UI
        }

    ];

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = parseInt(button.closest('.project-card').dataset.projectId);
            const project = projectsData.find(p => p.id === projectId);

            if (project) {
                document.getElementById('modal-project-title').textContent = project.title;
                document.getElementById('modal-project-image').src = project.image;
                document.getElementById('modal-project-description').textContent = project.description;
                // Removed the line that sets the link:
                // document.getElementById('modal-project-link').href = project.link;
                projectModal.style.display = 'flex';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == projectModal) {
            projectModal.style.display = 'none';
        }
    });

    // 7. Dark/Light Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
        }
    });

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
    } else {
        themeToggleBtn.textContent = '🌙';
    }
});