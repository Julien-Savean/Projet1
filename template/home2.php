<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
    />
    <title>Solar System</title>
    <link rel="stylesheet" href="/styles/home.css"/>
    <link rel="styleSheet" href="/styles/homeBackground.css"/>
    <link rel="stylesheet" href="/styles/img/rotation/home-planets-rotation.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
</head>
<body style="cursor: crosshair">

<div class="stars"></div>
<div class="twinkl"></div>

<div class="planets-container">
    <div id="mercury"></div>
    <div id="venus"></div>
    <div id="earth"></div>
    <div id="mars"></div>
    <div id="jupiter"></div>
    <div id="saturn"></div>
    <div id="uranus"></div>
    <div id="neptune"></div>
</div>

</body>
<script>
    $(document).ready(function () {
        $('#mercury').click(function () {
            $("#mercury")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });
    $(document).ready(function () {
        $('#venus').click(function () {
            $("#venus")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });
    $(document).ready(function () {
        $('#earth').click(function () {
            $("#earth")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });
    $(document).ready(function () {
        $('#mars').click(function () {
            $("#mars")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });
    $(document).ready(function () {
        $('#jupiter').click(function () {
            $("#jupiter")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });
    $(document).ready(function () {
        $('#saturn').click(function () {
            $("#saturn")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });
    $(document).ready(function () {
        $('#uranus').click(function () {
            $("#uranus")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });
    $(document).ready(function () {
        $('#neptune').click(function () {
            $("#neptune")
                .toggle('explode', {pieces: 150}, 1000);
        });
    });

</script>

</html>
