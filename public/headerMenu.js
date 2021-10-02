const planetMenu = document.querySelector('.liHeader1');
const menuPlanete = document.querySelector('#menuPlanets');


planetMenu.addEventListener("click", function () {
     if (menuPlanete.style.display === "grid") {
          menuPlanete.style.display = "none";

     } else {
          menuPlanete.style.display = "grid";
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


const h4Menu = document.querySelectorAll(".h4Planete");

for (let i = 0; i < h4Menu.length; i++) {
     h4Menu[i].addEventListener('click', function () {
          window.location.href = "./mars";
     })
}
