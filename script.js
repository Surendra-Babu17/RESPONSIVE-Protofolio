// Typing effect
const text = ["WEB Designer","Python Developer "];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector('.typing-text');

function type() {
  if (charIndex < text[index].length) {
    typingElement.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 60);
  } else {
    index = (index + 1) % text.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);
});
let slides = document.querySelectorAll(".slide");


function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); 

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
  }
