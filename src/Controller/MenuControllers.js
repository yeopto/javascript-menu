const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validation = require('../Utils/Validation');

class MenuController {
  #coach;
  #coachGroup;

  start() {
    OutputView.printStart();
    this.getCoachesName();
  }

  getCoachesName() {
    InputView.readCoachesName((coachesName) => {
      Validation.checkCoaches(coachesName);
    });
  }
}

module.exports = MenuController;
