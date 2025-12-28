// 6️⃣ Hacemos que name sea global
const name = "Nala";

// 1️⃣ Función para obtener un evento aleatorio
const getRandEvent = () => {
  // 11️⃣ random dentro de la función para que cada llamada sea independiente
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

// 2️⃣ Función que devuelve los días de entrenamiento según el evento
const getTrainingDays = (event) => {
  // declaramos days aquí para que tenga scope dentro de la función
  let days;

  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }

  return days;
};

// 5️⃣ Función para mostrar el evento del atleta
const logEvent = (athleteName, event) => {
  console.log(`${athleteName}'s event is: ${event}`);
};

// 5️⃣ Función para mostrar los días de entrenamiento del atleta
const logTime = (athleteName, days) => {
  console.log(`${athleteName}'s time to train is: ${days} days`);
};

// Ejecutamos para Nala
const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

// 9️⃣ Probamos para otro competidor
const name2 = "Warren";
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);

logEvent(name2, event2);
logTime(name2, days2);
