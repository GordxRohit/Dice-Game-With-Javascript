// Created by GordXRohit


alert("Wait for atleast 5 to 10 seconds for loading whole page.")

const diceImagesArray = ["https://dl.dropbox.com/s/gjgrsn158n4u1sk/557px-Dice-1.svg.png", "https://dl.dropbox.com/s/kee2vorbqoxql32/557px-Dice-2.svg.png", "https://dl.dropbox.com/s/tmueliz6ytnb2dh/Dice3.png", "https://dl.dropbox.com/s/di9x4q1g2di1u1k/557px-Dice-4.svg.png", "https://dl.dropbox.com/s/be8t9vrxeogjri7/557px-Dice-5.svg.png", "https://dl.dropbox.com/s/ebw0q2ahgjkikrj/557px-Dice-6.svg.png"];

var myScore = 1;
var comScore = 1;

let clickFunction = () => {
    let randomN1 = Math.floor(Math.random() * 6)
    let randomN2 = Math.floor(Math.random() * 6)

    document.getElementById("player1").setAttribute("src", diceImagesArray[randomN1])

    document.getElementById("player2").setAttribute("src", diceImagesArray[randomN2])

    if (randomN1 > randomN2) {
        document.getElementById("subHeading").innerHTML = 'YOU WIN';
        document.getElementById("subHeading").style.color = "blue"
        document.getElementById("subHeading").style.textShadow = "0px 0px 10px blue";
        document.getElementById("yourScore").innerHTML = "<b>Your Score : </b><code>" + myScore++ + "</code>"
        if (myScore > comScore) {
            document.getElementById("greater1").innerHTML = '>'
        }
    } else if (randomN1 < randomN2) {
        document.getElementById("subHeading").innerHTML = 'COMPUTER WIN';
        document.getElementById("comScore").innerHTML = "<b>Computer Score : </b><code>" + comScore++ + "</code>";
        document.getElementById("subHeading").style.textShadow = "0px 0px 10px red"
        if (myScore < comScore) {
            document.getElementById("greater1").innerHTML = '<'
        }
        document.getElementById("subHeading").style.color = "red"
    } else {
        document.getElementById("subHeading").innerHTML = 'DRAW'
        document.getElementById("subHeading").style.color = "yellow"
        document.getElementById("subHeading").style.textShadow = "0px 0px 10px yellow"
        if (myScore == comScore) {
            document.getElementById("greater1").innerHTML = '='
        }
    }

}
document.getElementById("button").addEventListener('click', clickFunction)

