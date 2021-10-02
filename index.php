<?php

$urlPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if ('/' === $urlPath) {
    require __DIR__ . '/public/home.php';
} else if ('/mars' === $urlPath) {
    require __DIR__ . '/public/mars.php';
} else if ('/about' === $urlPath) {
    require __DIR__ . '/public/about.php';
} else if ('/planet' === $urlPath) {
    require __DIR__ . '/public/planet.php';
}else {
    require __DIR__ . '/public/error404.php';
}