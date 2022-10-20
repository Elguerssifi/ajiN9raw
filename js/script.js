
document.querySelector("body").style.overflow="hidden";

window.addEventListener("load", () => {
    /*------------- Page Loader --------------*/
    setTimeout( () => {
        document.querySelector(".presentation").classList.add("translate");
        document.querySelector(".home-section").classList.add("loading");
        document.querySelector("nav").classList.add("loading");
    },500);
    setTimeout( () =>{
        document.querySelector("body").style.overflow="visible";    
    },3100);
    /*------------- *Scrool Animation --------------*/
    AOS.init();
});

/* =============
NavToggler
================*/
let navToggle = document.querySelector(".nav-toggler");
let LinkItem = document.querySelector(".link-items");

navToggle.addEventListener("click" , navFunction);

function navFunction () {
    navToggle.classList.toggle("open");
    LinkItem.classList.toggle("open");
    if(navToggle.classList.contains("open")){
        document.querySelector("body").style.overflow="hidden";
    }
    else{
        document.querySelector("body").style.overflow="visible";
    }
};
document.addEventListener("click", (e) => {
    if(e.target.closest(".link-items")){
        navFunction();
        document.querySelector("body").style.overflow="visible";
    }
});
/* =============
About Image Slider
================*/
let slides = document.querySelectorAll(".slide");

// Auto Play Slide
let repeat = () => {
    let active = document.getElementsByClassName("active");
    let i = 1;

    let repeater = () => {
        setTimeout( () =>{
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove("active");
            });
            slides[i].classList.add("active");
            i++;
            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        },4000);
    };
    repeater();
}
repeat();