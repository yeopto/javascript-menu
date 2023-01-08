const ERROR_MESSAGE = {
  nameError: '[ERROR] 코치이름은 2글자에서 4글자여야 합니다.',
  coachCountError: '[ERROR] 2명에서 5명까지만 식사가 가능합니다.',
  notEatCountError: '[ERROR] 못먹는 음식이 두개이상이면 안됩니다.',
};

const INPUT_MESSAGE = {
  coachName: '코치의 이름을 입력해 주세요. (, 로 구분)\n',
  notEatMenu: '(이)가 못 먹는 메뉴를 입력해 주세요.\n',
};

const OUTPUT_MESSAGE = {
  start: '점심 메뉴 추천을 시작합니다.\n',
  result: '\n메뉴 추천 결과입니다.',
  category: '카테고리',
  divisionOfDay: '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]',
  end: '\n추천을 완료했습니다.',
};

module.exports = {
  ERROR_MESSAGE,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
};
