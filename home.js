/**
 * Attention Event pour changer la src de l'image en fonction de la taille de l'écran
 * C'est pas propre du tout =)
 */
const sun = document.querySelector('#sun');
if (window.matchMedia("(min-width: 800px)").matches) {
     sun.src = "./styles/img/textures/dvertical-sun.png";
} else if (window.matchMedia("(max-width: 800px)").matches) {
     sun.src = "./styles/img/textures/dhorizontal-sun.png";
}
window.addEventListener('resize', function () {
     if (window.matchMedia("(min-width: 800px)").matches) {
          sun.src = "./styles/img/textures/dvertical-sun.png";
     } else if (window.matchMedia("(max-width: 800px)").matches) {
          sun.src = "./styles/img/textures/dhorizontal-sun.png";
     }
})


/**
 * permet de rediriger vers mars
 */
const planets = document.querySelectorAll(".planets-container > div");
for (let i = 0; i < planets.length; i++) {
     planets[i].addEventListener('click', function () {
          window.location.href = "./mars.html";
     })
}
