class Coach {
  #name;
  #notEatMenu;
  #eatMenu = [];

  constructor(name) {
    this.#name = name;
  }
  
  getNotEatMenu(notEatsMenu) {
    this.#notEatMenu = notEatsMenu.split(',');
  }

  getName() {
    return this.#name;
  }
}

module.exports = Coach;
