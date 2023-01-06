const NotEatMenu = require("./NotEatMenu");

class Coach {
  #name;
  #notEatMenu;
  #recommendMenu;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setNotEatMenu(input) {
    const menu = input.split(',')
    this.#notEatMenu = new NotEatMenu(menu);
  }
}

module.exports = Coach;
