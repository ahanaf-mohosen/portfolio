// Projects Data (6 Projects)
const projects = [
    {
        title: "Student Management System",
        description: "C# application for managing student records",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-stack online shopping system",
        image: "https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        title: "Library Database",
        description: "MySQL database management system",
        image: "https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        "title": "Task Manager Pro",
        "description": "A productivity app built with .NET and Blazor",
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        title: "Portfolio Website",
        description: "Responsive personal portfolio site",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
    },
    {
        title: "Linux Automation",
        description: "Bash scripting for system automation",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

// Skills Data
const skills = [
    {
        category: "Programming Languages",
        items: [
            { name: "C", icon: "fas fa-code", level: "proficient" },
            { name: "C#", icon: "fas fa-code", level: "proficient" },
            { name: "MySQL", icon: "fas fa-database", level: "proficient" },
            { name: "HTML5", icon: "fab fa-html5", level: "proficient" },
            { name: ".NET", icon: "fab fa-windows", level: "learning" }
        ]
    },
    {
        category: "Operating Systems",
        items: [
            { name: "Windows", icon: "fab fa-windows", level: "familiar" },
            { name: "Linux", icon: "fab fa-linux", level: "familiar" }
        ]
    },
    {
        category: "Software & Tools",
        items: [
            { name: "Microsoft Office", icon: "fas fa-file-word", level: "experienced" },
            { name: "Linux Terminal", icon: "fas fa-terminal", level: "familiar" },
            { name: "Troubleshooting", icon: "fas fa-tools", level: "familiar" }
        ]
    }
];

// Initialize Projects
function initProjects() {
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-overlay">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Initialize Skills
function initSkills() {
    const container = document.getElementById('skills-container');
    
    skills.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skills-category';
        
        categoryDiv.innerHTML = `
            <h3 class="category-title">${category.category}</h3>
            <div class="skills-grid"></div>
        `;
        
        const grid = categoryDiv.querySelector('.skills-grid');
        category.items.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <i class="${skill.icon} skill-icon"></i>
                <h4>${skill.name}</h4>
                <span class="skill-level level-${skill.level}">${skill.level}</span>
            `;
            grid.appendChild(skillCard);
        });
        
        container.appendChild(categoryDiv);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initProjects();
    initSkills();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});