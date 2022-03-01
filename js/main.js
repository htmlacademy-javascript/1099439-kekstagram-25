function getRandomNumber(min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min); // Результат: целое число из диапазона "от...до"
}

const MAX_LENGTH_COMMENT = 140;
function measureComment(comment, MAX_LENGTH_COMMENT) {
  return comment.length <= MAX_LENGTH_COMMENT; // Результат: true, если строка проходит по длине, и false — если не проходит
}


getRandomNumber(0, 10);
measureComment('Комментарий', MAX_LENGTH_COMMENT);
