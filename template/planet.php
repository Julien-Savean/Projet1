<?php
/**
 * This page get the values in the database array and inject it in html
 *
 * _GET the value of planet in query ( planet?planet=nameOfThePlanet ) and assign it to $planet
 * it check if nameOfThePlanet exist in planetsInfos.php's $planets as key
 * if true = $planetInfos;
 * if false redirection to home.php
 */
$planet = $_GET["planet"];
include('../databases/planetsInfos.php');

if (isset($planets) && $planets[$planet]) {
    $planetInfos = $planets[$planet];
} else {
    header("Location: /");
}
?>


<!-- begin of html ✔ -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo "<title>$planet</title>" ?> <!--modify title of the page with query-->
    <link rel="stylesheet" href="/styles/planets.css">
    <link rel="stylesheet" href="/styles/img/rotation/planet-planets-rotation.css">
    <link rel="styleSheet" href="/styles/homeBackground.css"/>
    <link rel="styleSheet" href="/styles/header.css"/>
    <link rel="stylesheet" href="/styles/footer.css">
</head>

<body>
<!-- background stars and twinkle -->
<div class="stars"></div>
<div class="twinkl"></div>

<!-- import header in the planet.php -->
<?php include "header.php" ?>

<!--begin template of page with php inject with query ✔-->

<div class="main-container">
    <section class="mainpage">

        <!-- Main title of the page -->
         <h1 style='color: <?=$planetInfos["color"]?>; text-shadow: <?=$planetInfos["color"]?> 10px -5px 20px'> <?=$planet?> </h1> 

        <section class=sectionInfos>

            <!-- picture of the rotating planet => CSS planet.css-->
            <?= "<div id=\"$planet\"></div>" ?>

            <!-- inject features from database array-->
            <div class="characteristicsBloc" style='border-color: <?=$planetInfos["color"]?>'>
                <ul>
                    <?= "<li><u>Satellites:</u> " . $planetInfos["features"]["satellites"] . "</li>
                <li><u>Mass:</u> " . $planetInfos["features"]["mass"] . "</li>
                <li><u>Volume:</u> " . $planetInfos["features"]["volume"] . "</li>
                <li><u>Orbital period:</u> " . $planetInfos["features"]["orbital period"] . "</li>
                <li><u>Surface temp.:</u> " . $planetInfos["features"]["surface temp."] . "</li>"
                    ?>
                </ul>
            </div>

            <!-- inject description from database array -->
            <div class="presentationBloc" style='border-color: <?=$planetInfos["color"]?>'>
                <p><?php echo $planetInfos["description"][0]?></p>
                <p><?php echo $planetInfos["description"][1]?></p>
            </div>

        </section>


        <section class="news">
            <!-- inject news from database array -->
            <h2>Current events:</h2>
        
            <article class="articles" style='border-color: <?=$planetInfos["color"]?>'> 
                    <img class="imgNews" src="<?=$planetInfos["news1"]["src"]?>" alt="<?=$planetInfos["news1"]["alt"]?>"></img>
                    <h3><?=$planetInfos["news1"]["h3"]?></h3>
                    <div class="textNews"><?=$planetInfos["news1"]["text"]?></div>
            </article>
            <article class="articles" style='border-color: <?=$planetInfos["color"]?>'> 
                    <img class="imgNews" src="<?=$planetInfos["news2"]["src"]?>" alt="<?=$planetInfos["news2"]["alt"]?>"></img>
                    <h3><?=$planetInfos["news2"]["h3"]?></h3>
                    <div class="textNews"><?=$planetInfos["news2"]["text"]?></div>
            </article>
            <article class="articles" style='border-color: <?=$planetInfos["color"]?>'> 
                    <img class="imgNews" src="<?=$planetInfos["news3"]["src"]?>" alt="<?=$planetInfos["news3"]["alt"]?>"></img>
                    <h3><?=$planetInfos["news3"]["h3"]?></h3>
                    <div class="textNews"><?=$planetInfos["news3"]["text"]?></div>
            </article>
            <article class="articles" style='border-color: <?=$planetInfos["color"]?>'> 
                    <img class="imgNews" src="<?=$planetInfos["news4"]["src"]?>" alt="<?=$planetInfos["news4"]["alt"]?>"></img>
                    <h3><?=$planetInfos["news4"]["h3"]?></h3>
                    <div class="textNews"><?=$planetInfos["news4"]["text"]?></div>
            </article>

          
        </section>
    </section>

    <?php include "footer.php" ?>
</div>
</body>

<!--end template of page with php inject with query 🚫-->

</body>
<script src="/headerMenu.js"></script>

</html>
<!-- end of html🚫-->
