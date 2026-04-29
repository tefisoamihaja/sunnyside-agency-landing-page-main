const btn = document.getElementById('hamburger');
const nav = document.querySelector('.nav-links');

btn.addEventListener('click', () => {
    // Si le menu est caché, on l'affiche en flex, sinon on le cache
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});
