const NotEatMenu = require('./NotEatMenu');
const RecommendMenu = require('./RecommendMenu');
const { SPLIT_CHARACTER } = require('../Constants/Constant');

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
    const menu = input.split(SPLIT_CHARACTER.comma);
    this.#notEatMenu = new NotEatMenu(menu);
  }

  getNotEatMenu() {
    return this.#notEatMenu.getNotEatMenu();
  }

  setRecommendMenu(menu) {
    this.#recommendMenu = new RecommendMenu(menu);
  }

  getRecommendMenu() {
    return this.#recommendMenu.getRecommendMenu();
  }
}

module.exports = Coach;
