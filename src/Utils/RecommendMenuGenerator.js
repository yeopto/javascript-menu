const { Random } = require('@woowacourse/mission-utils');
const { AllMenu } = require('./CategoryAndMenu');

const RecommendMenuGenerator = {
  recommendMenu(category, notEatMenu) {
    const recommendMenu = [];
    let index = 0;
    
    while (recommendMenu.length < 5) {
      const categoryMenus = AllMenu[category[index]];
      const todayCategoryMenu = this.shuffleAndPickMenu(categoryMenus);
      if (
        notEatMenu.includes(todayCategoryMenu) 
        || recommendMenu.includes(todayCategoryMenu)
      ) continue;
      recommendMenu.push(todayCategoryMenu);
      index += 1;
    }

    return recommendMenu;
  },

  shuffleAndPickMenu(categoryMenus) {
    const RandomIndex = Random.shuffle(
      Array(categoryMenus.length)
        .fill(1)
        .map((el, i) => el + i)
    )[0] - 1;

    return categoryMenus[RandomIndex];
  }
}

module.exports = RecommendMenuGenerator;
