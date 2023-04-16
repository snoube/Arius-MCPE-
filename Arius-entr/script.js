/*let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){
    // L'utilisateur fait défiler la souris vers le bas
    document.querySelector(".tete").style.display = "none";
  } else {
    // L'utilisateur fait défiler la souris vers le haut
    document.querySelector(".tete").style.display = "flex";
  }
  lastScrollTop = st <= 0 ? 0 : st; 
}, false);*/

let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){
    // L'utilisateur fait défiler la souris vers le bas
    document.querySelector(".tete").classList.add("hide");
  } else {
    // L'utilisateur fait défiler la souris vers le haut
    document.querySelector(".tete").classList.remove("hide");
  }
  lastScrollTop = st <= 0 ? 0 : st; 
}, false);

//pop up de demande de validation de lien 

window.addEventListener("beforeunload", function(e) {
  e.preventDefault();
  e.returnValue = '';
});

document.querySelectorAll("a").forEach(function(link) {
  link.addEventListener("click", function(e) {
    var confirmation = confirm("Êtes-vous sûr de vouloir quitter cette page ?");
    if (!confirmation) {
      e.preventDefault();
    }
  });
});