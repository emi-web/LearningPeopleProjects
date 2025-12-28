// 1️⃣ Creamos la variable myAge y le asignamos mi edad como número.
const myAge = 25;

// 2️⃣ Creamos la variable earlyYears y le asignamos el valor 2.
// Usamos let porque este valor va a cambiar más adelante.
let earlyYears = 2;

// 3️⃣ Multiplicamos earlyYears por 10.5 y guardamos el nuevo valor en la misma variable.
earlyYears *= 10.5;

// 4️⃣ Restamos 2 a mi edad porque los primeros dos años ya fueron contados.
// Guardamos el resultado en laterYears, que también cambiará después.
let laterYears = myAge - 2;

// 5️⃣ Multiplicamos laterYears por 4 para convertirlos a años perro.
// Usamos el operador *= para multiplicar y reasignar en un solo paso.
laterYears *= 4;

// 6️⃣ Mostramos earlyYears y laterYears para comprobar que los valores son correctos.
console.log(earlyYears);
console.log(laterYears);

// 7️⃣ Sumamos earlyYears y laterYears y guardamos el total en myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears;

// 8️⃣ Guardamos mi nombre en minúsculas usando el método toLowerCase().
const myName = "Emiliano".toLowerCase();

// 9️⃣ Mostramos el resultado final usando interpolación de strings.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`
);
