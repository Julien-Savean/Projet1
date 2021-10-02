<?php
$planet = $_GET["planet"];
include('./public/databases/planetsInfos.php');
if ($planets[$planet]) {
    $planetInfos = $planets[$planet];
} else {
    header("Location: /");
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo "<title>$planet</title>" ?>
    <link rel="stylesheet" type="text/css" href="./public/styles/mars.css">
    <link rel="styleSheet" href="./public/styles/homeBackground.css"/>
    <link rel="styleSheet" href="./public/styles/header.css"/>

</head>

<body>
<div class="stars"></div>
<div class="twinkl"></div>

<?php include "header.php" ?>


<!--Julien-->
<section class="mainpage">

    <?php echo "<h1> $planet </h1>" ?>

    <section class=sectionInfos>


        <?php echo "<div id=\"$planet\"></div>" ?>

        <div class="characteristicsBloc">
            <ul>
                <?php echo "<li><u>Satellites:</u> " . $planetInfos["features"]["satellites"] . "</li>
                <li><u>Mass:</u> " . $planetInfos["features"]["mass"] . "</li>
                <li><u>Volume:</u> " . $planetInfos["features"]["volume"] . "</li>
                <li><u>Orbital period:</u> " . $planetInfos["features"]["orbital period"] . "</li>
                <li><u>Surface temp.:</u> " . $planetInfos["features"]["surface temp."] . "</li>"
                ?>
            </ul>
        </div>

        <div class="presentationBloc">
            <?php echo "<p>" . $planetInfos["description"][0] . "</p>" ?>
            <?php echo "<p>" . $planetInfos["description"][0] . "</p>" ?>
        </div>

    </section>


    <section class="news">

        <h2>Current events:</h2>
        <?php echo
            "<article class=articles>" . $planetInfos["news"][0] . "</article>
        <article class=articles> " . $planetInfos["news"][1] . "</article>
        <article class=articles> " . $planetInfos["news"][2] . "</article>
        <article class=articles> " . $planetInfos["news"][3] . "</article>
        <article class=articles> " . $planetInfos["news"][4] . "</article>"
        ?>
    </section>

</section>

</body>
<script src="./public/headerMenu.js"></script>


</html>
