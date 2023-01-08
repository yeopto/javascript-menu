class NotEatMenu {
  #notEatMenu;

  constructor(notEatMenu) {
    this.#notEatMenu = notEatMenu;
  }

  getNotEatMenu() {
    return this.#notEatMenu;
  }
}

module.exports = NotEatMenu;
