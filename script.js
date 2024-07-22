function toggleMobileMenu() {
    var x = document.getElementById("navbar-mobile");
    console.log(x.style)
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function scrollTo(section) {
    const _section = document.getElementById(section);
    _section.scrollIntoView({ behavior: "smooth" }); 
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        
      } else {
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');

  const hiddenLeftElements = document.querySelectorAll('.hidden-left');

  const hiddenRightElements = document.querySelectorAll('.hidden-right');

//   const typingElements = document.querySelectorAll('.typing');

//   typingElements.forEach((el) => observer.observe(el));



  hiddenElements.forEach((el) => observer.observe(el));

  hiddenLeftElements.forEach((el) => observer.observe(el));

  hiddenRightElements.forEach((el) => observer.observe(el));

//   let slideIndex = 1;
//   showSlides(slideIndex);
  
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     // setTimeout(plusSlides(1), 10000);
//   }

//  document.addEventListener("DOMContentLoaded", function() {
//     // showSlides();
//     setTimeout(plusSlides(1), 10000);
//   });

let slideIndex = 0; // Start slide index from 1
let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

// function showSlides(n, currentSlide=false) {
  function showSlides(n) {
  // let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Reset dot styles
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Increment slide index
  slideIndex += n;

// Loop back to first slide if end is reached
if (slideIndex > slides.length) {
  slideIndex = 1;
}
if (slideIndex < 1) {
  slideIndex = slides.length;
}

// Display current slide and activate corresponding dot
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}

// Function to change slide by +/- n
function plusSlides(n) {
showSlides(n);
}

// Function to change to specific slide
function currentSlide(n) {
  // showSlides(n);
  // plusSlides(n)
  // showSlides(slideIndex = n);
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // Reset dot styles
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex = n

    // Display current slide and activate corresponding dot
slides[slideIndex ].style.display = "block";
dots[slideIndex].className += " active";
}

// Auto slide every 3 seconds
function autoSlide() {
  plusSlides(1);
  setTimeout(autoSlide, 10000);
}

// Start slideshow when page loads
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  autoSlide(); // Start automatic sliding
});

  // let slideIndex = 0;

  // function showSlides() {
  //   let slides = document.getElementsByClassName("mySlides");
  //   let dots = document.getElementsByClassName("dot");
  
  //   for (let i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  
  //   slideIndex++;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  
  //   for (let i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  //   }
  
  //   slides[slideIndex - 1].style.display = "block";
  //   dots[slideIndex - 1].className += " active";
  
  //   setTimeout(showSlides, 10000); 
  // }
  
  // function plusSlides(n) {
  //   showSlides(slideIndex += n);
  // }
  
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  // document.addEventListener("DOMContentLoaded", function() {
  //   showSlides();
  // });
  


//   const slideContainer = document.querySelector('.projects');
//   const slide = document.querySelectorAll('.slides');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');
// const interval = 3000;

// console.log("slide",slide);

// let slides = document.querySelectorAll('.slide');
// let index = 1;

// const firstClone = slides[0].cloneNode(true);
// const lastClone = slides[slides.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';



// slide.append(firstClone);
// slide.prepend(lastClone);

// const slideWidth = slides[index].clientWidth
// console.log("slideWidth",slideWidth);
// // slide.style.transform = `translateX(${-slideWidth * index}px)`

// const startSlide = () => {
//   setInterval(() => {
//     index++;
//     slide.style.transform = `translateX(${-slideWidth * index}px)`;
//     slide.style.transform = '.7s'
//   }, interval);
// }

// startSlide();
