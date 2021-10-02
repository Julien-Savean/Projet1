const menuBurger = document.querySelector('.menu-burger');
const menuNavigation = document.querySelector(".menu-navigation");
const menuNavigationChilds = document.querySelectorAll(".menu-navigation >p");

/**
 * Gestion du menu
 * Ouverture au click
 * Redirection vers Mars au clique
 */
menuBurger.addEventListener('click', function () {
     if (menuNavigation.style.display === "inline-flex") {
          menuNavigation.style.display = "none";
     } else {
          menuNavigation.style.display = "inline-flex";
     }  
})

//navigation menu home
for (let i = 0; i < menuNavigationChilds.length; i++) {
     menuNavigationChilds[i].addEventListener('click', function () {
          window.location.href = `./planet?planet=${menuNavigationChilds[i].innerHTML.toLowerCase()}`;
     })
}