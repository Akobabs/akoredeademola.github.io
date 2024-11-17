// Dynamic data simulation
const skills = [
    "Python", "JavaScript", "Django", "React", "Machine Learning", 
    "Data Visualization", "Leadership", "SQL", "Cybersecurity"
];

const projects = [
    { title: "Lung Cancer Detection", link: "#" },
    { title: "Brain Stroke Prediction", link: "#" },
    { title: "Private Cloud Deployment", link: "#" }
];

// Populate Skills
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.textContent = skill;
    skillItem.style.padding = "10px";
    skillItem.style.border = "1px solid #ccc";
    skillItem.style.borderRadius = "5px";
    skillsList.appendChild(skillItem);
});

// Populate Projects
const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<a href="${project.link}" target="_blank">${project.title}</a>`;
    projectItem.style.padding = "10px";
    projectItem.style.border = "1px solid #ccc";
    projectItem.style.borderRadius = "5px";
    projectsList.appendChild(projectItem);
});

// Contact form submission (stub)
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("Message sent! (Simulated)");
});
