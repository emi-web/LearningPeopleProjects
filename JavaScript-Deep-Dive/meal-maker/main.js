// 1. Crear un objeto vacío llamado menu
const menu = {
  // 2. Propiedad _meal (nombre del plato)
  _meal: "",
  // 3. Propiedad _price (precio del plato)
  _price: 0,

  // 5. Setter para meal (solo acepta strings)
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      this._meal = mealToCheck;
    }
  },

  // 7. Setter para price (solo acepta números)
  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      this._price = priceToCheck;
    }
  },

  // 9. Getter para mostrar el plato del día
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

// 8. Asignar valores usando los setters
menu.meal = "Spaghetti";
menu.price = 10;

// 11. Mostrar el resultado en consola usando el getter
console.log(menu.todaysSpecial);
