const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentIndex = 0;

function showSlide(index) {
    // Hide all images
    const images = slider.querySelectorAll('img');
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(currentIndex);
}

// Initially, show the first slide
showSlide(currentIndex);

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
