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

const imgPlanete = document.querySelectorAll(".imgPlanete");

for (let i = 0; i < imgPlanete.length; i++) {
     imgPlanete[i].addEventListener('click', function () {
          window.location.href = `./planet?planet=${imgPlanete[i].innerHTML.toLowerCase()}`;
     })
}

const imgGithub = document.querySelector("#github"); 

imgGithub.addEventListener('click', function() {
      window.location.href = "https://github.com/Julien-Savean/Projet1";
})

const imgLinkedin = document.querySelector("#linkedin"); 

imgLinkedin.addEventListener('click', function() {
      window.location.href = "https://www.linkedin.com/school/wild-code-school#:~:text=Wild%20Code%20School%20%7C%2011%2C806%20followers%20on%20LinkedIn.,at%2020%2B%20campuses%2C%20remotely%20or%20at%20company%E2%80%99s%20offices.";
})

const imgEmail = document.querySelector("#email"); 

imgEmail.addEventListener('click', function() {
      window.location.href = "https://www.youtube.com/embed/RRq_MvT33pA?start=6&rel=0&autoplay=1";
})




