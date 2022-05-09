var randomNumber1 = Math.floor(Math.random() * 6) +1 ;  

var randomeDiceImage = "images/Dice"+randomNumber1+ ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomeDiceImage );

var randomNumber2 = Math.floor(Math.random() * 6) + 1;  

var randomeDiceImage = "images/Dice"+randomNumber2+ ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomeDiceImage );


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Payer 1 Wins";
}
else if (randomNumber2 >randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
 
    document.querySelector("h1").innerHTML="Draw Try Again";
};