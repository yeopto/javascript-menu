const { Console } = require('@woowacourse/mission-utils');

const InputView = {
  getUserInput(question, callback, redirectInput) {
    Console.readLine(question, (input) => {
      try {
        callback(input);
      } catch (err) {
        Console.print(err);
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
};

module.exports = InputView;
