// Projects Data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "Full-stack online shopping platform with payment integration",
        image: "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        demo: "#",
        code: "#"
    },
    {
        title: "Task Manager App",
        description: "Collaborative task management web application",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        demo: "#",
        code: "#"
    },
    {
        title: "Social Media Dashboard",
        description: "Analytics dashboard with real-time metrics",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        demo: "#",
        code: "#"
    },
    {
        title: "Blog Platform",
        description: "Modern CMS for content creators",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        demo: "#",
        code: "#"
    }
];

// Initialize Projects
function initProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-links">
                    <a href="${project.demo}" class="project-link">Live Demo</a>
                    <a href="${project.code}" class="project-link">View Code</a>
                </div>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Set Current Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    
    // Add scroll animation to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Handle scroll events
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        document.documentElement.style.setProperty('--scroll', `${scrolled}px`);
    });
});

// Handle project card visibility
observer.observe = function(target) {
    target.style.opacity = '1';
    target.style.transform = 'translateY(0)';
};