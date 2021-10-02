const planetMenu = document.querySelector('.liHeader1');
const menuPlanete = document.querySelector('#menuPlanete')


planetMenu.addEventListener("click", function slideOn() {
     if (menuPlanete.style.display === "none") {
          menuPlanete.style.display = "grid";
     }
        else menuPlanete.style.display = "none";
     });



const homeMenu = document.querySelector('.liHeader');

homeMenu.addEventListener("click", function () {
     window.location.href = "./home.html";
});

const aboutMenu = document.querySelector('.liHeader2');

aboutMenu.addEventListener("click", function () {
     window.location.href = "./about.html";
});


const h4Menu = document.querySelectorAll(".h4Planete");

for (let i = 0; i < h4Menu.length; i++) {
     h4Menu[i].addEventListener('click', function () {
          window.location.href = "./mars.html";
     })
}

const h4Mars = document.querySelector("#h4Mars");
const imgMars = document.querySelector("#imgMars");

if (h4Mars === "hover") {
     imgMars.style.boxShadow = "0px 0px 5px white";
}
