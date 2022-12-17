const Coach = require('../Model/Coach');

class CoachGroup {
  #coachGroup = [];
  #dayCategories = [];
  
  constructor(coachesName) {
    this.bindCoach(coachesName);
    // for (let i = 0; i < 5; i++) {
    //   let category = CategoryGenerator.generate();
    //   if (this.#checkCategoryOverlap(category)) {
    //     this.#dayCategories.push(category);
    //   }
    // }
  }

  bindCoach(coachesName) {
    const coaches = coachesName.split(',');
    coaches.forEach((coachName) => {
      this.#coachGroup.push(new Coach(coachName));
    });
  }

  checkCategoryOverlap(category) {
    
  }

  getCoachGroup() {
    return this.#coachGroup;
  }
};

module.exports = CoachGroup;
