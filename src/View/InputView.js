const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../Constants/Message');

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
      INPUT_MESSAGE.coachName,
      callback,
      this.readCoachesName.bind(this),
    );
  },

  readNotEatMenu(callback, name) {
    this.getUserInput(
      `\n${name}+ ${INPUT_MESSAGE.notEatMenu}`,
      callback,
      this.readNotEatMenu.bind(this),
      name
    );
  },
};

module.exports = InputView;
