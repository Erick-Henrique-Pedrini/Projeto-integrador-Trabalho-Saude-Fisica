// Seleciona os elementos que serão animados
const targetsRight = document.querySelectorAll('[data-anime="right"]');
const targetsDown = document.querySelectorAll('[data-anime="down"]');

// Função para animar os elementos da esquerda para a direita
function animeScroll() {
    const windowTop = window.pageYOffset + 170;
    console.log("Window Top:", windowTop); // Debugging
    targetsRight.forEach(function(element) {
        console.log("Right Element:", element); // Debugging
        if (windowTop > element.offsetTop) {
            element.classList.add("animation");
        } else {
            element.classList.remove("animation");
        }
    });
}

// Função para animar os elementos de cima para baixo
function animeScroll2() {
    const windowTop2 = window.pageYOffset + -600;
    console.log("Window Top for Down:", windowTop2); // Debugging
    targetsDown.forEach(function(element) {
        console.log("Down Element:", element); // Debugging
        if (windowTop2 > element.offsetTop) {
            element.classList.add("animation2");
        } else {
            element.classList.remove("animation2");
        }
    });
}

// Adiciona o event listener para o evento scroll
window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
});
