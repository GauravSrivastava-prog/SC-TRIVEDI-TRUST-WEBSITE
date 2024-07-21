document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.photo-slider img');
    const contents = document.querySelectorAll('.right .content');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        contents[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
        contents[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image and content every 3 seconds

    const sliders = document.querySelectorAll('.slider-item');

    sliders.forEach(slider => {
        slider.addEventListener('mouseenter', () => {
            sliders.forEach(s => s.classList.remove('active'));
            slider.classList.add('active');
        });

        slider.addEventListener('mouseleave', () => {
            sliders.forEach(s => s.classList.remove('active'));
        });
    });
});
