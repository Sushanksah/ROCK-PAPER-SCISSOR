userScore = 0;
compScore = 0;

const choices = document.querySelectorAll(".imgContainer");
const msg = document.querySelector("#msg");
const userS = document.querySelector("#user-Score");
const compS = document.querySelector("#comp-Score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const draw = () => {
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "#181818";
}

const showWinner = (userWin) => {
    if (userWin) {  // Changed to use boolean directly
        userScore++;
        userS.innerText = userScore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compS.innerText = compScore;
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

const gamePlay = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(compChoice);
    
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((imgContainer) => {
    imgContainer.addEventListener("click", () => {
        const userChoice = imgContainer.getAttribute("id");
        console.log(userChoice);
        gamePlay(userChoice);
    })
})
