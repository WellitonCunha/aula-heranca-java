let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const page = document.getElementById("page");

function showSlide(index) {
    if (index < 0) {
        index = 0;
    }

    if (index >= slides.length) {
        index = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentSlide = index;

    page.textContent =
        `${currentSlide + 1} / ${slides.length}`;

    prevButton.disabled =
        currentSlide === 0;

    nextButton.disabled =
        currentSlide === slides.length - 1;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }
});

showSlide(0);
