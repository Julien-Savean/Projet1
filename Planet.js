let styleHeader = document.querySelector(".liHeader");
let planeteMenu = document.querySelector("#menuPlanete");
let styleHeader1 = document.querySelector(".liHeader1");
let styleHeader2 = document.querySelector(".liHeader2");
let body = document.querySelector("#julien");


styleHeader.addEventListener("click", function () {
  styleHeader.style.backgroundColor = "red";
});

function slideOn() {
  styleHeader1.addEventListener("click", function red() {
    styleHeader1.style.backgroundColor = "red";
    planeteMenu.style.opacity = 1;
    body.style.opacity = 0;

    styleHeader1.addEventListener("click", function () {
      styleHeader1.style.backgroundColor = "white";
      planeteMenu.style.opacity = 0;
      body.style.opacity = 1;

      return slideOn();
    });
  });
}

slideOn();


styleHeader2.addEventListener("click", function () {
  styleHeader2.style.backgroundColor = "red";
});
