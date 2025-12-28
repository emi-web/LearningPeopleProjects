// 1️⃣ Función que devuelve las horas de sueño según el día
const getSleepHours = (day) => {
  switch (day.toLowerCase()) {
    case "monday":
      return 8;
    case "tuesday":
      return 7;
    case "wednesday":
      return 6;
    case "thursday":
      return 7;
    case "friday":
      return 6;
    case "saturday":
      return 9;
    case "sunday":
      return 8;
    default:
      return 0;
  }
};

// 4️⃣ Función que calcula las horas reales de sueño en la semana
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

// 6️⃣ Función que calcula las horas ideales de sueño en la semana
const getIdealSleepHours = () => {
  const idealHours = 8; // horas ideales por noche
  return idealHours * 7;
};

// 8️⃣ Función que calcula la deuda de sueño
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  // 9️⃣ Comparaciones y resultados
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } more hours of sleep than needed.`
    );
  } else {
    console.log(
      `You should get some rest. You slept ${
        idealSleepHours - actualSleepHours
      } hours less than you should have.`
    );
  }
};

// 🔚 11️⃣ Iniciamos el programa
calculateSleepDebt();
