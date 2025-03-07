var randomNum1=Math.floor((Math.random()*6)+1);
var player1=document.querySelectorAll("img")[0];
var randomImage1="images/dice"+randomNum1+".png";
player1.setAttribute("src",randomImage1);


var randomNum2=Math.floor((Math.random()*6)+1);
var player2=document.querySelectorAll("img")[1];
var randomImage2="images/dice"+randomNum2+".png";
player2.setAttribute("src",randomImage2);


if (randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="🎈 Player 1 Wins!";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML=" Player 2 Wins! 🎈";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}