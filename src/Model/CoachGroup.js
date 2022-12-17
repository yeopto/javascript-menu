class CoachGroup {
  #coachGroup = [];
  #dayCategories = [];
  
  constructor() {
    for (let i = 0; i < 5; i++) {
      let category = CategoryGenerator.generate();
      if (this.#checkCategoryOverlap(category)) {
        this.#dayCategories.push(category);
      }
    }
  }

  checkCategoryOverlap(category) {
    
  }
};

module.exports = CoachGroup;
