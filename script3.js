const targetsRight = document.querySelectorAll('[data-anime="right"]');
const targetsDown = document.querySelectorAll('[data-anime="down"]');
const targetsLW = document.querySelectorAll('[data-anime="LW"]');
const targetsRU = document.querySelectorAll('[data-anime="RU"]');

function animeScroll() {
    const windowTop = window.pageYOffset + 170;
    console.log("Window Top:", windowTop); 
    targetsRight.forEach(function(element) {
        console.log("Right Element:", element); 
        if (windowTop > element.offsetTop) {
            element.classList.add("animation");
        } else {
            element.classList.remove("animation");
        }
    });
}



window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
    animeScroll3() ;
    animeScroll4();
});
