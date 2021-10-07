/**
 * Attention Event pour changer la src de l'image en fonction de la taille de l'écran
 * C'est pas propre du tout =)
 */
const sun = document.querySelector('#sun');
if (window.matchMedia("(min-width: 1100px)").matches) {
    sun.src = "./styles/img/textures/dvertical-sun.png";
} else if (window.matchMedia("(max-width: 1100px)").matches) {
    sun.src = "./styles/img/textures/dhorizontal-sun.png";
}
window.addEventListener('resize', function () {
    if (window.matchMedia("(min-width: 1100px)").matches) {
        sun.src = "./styles/img/textures/dvertical-sun.png";
    } else if (window.matchMedia("(max-width: 1100px)").matches) {
        sun.src = "./styles/img/textures/dhorizontal-sun.png";
    }
})


/**
 * permet de rediriger vers la bonne planete et crée l'apparition du nom au dessus
 */
const planets = document.querySelectorAll(".planets-container > div");
const planetContainer = document.querySelector(".planets-container");
const menuBurger = document.querySelector('.menu-burger');
const homeMenu = document.querySelector('.home');
const aboutMenu = document.querySelector('.about');
const allPlanets = document.querySelector(".allPlanets")

//crée des liens clics sur les div to redirect
for (let i = 0; i < planets.length; i++) {
    planets[i].addEventListener('click', function () {
        window.location.href = `./planet?planet=${planets[i].id}`;
    })
}


//Functions

function createMenuMobile() {
    homeMenu.classList.toggle("homeMenu");
    aboutMenu.classList.toggle("aboutMenu");
    planetContainer.classList.toggle("planetMenuMobile");
    /*    planetContainer.animate([
            {opacity: 1},
            {opacity: 0},
            {opacity: 1}], 1000);*/
    for (let i = 0; i < planets.length; i++) {
        if ((planetContainer.classList.length > 1)) {
            planetContainer.style.gridTemplateColumns = "1fr 3rem 1fr";


            //animation des planetes / works somehow
            let planetGridDestination = `${planets[i].id}v`;
            planets[i].animate([
                {opacity: 0, display: "none"},
                {opacity: 0, display: "none"},
                {opacity: 1, gridArea: planetGridDestination}], 500);
            planets[i].style.gridArea = `${planets[i].id}v`

            let planetNameMobile = document.createElement('p');
            planetNameMobile.classList.add('planetName');
            planetNameMobile.id = `${planets[i].id}t`;
            planetNameMobile.style.gridArea = `${planets[i].id}t`;
            planetNameMobile.style.fontSize = "1rem";
            planetNameMobile.style.display = "block";
            planetNameMobile.style.justifySelf = "start";
            planetNameMobile.style.cursor = "pointer";
            planetNameMobile.innerHTML = planets[i].id;
            planetContainer.appendChild(planetNameMobile).animate([
                    {opacity: 0},
                    {opacity: 1}],
                2000);
            planetNameMobile.addEventListener('click', function () {
                window.location.href = `./planet?planet=${planets[i].id}`;
            })
        } else {
            planetContainer.style.gridTemplateColumns = "auto auto auto"
            planets[i].style.gridArea = `${planets[i].id}r`;
            let childsToRemove = document.getElementById(`${planets[i].id}t`)
            planetContainer.removeChild(childsToRemove);
        }
    }
}


function mouseOverMenuDesktop(event) {
    let planet = event.target;
    let planetName = document.createElement('p');
    planetName.classList.add('planetName');
    planetName.id = `${planet.id}t`;
    planetName.style.gridArea = `${planet.id}t`;
    planetName.style.fontSize = "18px";
    planetName.innerHTML = planet.id;
    planetContainer.appendChild(planetName).animate([
            {height: "150%", easing: 'ease-in-out', opacity: 0},
            {height: "10%", opacity: "1"}],
        1000);

}


function mouseOutMenuDesktop(event) {
    let planet = event.target;
    let childToRemove = document.getElementById(`${planet.id}t`)
    planetContainer.removeChild(childToRemove)
}


//si la window = cette taille à l'ouverture de la page
if (window.matchMedia("(min-width: 1100px)").matches) {
    for (const planet of planets) {
        planet.addEventListener('mouseover', mouseOverMenuDesktop)
        planet.addEventListener('mouseout', mouseOutMenuDesktop);
    }


} else if (window.matchMedia("(max-width: 1100px)").matches) {
    for (const planet of planets) {
        planet.removeEventListener('mouseover', mouseOverMenuDesktop);
        planet.removeEventListener('mouseout', mouseOutMenuDesktop);
    }
    menuBurger.addEventListener('click', createMenuMobile);
}

//si la window est resize
window.addEventListener('resize', function () {
    if (window.matchMedia("(min-width: 1100px)").matches) {
        for (const planet of planets) {
            planet.addEventListener('mouseover', mouseOverMenuDesktop)
            planet.addEventListener('mouseout', mouseOutMenuDesktop);
        }

        if (planetContainer.classList.contains("planetMenuMobile")) {
            createMenuMobile();
        }


    } else if (window.matchMedia("(max-width: 1100px)").matches) {
        for (const planet of planets) {
            planet.removeEventListener('mouseover', mouseOverMenuDesktop);
            planet.removeEventListener('mouseout', mouseOutMenuDesktop);
        }

        menuBurger.addEventListener('click', createMenuMobile)

    }
})






