// 4 crystals with randon numbers
// regenerated every win or loss with numbers between 1-12
//
var randomNumber;
var images = [
    "assets/images/mindstone.jpg",
    "assets/images/powerstone.jpg",
    "assets/images/realitystone.jpg", 
    "assets/images/soulstone.jpg",
    "assets/images/spacestone.jpg", 
    "assets/images/timestone.jpg"];
var losses = 0;
var wins = 0;
var score = 0;
var values = [];

var startGame = function()
{
    
    $("#crystals").empty()
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    
    $("#target").html(randomNumber);
    $("#score").html("Current Sum: " + score);
   
    for (var i = 0; i < 4; i++)
    {
        var random = Math.floor(Math.random()*12 +1);

        var crystal = $("<div>");
        $(crystal).attr({"class": "crystal", "data-random": random});
        //crystal.html(random);
        crystal.css({
            "background-image":"url('" + images[i] + "')"
        });
        $("#crystals").append(crystal);
    }
}

    startGame();

    $(document).on("click", ".crystal", function()
    {
        var num = parseInt($(this).attr("data-random"));

        score += num;

        console.log(score);

        if (score > randomNumber)
        {
            losses++;
            $("#losses").html("Losses: " + losses);
            $("#message").html("You lost!");
            score = 0;
            startGame();
        }
        else if (score === randomNumber)
        {
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#message").html("You win!");
            score = 0;
            startGame();
        }
        var sum = score;
        $("#score").html("Current Sum: " + sum);
    });

    