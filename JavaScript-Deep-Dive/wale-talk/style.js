const input = "singing on the street";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
}

const resultString = resultArray.join("").toUpperCase();
console.log(resultString); // Mostrará todas las vocales en mayúsculas
