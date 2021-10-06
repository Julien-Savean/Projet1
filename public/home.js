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





//functions

function createP() {
    let planetName = document.createElement('p');
    planetName.classList.add('planetName');
    planetName.id = `${planets[i].id}t`;
    planetName.style.gridArea = `${planets[i].id}t`;
    planetName.style.fontSize = "13px";
    planetName.innerHTML = planets[i].id;
    planetContainer.appendChild(planetName);
}


/**
 * permet de rediriger vers la bonne planete
 */
const planets = document.querySelectorAll(".planets-container > div");
const planetContainer = document.querySelector(".planets-container");
for (let i = 0; i < planets.length; i++) {
    planets[i].addEventListener('click', function () {
        window.location.href = `./planet?planet=${planets[i].id}`;
    })

    planets[i].addEventListener('mouseover', function () {
        let planetName = document.createElement('p');
        planetName.classList.add('planetName');
        planetName.id = `${planets[i].id}t`;
        planetName.style.gridArea = `${planets[i].id}t`;
        planetName.style.fontSize = "13px";
        planetName.innerHTML = planets[i].id;
        planetContainer.appendChild(planetName);
    })


    planets[i].addEventListener('mouseout', function () {
        let childToRemove = document.getElementById(`${planets[i].id}t`)
        planetContainer.removeChild(childToRemove);
    })

}


/*for (let i = 0; i < planets.length; i++) {
    planets[i].addEventListener('mouseleave', function () {
        let nameToRemove = document.querySelector(".planets-container > p");
        console.log(nameToRemove);
        nameToRemove.remove();

    }*/

/*        document.getElementById(`${planets[i].id}t`).remove();
        console.log(document.getElementById(`${planets[i].id}t`));*/
