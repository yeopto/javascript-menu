class RecommandMenu {
  #recommendMenu;

  constructor(recommendMenu) {
    this.#recommendMenu = recommendMenu;
  }

  getRecommendMenu() {
    return this.#recommendMenu;
  }
}

module.exports = RecommendMenu;
