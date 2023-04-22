
let lastScrollTop = 0;
window.addEventListener("scroll", function(){
  let st = window.pageYOffset || document.documentElement.scrollTop; 
  if (st > lastScrollTop){
    //défile la molett vers le bas
    document.querySelector(".tete").classList.add("hide");
  } else {
    // défile la mollete vers le haut
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