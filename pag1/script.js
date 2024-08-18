const target = document.querySelectorAll('[data-anime]');
const animationClass = "animation";
function animeScroll() {
    const windowTop1 = window.pageYOffset + 100;
    target.forEach(function(element){
        if(windowTop1 > element.offsetTop){
            element.classList.add("animation");
        }
        else{
            element.classList.remove("animation");
        }
    })

}
window.addEventListener('scroll', function(){
    animeScroll();
})