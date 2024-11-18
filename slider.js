const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });

    const translateXValue = -currentIndex * (100 + 15); // Adjusted for spacing between items
    document.querySelector('.carousel').style.transform = `translateX(${translateXValue}%)`;
}

document.querySelector('.carousel-control.left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
});

document.querySelector('.carousel-control.right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
});

// Initialize carousel
updateCarousel();
