var slideIndex = 0;
var slides = document.getElementsByClassName("rental-mySlides");
var progressBar = document.getElementsByClassName("rental-progress-bar")[0];

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  // Ajusta o índice do slide se exceder os limites
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Oculta todos os slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Exibe o slide atual
  slides[slideIndex].style.display = "block";

  // Reinicia a barra de progresso
  progressBar.style.transition = "none"; // Remove a transição para evitar o efeito de deslizamento
  progressBar.style.width = "0%";
  setTimeout(function() {
    progressBar.style.transition = ""; // Reaplica a transição para iniciar a animação
    progressBar.style.width = "100%";
  }, 50); // Diminuí o tempo para que a transição comece imediatamente

  // Adiciona uma pequena pausa antes de reiniciar a barra de progresso
  setTimeout(function() {
    progressBar.style.width = "0%";
  }, 5050); // Reinicia a barra de progresso após 5 segundos
}

function autoSlide() {
  plusSlides(1);
}

setInterval(autoSlide, 5000); // Altera os slides a cada 5 segundos

showSlides(slideIndex); // Exibe o primeiro slide inicialmente
