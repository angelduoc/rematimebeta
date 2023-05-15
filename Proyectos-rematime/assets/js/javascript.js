const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");

// Clonar las imágenes
for (let i = 0; i < images.length; i++) {
  const clone = images[i].cloneNode(true);
  carousel.appendChild(clone);
}

// Establecer el ancho del carrusel
const carouselWidth = images.length * 500;
carousel.style.width = carouselWidth + "px";

// Iniciar el carrusel infinito
let currentPosition = 0;
let intervalId;

function startCarousel() {
  intervalId = setInterval(() => {
    currentPosition -= 500;
    carousel.style.transform = `translateX(${currentPosition}px)`;
    if (currentPosition <= -carouselWidth) {
      currentPosition = 0;
    }
  }, 2000);
}

// Detener el carrusel
function stopCarousel() {
  clearInterval(intervalId);
}

startCarousel();


window.addEventListener("resize", setCarouselWidth);

  $(document).ready(function() {
    // Captura el evento de clic en el enlace ancla
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
        // Realiza la animación de desplazamiento
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000); // Ajusta la duración de la animación según tus preferencias
      }
    });
  });


  
