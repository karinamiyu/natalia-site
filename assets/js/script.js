document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

const links = document.querySelectorAll('.menu-links a');
const menuHeight = document.querySelector('.menu').offsetHeight;

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + menuHeight + 10; // 10px de folga

    links.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

document.getElementById('year').textContent = new Date().getFullYear();