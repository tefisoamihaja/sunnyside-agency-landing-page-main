const btn = document.getElementById('hamburger');
const nav = document.querySelector('.nav-links');

btn.addEventListener('click', () => {

    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});

function updateImages() {
    const isMobile = window.innerWidth <= 768;

    const images = {
        '.service1 img': 'image-graphic-design.jpg',
        '.service2 img': 'image-photography.jpg',
        'header': 'image-header.jpg' 
    };

    for (const [selector, fileName] of Object.entries(images)) {
        const el = document.querySelector(selector);
        if (el) {
            const path = isMobile ? 'mobile' : 'desktop';
            if (selector === 'header') {
                el.style.backgroundImage = `url('./images/${path}/${fileName}')`;
            } else {
                el.src = `./images/${path}/${fileName}`;
            }
        }
    }
    if (!isMobile) {
        nav.style.display = ''; 
    }
}

window.addEventListener('resize', updateImages);
window.addEventListener('DOMContentLoaded', updateImages); 
