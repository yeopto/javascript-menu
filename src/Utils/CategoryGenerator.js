const { Random } = require('@woowacourse/mission-utils');
const { AllCategory } = require('../Constants/CategoryAndMenu');

const CategoryGenerator = {
  generate() {
    const category = [];

    while (category.length < 5) {
      const categoryIndex = Random.pickNumberInRange(1, 5) - 1;
      const newCategory = AllCategory[categoryIndex];

      if (category.filter((el) => el === newCategory).length < 2) {
        category.push(newCategory);
      }
    }

    return category;
  },
};

module.exports = CategoryGenerator;
