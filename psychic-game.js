var randomAnswer
var leftAnswerCount
startGame();

var winCount = 0
var loseCount = 0

function checkAnswer() {
    
    document.getElementById("leftAnswerCount").innerText = `Left Answer Count: ${leftAnswerCount}`

    var answer = document.getElementById("myAnswer").value.toLowerCase();

    if (answer === randomAnswer) {
        winCount++

        document.getElementById("winCount").innerText = `Win: ${winCount}`

        alert("Siz qalib gəldiniz, Təxmin olunmuş hərf dəyişir")

        startGame()
    }
    else if (leftAnswerCount == 1) {
        loseCount++
        document.getElementById("loseCount").innerText = `Losses: ${loseCount}`

        alert("Siz məğlub oldunuz bir daha sınayın")

        startGame()
        document.getElementById("leftAnswerCount").innerText = `Left Answer Count: ${leftAnswerCount}`
    }
    else {
        leftAnswerCount--
        document.getElementById("leftAnswerCount").innerText = `Left Answer Count: ${leftAnswerCount}`
    }

    document.getElementById("myAnswer").value = ""

}


function startGame() {
    leftAnswerCount = 9

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    randomAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(randomAnswer)
}
