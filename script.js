document.addEventListener("DOMContentLoaded", function() {
    // Women Popup Elements
    const womenPopup = document.getElementById("women-popup");
    const womenLink = document.getElementById("women-link");
    const closeWomen = document.querySelector(".close-women");

    // Men Popup Elements
    const menPopup = document.getElementById("men-popup");
    const menLink = document.getElementById("men-link");
    const closeMen = document.querySelector(".close-men");

    // Show Women Popup
    womenLink.addEventListener("click", function(event) {
        event.preventDefault();
        womenPopup.style.display = "flex";
    });

    // Close Women Popup
    closeWomen.addEventListener("click", function() {
        womenPopup.style.display = "none";
    });

    // Show Men Popup
    menLink.addEventListener("click", function(event) {
        event.preventDefault();
        menPopup.style.display = "flex";
    });

    // Close Men Popup
    closeMen.addEventListener("click", function() {
        menPopup.style.display = "none";
    });

    // Close Popups when clicking outside
    window.addEventListener("click", function(event) {
        if (event.target === womenPopup) {
            womenPopup.style.display = "none";
        }
        if (event.target === menPopup) {
            menPopup.style.display = "none";
        }
    });

});
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length;
    const carouselContainer = document.querySelector(".carousel-images");

    function showNextSlide() {
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0; // Reset to first slide
        }
        carouselContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});
