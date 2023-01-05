const CategoryGenerator = require('../Utils/CategoryGenerator');
const OutputView = require('../View/OutputView');
const Category = require('../Model/Category');

class MenuController {
  #coaches;
  #category;

  startRecommendMenu() {
    const category = CategoryGenerator.generate();
    this.#category = new Category(category);

    OutputView.printStart();
  }
}

module.exports = MenuController;
