const planetMenu = document.querySelector('.liHeader1');
const menuPlanet = document.querySelector('#menuPlanets');


planetMenu.addEventListener("click", function () {
     if (menuPlanet.style.display === "grid") {
          menuPlanet.style.display = "none";

     } else {
          menuPlanet.style.display = "grid";
     }
});

const homeMenu = document.querySelector('.liHeader');

homeMenu.addEventListener("click", function () {
     window.location.href = "./";
});

const aboutMenu = document.querySelector('.liHeader2');

aboutMenu.addEventListener("click", function () {
     window.location.href = "./about";
});


const h4Menu = document.querySelectorAll(".h4Planet");

for (let i = 0; i < h4Menu.length; i++) {
     h4Menu[i].addEventListener('click', function () {
          window.location.href = `./planet?planet=${h4Menu[i].innerHTML.toLowerCase()}`;
     })
}
