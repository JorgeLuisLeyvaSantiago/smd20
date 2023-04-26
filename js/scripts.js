
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// ##### SLIDER PORTADA #####

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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex =  slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className  = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}


// ######################

var slideInterval = setInterval(function() {
    plusSlides(1);
    // Se establece el intervalo de tiempo en 3000 milisegundos, lo que equivale a 3 segundos.
  }, 3000);
  
  function pauseSlide() {
    clearInterval(slideInterval);
  }
  
  function resumeSlide() {
    slideInterval = setInterval(function() {
      plusSlides(1);
    }, 4000);
  }
  
  document.addEventListener("DOMContentLoaded", function(event) { 
    var slider = document.getElementsByClassName("slider")[0];
    slider.addEventListener("mouseenter", function() {
      pauseSlide();
    });
    slider.addEventListener("mouseleave", function() {
      resumeSlide();
    });
  });
  
  function prevSlide() {
    pauseSlide();
    plusSlides(-1);
    resumeSlide();
  }
  
  function nextSlide() {
    pauseSlide();
    plusSlides(1);
    resumeSlide();
  }


  /* ############# CONTADOR REGRESIVO DE DESCUENTO ############  */


  // Set the date we're counting down to
var countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display the result in the element with id="demo"
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


// ############## MSG URGENCIA 2 PAGE ###################

// Oculta el mensaje de urgencia después de 24 horas
setTimeout(function() {
  document.querySelector('#urgency').style.display = 'none';
}, 86400000);