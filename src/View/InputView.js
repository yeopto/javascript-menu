const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  getUserInput(question, callback, redirectInput, name) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);

        if (name) return redirectInput(callback, name)
        redirectInput(callback);
      }
    });
  },

  readCoachesName(callback) {
    this.getUserInput(
      '코치의 이름을 입력해 주세요. (, 로 구분)\n',
      callback,
      this.readCoachesName.bind(this),
    );
  },

  readNotEatMenu(callback, name) {
    this.getUserInput(
      `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
      callback,
      this.readNotEatMenu.bind(this),
      name
    );
  },
};

module.exports = InputView;
