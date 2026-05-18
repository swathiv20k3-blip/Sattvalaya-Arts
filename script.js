// loading screen

window.addEventListener("load", function () {
    setTimeout(function () {
        const loader = document.getElementById("loader");
        const mainContent = document.getElementById("main-content");

        if (loader) {
            loader.classList.add("hide-loader");

            setTimeout(function () {
                loader.style.display = "none";
            }, 600);
        }

        if (mainContent) {
            mainContent.style.display = "block";
        }
    }, 3000);
});

// hamburger
const menuToggle = document.getElementById("menuToggle");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

// OPEN MENU

menuToggle.onclick = () => {

mobileSidebar.classList.add("active");
menuOverlay.classList.add("active");

};

// CLOSE BUTTON

closeMenu.onclick = () => {

mobileSidebar.classList.remove("active");
menuOverlay.classList.remove("active");

};

// CLOSE OVERLAY

menuOverlay.onclick = () => {

mobileSidebar.classList.remove("active");
menuOverlay.classList.remove("active");

};



const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlides(){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    currentSlide++;

    if(currentSlide > slides.length - 1){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

/* CHANGE SLIDE EVERY 4 SECONDS */

setInterval(showSlides,4000);


/* Counting */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

    const target = +counter.getAttribute('data-target');

    const current = +counter.innerText;

    const increment = target / 100;

    if(current < target){

    counter.innerText = `${Math.ceil(current + increment)}`;

    setTimeout(updateCounter, 25);

    } else {

    counter.innerText = target + '+';

    }
};

updateCounter();

});

// gallery

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

    // remove active class
    filterButtons.forEach(btn => {
        btn.classList.remove("active");
    });

    // add active class
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    galleryItems.forEach(item => {

        if(filterValue === "all"){

        item.classList.remove("hide");

        } else {

        if(item.classList.contains(filterValue)){

            item.classList.remove("hide");

        } else {

            item.classList.add("hide");
        }
        }
    });

    });

});


