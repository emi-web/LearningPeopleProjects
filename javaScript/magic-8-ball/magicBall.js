// 1️⃣ Creamos la variable userName y la dejamos como un string vacío.
// Aquí puedes escribir tu nombre dentro de las comillas si quieres.
let userName = "";

// 2️⃣ Usamos un operador ternario para saludar al usuario.
// Si hay un nombre, saluda con el nombre.
// Si no hay nombre, solo dice "Hello!".
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// 3️⃣ Creamos la variable userQuestion con la pregunta del usuario.
const userQuestion = "Will I learn JavaScript this year?";

// 4️⃣ Mostramos en la consola la pregunta que hizo el usuario.
// Incluimos el nombre del usuario si existe.
console.log(`${userName ? userName : "User"} asked: ${userQuestion}`);

// 5️⃣ Generamos un número aleatorio entre 0 y 7.
// Math.random() genera un número entre 0 y 1.
// Lo multiplicamos por 8 y Math.floor() redondea hacia abajo.
const randomNumber = Math.floor(Math.random() * 8);

// 6️⃣ Creamos la variable eightBall como string vacío.
// Aquí se guardará la respuesta final.
let eightBall = "";

// 7️⃣ Usamos un switch para asignar una respuesta según randomNumber.
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

// 8️⃣ Mostramos la respuesta del Magic Eight Ball en la consola.
console.log(`The Magic Eight Ball says: ${eightBall}`);
