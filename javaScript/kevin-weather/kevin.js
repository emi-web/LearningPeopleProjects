//kelvin constant forecast
const kelvin = 0;
//convert kelvin to Celsius
const celsius = kelvin - 273;
//formule to fahereheit
let fahrenheit = celsius * (9 / 5) + 32;
// fahrenheitt
fahrenheit = Math.floor(fahrenheit);

console.log(`the temperature is${fahrenheit} degress fahrenheit `);
