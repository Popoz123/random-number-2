
function randomImg1() {
    var randomNumber1 = Math.floor((Math.random()*6) + 1);
    var src = "./images/dice" + randomNumber1 + ".png";
    document.querySelector(".img1").setAttribute("src", src);



    var randomNumber2 = Math.floor((Math.random()*6) + 1);
    var src2 = "./images/dice" + randomNumber2 + ".png";
    document.querySelector(".img2").setAttribute("src", src2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerText = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").innerText = "Draw!"
    }
}

window.onload = randomImg1();

