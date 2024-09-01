document.addEventListener("DOMContentLoaded", function() {
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
});

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
document.getElementById("contactButton").addEventListener("click", function() {
    window.open("mailto:example@domain.com", "_blank");
});
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.gallery-item').forEach(el => {
            if (el !== item) el.classList.remove('open');
        });
        item.classList.toggle('open');
    });
});
function enlargeImage(img) {
    const overlay = document.getElementById('news-card-overlay');
    const enlargedImg = document.getElementById('enlarged-image');
    enlargedImg.src = img.src;
    overlay.style.display = 'flex';
}

function closeOverlay(event) {
    // Prevent the event from bubbling up if the close button is clicked
    if (event.target.id === 'close-button' || event.target.id === 'news-card-overlay') {
        const overlay = document.getElementById('news-card-overlay');
        overlay.style.display = 'none';
    }
}
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.sticky-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
}