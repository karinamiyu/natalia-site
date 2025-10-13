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

function copiarTexto() {
    // pega o conteúdo do parágrafo
    const texto = document.getElementById("texto").innerText;

    // usa a API moderna de clipboard
    navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado para a área de transferência!");
    }).catch(err => {
    console.error("Erro ao copiar: ", err);
    });
}

const duvidas = document.querySelectorAll('.duvida');

duvidas.forEach(duvida => {
  duvida.addEventListener('click', () => {
    const content = duvida.nextElementSibling;
    
    if (content.style.maxHeight) {
      // fecha
      content.style.maxHeight = null;
      duvida.classList.remove('active'); // remove rotação
    } else {
      // abre
      content.style.maxHeight = content.scrollHeight + "px";
      duvida.classList.add('active'); // aplica rotação
    }
  });
});
