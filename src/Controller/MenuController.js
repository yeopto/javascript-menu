const CategoryGenerator = require('../Utils/CategoryGenerator');
const RecommendMenuGenerator = require('../Utils/RecommendMenuGenerator');
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validation = require('../Utils/Validation');
const { COUNT, SPLIT_CHARACTER } = require('../Constants/Constant');
const Category = require('../Model/Category');
const Coach = require('../Model/Coach');

class MenuController {
  #coaches;
  #category;

  startRecommendMenu() {
    const category = CategoryGenerator.generate();
    this.#category = new Category(category);

    OutputView.printStart();
    
    this.getCoachName();
  }

  getCoachName() {
    InputView.readCoachesName((names) => {
      Validation.checkCoaches(names);
      
      const coachNames = names.split(SPLIT_CHARACTER.comma);
      const coaches = [];

      coachNames.forEach((coachName) => {
        coaches.push(new Coach(coachName));
      });

      this.#coaches = coaches;

      this.getNotEatMenu(COUNT.zero);
    });
  }

  getNotEatMenu(index) {
    if (index === this.#coaches.length) return this.showRecommendMenu();
    InputView.readNotEatMenu((notEatMenus) => {
      Validation.checkNotEatMenu(notEatMenus);
      this.#coaches[index].setNotEatMenu(notEatMenus);
      this.getNotEatMenu(index + COUNT.one);
    }, this.#coaches[index].getName());
  }

  makeRecommendMenu() {
    const category = this.#category.getCategory();
    
    this.#coaches.forEach((coach) => {
      const notEatMenu = coach.getNotEatMenu();
      const recommendMenus = RecommendMenuGenerator.recommendMenu(category, notEatMenu);

      coach.setRecommendMenu(recommendMenus);
    });
  }

  showRecommendMenu() {
    this.makeRecommendMenu();
    OutputView.printResult();
    OutputView.printCategory(this.#category.getCategory());
    this.#coaches.forEach((coach) => {
      OutputView.printMenu(coach.getName(), coach.getRecommendMenu());
    });
    OutputView.printEnd();
  }
}

module.exports = MenuController;
