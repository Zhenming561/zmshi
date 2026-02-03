// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const navToggle = document.createElement('button');
avnToggle.className = 'nav-toggle';
avnToggle.innerHTML = '☰';
avToggle.style.display = 'none';

const navbar = document.querySelector('.navbar .container');
const navMenu = document.querySelector('.nav-menu');

if (navbar && navMenu) {
    navbar.insertBefore(navToggle, navMenu);
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Responsive navigation for mobile
function checkWidth() {
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
    } else {
        navToggle.style.display = 'none';
        navMenu.classList.remove('active');
    }
}

window.addEventListener('resize', checkWidth);
checkWidth();