
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const mystery1 = [3, 7, 1, 6, 0, 1, 5, 7, 2, 4, 6, 8, 0, 9, 2];

// Batch 
const batch = [valid1, invalid1, mystery1];

// Function validateCred()
function validateCred(arr) {
  let sum = 0;
  let doubleDigit = false;

  for (let i = arr.length - 1; i >= 0; i--) {
    let digit = arr[i];

    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    doubleDigit = !doubleDigit;
  }

  return sum % 10 === 0;
}

// Function findInvalidCards()
function findInvalidCards(cards) {
  const invalidCards = [];
  for (let i = 0; i < cards.length; i++) {
    if (!validateCred(cards[i])) {
      invalidCards.push(cards[i]);
    }
  }
  return invalidCards;
}

// Function idInvalidCardCompanies()
function idInvalidCardCompanies(invalidCards) {
  const companies = [];
  for (let i = 0; i < invalidCards.length; i++) {
    switch (invalidCards[i][0]) {
      case 3:
        if (!companies.includes("Amex")) companies.push("Amex");
        break;
      case 4:
        if (!companies.includes("Visa")) companies.push("Visa");
        break;
      case 5:
        if (!companies.includes("Mastercard")) companies.push("Mastercard");
        break;
      case 6:
        if (!companies.includes("Discover")) companies.push("Discover");
        break;
      default:
        console.log("Company not found");
    }
  }
  return companies;
}

// Pruebas
const invalidCards = findInvalidCards(batch);
console.log(invalidCards);
console.log(idInvalidCardCompanies(invalidCards));
