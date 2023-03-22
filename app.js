

// Menu Toggle

let menuToggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left')
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');

        contact.classList.remove('active');
        navRight.classList.remove('active');

        if (menuToggle.classList.contains('active')) {
            setTimeout(() => {
                navRight.classList.add('active');
            }, 100)

            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].classList.remove('active');
                setTimeout(() => {
                    navLinks[i].classList.add('active');
                }, i * 100)
            }

            setTimeout(() => {
                contact.classList.add('active');
            }, 700);
        }
})



// Join + Hire Cards Flipped

const card = document.querySelectorAll('.card-inner');

for (let i = 0; i < card.length; i ++) {
    card[i].addEventListener("click", () => {
        card[i].classList.toggle('is-flipped');
    })
};  




// Slideshow

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
 // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
/*  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  } */
  slides[slideIndex-1].style.display = "block";  
 // dots[slideIndex-1].className += " active";
}
