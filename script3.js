const targetsRight = document.querySelectorAll('[data-anime="right"]');
const targetsRight2 = document.querySelectorAll('[data-anime="right2"]');

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
    const windowTop2 = window.pageYOffset + +800;
    console.log("Window Top:", windowTop2); 
    targetsRight2.forEach(function(element) {
        console.log("Right Element:", element); 
        if (windowTop2 > element.offsetTop) {
            element.classList.add("animation");
        } else {
            element.classList.remove("animation");
        }
    });
}




window.addEventListener('scroll', function() {
    animeScroll();
    animeScroll2();
    
});
