document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar'); // Find the navbar
    const modeToggle = document.createElement('div');
    const icon = document.createElement('i');

    // Styling for the toggle icon
    modeToggle.id = 'mode-toggle';
    modeToggle.style.display = 'flex';
    modeToggle.style.alignItems = 'center';
    modeToggle.style.justifyContent = 'center';
    modeToggle.style.cursor = 'pointer';
    modeToggle.style.padding = '10px';
    modeToggle.style.marginLeft = 'auto'; // Push the toggle to the right
    modeToggle.style.color = '#fff';

    // Default icon state
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }

    modeToggle.appendChild(icon);
    navbar.appendChild(modeToggle); // Append to navbar

    // Add event listener for toggling theme
    modeToggle.addEventListener('click', () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        if (isLightMode) {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });
});

// CSS Injection for light mode
const style = document.createElement('style');
style.textContent = `
    body.light-mode {
        background: #f0f0f0;
        color: #000;
    }
    body.light-mode .navbar {
        background: #fff;
    }
    body.light-mode .navbar a {
        color: #000;
    }
    body.light-mode .navbar a:hover {
        color: #00abf0;
    }
`;
document.head.appendChild(style);

// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// });
