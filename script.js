function rollTheDice()  {
    let randomNum = Math.ceil(Math.random() * 6);
    let diceImages = document.getElementById("diceImg");
    if (randomNum === 1) {
        diceImages.src = "assets/images/1.png";
    } else if (randomNum === 2) {
        diceImages.src = "assets/images/2.png";
    } else if (randomNum === 3) {
        diceImages.src = "assets/images/3.png";
    } else if (randomNum === 4) {
        diceImages.src = "assets/images/4.png";
    } else if (randomNum === 5) {
        diceImages.src = "assets/images/5.png";
    } else if (randomNum === 6) {
        diceImages.src = "assets/images/6.png";
    } 
}