const { Console } = require('@woowacourse/mission-utils');
const { SPLIT_CHARACTER } = require('../Constants/Constant');
const { OUTPUT_MESSAGE } = require('../Constants/Message');

const OutputView  = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },

  printResult() {
    Console.print(OUTPUT_MESSAGE.result);
    Console.print(OUTPUT_MESSAGE.divisionOfDay);
  },

  printCategory(category) {
    category.unshift(OUTPUT_MESSAGE.category);
    Console.print(`[ ${category.join(SPLIT_CHARACTER.divisionLine)} ]`);
  },

  printMenu(name, menu) {
    menu.unshift(name);
    Console.print(`[ ${menu.join(SPLIT_CHARACTER.divisionLine)} ]`);
  },

  printEnd() {
    Console.print(OUTPUT_MESSAGE.end);
    Console.close();
  }
};

module.exports = OutputView;
