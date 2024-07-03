// Form Submit
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    document.getElementById('infoName').innerText = name;
    document.getElementById('infoName2').innerText = 'Hi ' + name + ', ';
    document.getElementById('infoBirthdate').innerText = birthdate;
    document.getElementById('infoGender').innerText = gender;
    document.getElementById('infoMessage').innerText = message;

    const currentTime = new Date().toLocaleString();
    document.getElementById('currentTime').innerText = currentTime;
});

// Burger Menu Mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Banner Slider
function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(() => {
        changeSlide(1);
    }, 15000); // Change slide every 5 seconds
});
