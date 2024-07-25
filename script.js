// toggle mobile menu
function toggleMobileMenu() {
    var x = document.getElementById("navbar-mobile");
    console.log(x.style)
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // fuction observe section
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  // Select all elements with the class 'hidden'
  const hiddenElements = document.querySelectorAll('.hidden');

  // Select all elements with the class 'hidden-left'
  const hiddenLeftElements = document.querySelectorAll('.hidden-left');

  // Select all elements with the class 'hidden-right'
  const hiddenRightElements = document.querySelectorAll('.hidden-right');

  // Observe all elements with the class 'hidden'
  hiddenElements.forEach((el) => observer.observe(el));

  // Observe all elements with the class 'hidden-left'
  hiddenLeftElements.forEach((el) => observer.observe(el));

  // Observe all elements with the class 'hidden-right'
  hiddenRightElements.forEach((el) => observer.observe(el));

let slideIndex = 0; // Start slide index from 0
let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

// showSlides in projects section
  function showSlides(n,plusSlides= 1) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Reset dot styles
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
 
 if(plusSlides){
   // Increment slide index
  slideIndex += n;

// Loop back to first slide if end is reached
if (slideIndex > slides.length) {
  slideIndex = 1;
}
if (slideIndex < 1) {
  slideIndex = slides.length;
}
}else{
  //slideIndex = currentSlide
  slideIndex = n;
}

// Display current slide and activate corresponding dot
slides[slideIndex - plusSlides].style.display = "block";
dots[slideIndex - plusSlides].className += " active";
}

// Function to change slide by +/- n
function plusSlides(n) {
showSlides(n);
}

// Function to change to specific slide
function currentSlide(n) {
  showSlides(n,0);
}

// Auto slide every 10 seconds
function autoSlide() {
  plusSlides(1);
  setTimeout(autoSlide, 10000);
}

// Start slideshow when page loads
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  autoSlide(); // Start automatic sliding
});

  