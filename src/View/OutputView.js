const { Console } = require('@woowacourse/mission-utils');

const OutputView  = {
  printStart() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printResult() {
    Console.print('\n메뉴 추천 결과입니다.');
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
  },

  printCategory(category) {
    category.unshift('카테고리');
    Console.print(`[ ${category.join(' | ')} ]`);
  },

  printMenu(name, menu) {
    menu.unshift(name);
    Console.print(`[ ${menu.join(' | ')} ]`);
  },

  printEnd() {
    Console.print('\n추천을 완료했습니다.');
    Console.close();
  }
};

module.exports = OutputView;
