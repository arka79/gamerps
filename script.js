let userpoint = 0;
let computerpoint = 0;

const userScore = document.querySelector('#user-score');
const computerScore = document.querySelector('#computer-score');

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const compChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomChoice = options[Math.floor(Math.random() * options.length)];
    return randomChoice;
};


const draw = () => {
    msg.innerText = 'It is a draw';
};
    
const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
      userpoint++;
      userScore.innerText = userpoint;
      msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
      msg.style.backgroundColor = "green";
    } else {
      computerpoint++;
      computerScore.innerText = computerpoint;
      msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
      msg.style.backgroundColor = "red";
    }
    if (userpoint === 5 || computerpoint === 5) {
        setTimeout(() => {
          reset(); // Reset the game after a short delay
        }, 1000); // Delay of 1 second
      }
  };
  
  const playGame = (userChoice) => {
    const computerChoice = compChoice();
    console.log(`:User  ${userChoice}, Computer: ${computerChoice}`); // Debugging
  
    if (userChoice === computerChoice) {
      draw();
    } else {
      let userWin =
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper");
      console.log(`User  wins? ${userWin}`); // Debugging
      showWinner(userWin, userChoice, computerChoice);
    }
  };

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });

const reset = () => {
    userpoint = 0;
    computerpoint = 0;
    userScore.innerText = userpoint;
    computerScore.innerText = computerpoint;
    msg.style.backgroundColor = "black";
    msg.innerText = "Click on a choice to play";
    };