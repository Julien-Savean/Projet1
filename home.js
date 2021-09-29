const planets = document.querySelectorAll(".planets-container > div");


for (let i = 0; i < planets.length; i++) {
     planets[i].addEventListener('click', function () {
          window.location.href = "./mars.html";
     })

}


const message = "Welcome";
const welcomeMessage = document.querySelector('#welcome-message');

function printLetterByLetter(message, speed) {
     let i = 0;
     let interval = setInterval(function () {
          welcomeMessage.innerHTML += message.charAt(i);
          i++;
          if (i > message.length) {
               clearInterval(interval);
          }
     }, speed);
}

printLetterByLetter(message, 1000);

welcomeMessage.innerHTML = "";





