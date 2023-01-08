const { Random } = require('@woowacourse/mission-utils');
const { AllCategory } = require('../Constants/CategoryAndMenu');
const { COUNT, CATEGORY_AND_MENU_NUM } = require('../Constants/Constant');

const CategoryGenerator = {
  generate() {
    const category = [];

    while (category.length < CATEGORY_AND_MENU_NUM.max) {
      const categoryIndex = Random.pickNumberInRange(CATEGORY_AND_MENU_NUM.startNum, CATEGORY_AND_MENU_NUM.endNum) - COUNT.one;
      const newCategory = AllCategory[categoryIndex];

      if (category.filter((el) => el === newCategory).length < CATEGORY_AND_MENU_NUM.canOverlapNum) {
        category.push(newCategory);
      }
    }

    return category;
  },
};

module.exports = CategoryGenerator;
