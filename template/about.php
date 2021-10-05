<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
    <link rel="stylesheet" href="/styles/about.css">
    <link rel="styleSheet" href="/styles/homeBackground.css"/>
    <link rel="stylesheet" href="/styles/header.css">
    <link rel="stylesheet" href="/styles/footer.css">


</head>

<body>

<div class="stars"></div>
<div class="twinkl"></div>

<?php include "header.php" ?>

<h1>The space is so cool!!!</h1>
<div class="container">

    <div class="cpictures">
        <img src="/images/mars-attacks.jpg" alt="alien">
        <img src="/images/vessel.jpg" alt="vaisseau">
    </div>
    <div class="ctext">
        <p>I'm sure the universe is full of intelligent life. It's just been too intelligent to come here. The Earth
            is the cradle of humanity, but mankind cannot stay in the cradle forever. Those who came before us made
            certain that this country rode the first waves of the industrial revolutions, the first waves of modern
            invention, and the first wave of nuclear power, and this generation does not intend to founder in the
            backwash of the coming age of space. We mean to be a part of it--we mean to lead it. For the eyes of the
            world now look into space, to the moon and to the planets beyond, and we have vowed that we shall not
            see it governed by a hostile flag of conquest, but by a banner of freedom and peace. We have vowed that
            we shall not see space filled with weapons of mass destruction, but with instruments of knowledge and
            understanding.</p>
        <br>
        <p>At an average distance of 140 million miles, Mars is one of Earth's closest habitable neighbors.
            Mars is about half again as far from the Sun as Earth is, so it still has decent sunlight.
            It is a little cold, but we can warm it up. Its atmosphere is primarily CO2 with some nitrogen and
            argon and a few other trace elements, which means that we can grow plants on Mars just by compressing the
            atmosphere.
            Gravity on Mars is about 38% of that of Earth, so you would be able to lift heavy things and bound around.
            Furthermore, the day is remarkably close to that of Earth.</p>
        <br><br>
        <p>For the first time ever, the European Space Agency is sending a rover to Mars.
            This historic rover is named after a British chemist and X-ray crystallographer, Rosalind Franklin and will
            focus on the search for past or present life beneath the Martian surface.
            The Rosalind Franklin rover is the second part of the ExoMars programme. It will demonstrate the feasibility
            of several technologies that are essential for future exploration missions,
            such as the planned Mars Sample Return mission. The rover will also carry the largest drill (2 metres long)
            ever sent to Mars,
            in order to retrieve soil samples that may contain evidence of microbial life deep below the surface.</p>

        <form action="toto.php" method="post">

            <fieldset>
                <legend> What about Space :</legend>
                <p>Do you have a Telescope ? : </p>
                <input type="radio" name="CSS" value="oui" id="oui"
                       checked="checked"/>
                <label for="oui" class="inline">yes</label>
                <input type="radio" name="CSS" value="non" id="non"/>
                <label for="non" class="inline">no</label>

                <label for="utilise">If so, do you use them : </label>
                <select name="utilise" id="utilise">
                    <option value="toujours"> always</option>
                    <option value="parfois"> sometimes</option>
                    <option value="jamais"> never</option>
                </select>
            </fieldset>

            <fieldset>
                <legend>About you :</legend>
                <label for="email">Your email :</label>
                <input type="email" name="email" size="20"
                       maxlength="40" value="email" id="email"/>

                <label for="comments">Your comments :</label>
                <textarea name="comments" id="comments" cols="20" rows="4">
                       </textarea>
            </fieldset>

            <p>
                <input type="submit" value="Send"/>
                <input type="reset" value="Canceled"/>
            </p>

        </form>
    </div>
</div>

<?php include "footer.php" ?>
</body>
<script src="/headerMenu.js"></script>


</html>