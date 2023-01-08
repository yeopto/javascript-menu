const { ERROR_MESSAGE } = require('../Constants/Message');
const { SPLIT_CHARACTER, VALIDATION_NUM } = require('../Constants/Constant');

const Validation = {
  checkCoaches(coachesName) {
    const coaches = coachesName.split(SPLIT_CHARACTER.comma);
    this.checkCoachesName(coaches);
    this.checkCoachesCount(coaches);
  },
  
  checkCoachesName(coaches) {
    coaches.forEach((coachName) => {
      if (!(coachName.length >= VALIDATION_NUM.minCoachNameLength && coachName.length <= VALIDATION_NUM.maxCoachNameLength)) {
        throw new Error(ERROR_MESSAGE.nameError);
      }
    });
  },

  checkCoachesCount(coaches) {
    if (!(coaches.length >= VALIDATION_NUM.minTogetherEatPeopleCount && coaches.length <= VALIDATION_NUM.maxTogetherEatPeopleCount)) {
      throw new Error(ERROR_MESSAGE.coachCountError);
    }
  },

  checkNotEatMenu(notEatMenu) {
    const notEatMenuArr = notEatMenu.split(SPLIT_CHARACTER.comma);
    if (notEatMenuArr.length > VALIDATION_NUM.maxNotEatMenuCount) {
      throw new Error(ERROR_MESSAGE.notEatCountError);
    }
  }
};

module.exports = Validation;
