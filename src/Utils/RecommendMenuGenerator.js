const { Random } = require('@woowacourse/mission-utils');
const { AllMenu } = require('../Constants/CategoryAndMenu');
const { COUNT, CATEGORY_AND_MENU_NUM } = require('../Constants/Constant');

const RecommendMenuGenerator = {
  recommendMenu(category, notEatMenu) {
    const recommendMenu = [];
    let index = COUNT.zero;
    
    while (recommendMenu.length < CATEGORY_AND_MENU_NUM.DayCount) {
      const categoryMenus = AllMenu[category[index]];
      const todayCategoryMenu = this.shuffleAndPickMenu(categoryMenus);
      if (
        notEatMenu.includes(todayCategoryMenu) 
        || recommendMenu.includes(todayCategoryMenu)
      ) continue;
      recommendMenu.push(todayCategoryMenu);
      index += COUNT.one;
    }

    return recommendMenu;
  },

  shuffleAndPickMenu(categoryMenus) {
    const RandomIndex = Random.shuffle(
      Array(categoryMenus.length)
        .fill(COUNT.one)
        .map((el, i) => el + i)
    )[COUNT.zero] - COUNT.one;

    return categoryMenus[RandomIndex];
  },
}

module.exports = RecommendMenuGenerator;
