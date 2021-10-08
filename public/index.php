<?php
/**
 * le browser router sert à renvoyer vers les bonnes pages en fonction des données dans la barre d'adresse
 * i.e. http://localhost:8000/ renvoie vers home.php
 * i.e. http://localhost:8000/about vers about.php
 * Aussi si la barre d'adresse cible un fichier inexistant cela renvoie vers la page error404.php
 * i.e. http://localhost:8000/sdkfhgkqsjdjhdfkhg renvoie vers error404.php
 *
 * le code ci-dessous que nous avait présenté Bastien représente ce switch dans la barre d'adresse
 *
 *
 * la page mars a été supprimée et remplacée par planet.php
 * avec injection dynamique des données contenues dans public/databases/planetsInfos.php
 * l'injection se fait sur les liens que l'on avait fait avec le JS précédemment dans header.js et menuHome.js
 * Lorsque vous atterissez sur planet.php par le biais du site (en cliquant sur les liens)
 * vous verrez une barre similaire à cette exemple http://localhost:8000/planet?planet=earth
 * Le lien avec les données se fait directement dans le fichier planet.php
 */


$urlPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ('/' === $urlPath) {
    require __DIR__ . '/../template/home.php';
} else if ('/about' === $urlPath) {
    require __DIR__ . '/../template/about.php';
} else if ('/planet' === $urlPath) {
    require __DIR__ . '/../template/planet.php';
}else if ('/thanks' === $urlPath) {
    require __DIR__ . '/../template/thanks.php';
}else if ('/platist' === $urlPath) {
    require __DIR__ . '/../template/platist.php';
}else {
    require __DIR__ . '/../template/error404.php';
}