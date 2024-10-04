
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


function animeScroll2() {
    const windowTop2 = window.pageYOffset + -600;
    console.log("Window Top for Down:", windowTop2); 
    targetsDown.forEach(function(element) {
        console.log("Down Element:", element); 
        if (windowTop2 > element.offsetTop) {
            element.classList.add("animation2");
        } else {
            element.classList.remove("animation2");
        }
    });
}
function animeScroll3() {
    const windowTop3 = window.pageYOffset + -3200;
    console.log("Window Top for Down:", windowTop3); 
    targetsLW.forEach(function(element) {
        console.log("Left Down Element:", element); 
        if (windowTop3 > element.offsetTop) {
            element.classList.add("animation3");
        } else {
            element.classList.remove("animation3");
        }
    });
}
function animeScroll4() {
    const windowTop4 = window.pageYOffset + -3000;
    console.log("Window Top for Down:", windowTop4); 
    targetsRU.forEach(function(element) {
        console.log("Right Up Element:", element); 
        if (windowTop4 > element.offsetTop) {
            element.classList.add("animation4");
        } else {
            element.classList.remove("animation4");
        }
    });
}

window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
    animeScroll3() ;
    animeScroll4();
});
