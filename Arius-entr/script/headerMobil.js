let startY = 0;
window.addEventListener("touchstart", function(event) {
  startY = event.touches[0].clientY;
});

window.addEventListener("touchmove", function(event) {
  let currentY = event.touches[0].clientY;
  if (currentY > startY) {
    // L'utilisateur fait défiler l'écran vers le haut
    document.querySelector(".tete").style.opacity = "1";
  } else {
    // L'utilisateur fait défiler l'écran vers le bas
    document.querySelector(".tete").style.opacity = "0";
  }
});





