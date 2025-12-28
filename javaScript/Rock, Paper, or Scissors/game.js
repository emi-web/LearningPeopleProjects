// 1️⃣ Función para obtener la elección del usuario
const getUserChoice = (userInput) => {
  // 2️⃣ Convertimos la entrada del usuario a minúsculas
  userInput = userInput.toLowerCase();

  // 3️⃣ Verificamos si la opción es válida
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error: invalid choice");
  }
};

// 5️⃣ Función para obtener la elección de la computadora
const getComputerChoice = () => {
  // Generamos un número aleatorio entre 0 y 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Dependiendo del número, retornamos una opción
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// 7️⃣ Función para determinar el ganador
const determineWinner = (userChoice, computerChoice) => {
  // 14️⃣ Cheat code: bomb gana siempre
  if (userChoice === "bomb") {
    return "You win! 💣";
  }

  // 7️⃣ Caso empate
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  }

  // 8️⃣ Usuario elige rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  // 9️⃣ Usuario elige paper
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }

  // 🔟 Usuario elige scissors
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "You won!";
    }
  }
};

// 12️⃣ Función para iniciar el juego
const playGame = () => {
  // Elección del usuario
  const userChoice = getUserChoice("rock"); // puedes cambiar a paper, scissors o bomb

  // Elección de la computadora
  const computerChoice = getComputerChoice();

  // Mostramos las elecciones
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  // 13️⃣ Mostramos el resultado final
  console.log(determineWinner(userChoice, computerChoice));
};

// 🔚 Iniciamos el juego
playGame();
