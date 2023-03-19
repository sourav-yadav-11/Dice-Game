var randNo1 = Math.floor(Math.random()*6 + 1);
var randImg1 = "images/dice"+ randNo1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randImg1);

var randN02 = Math.floor(Math.random()*6 +1);
var randImg2 = "images/dice" + randN02 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randImg2);

if(randNo1 > randN02){
    document.querySelector("h1").innerHTML="Player 1 Wins !"
}else if(randNo1 < randN02){
    document.querySelector("h1").innerHTML="Player 2 Wins !"
}else{
    document.querySelector("h1").innerHTML="Match Draw !"
}