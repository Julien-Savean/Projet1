const planets = document.querySelectorAll(".planets-container > div");


for (let i = 0; i < planets.length; i++) {
     planets[i].addEventListener('click', function () {
          window.location.href = "./mars.html";
     })
}


const message = "Jupiter";
// const welcomeMessage = document.querySelector('#welcome-message');

function printLetterByLetter(message, speed, localisation) {
     let i = 0;
     let interval = setInterval(function () {
          localisation.innerHTML += message.charAt(i);
          i++;
          if (i > message.length) {
               clearInterval(interval);
          }
     }, speed);
}

// let PlanetNames = {
//      name: '',
//      selector: ''
// }

// let jupiter = new PlanetNames();
// jupiter.name = "Jupiter";
// jupiter.selector = document.querySelector('#jupiter-p');

// console.log(jupiter.selector);

printLetterByLetter(message, 500, document.querySelector('#jupiter-p'));

// welcomeMessage.innerHTML = "";





