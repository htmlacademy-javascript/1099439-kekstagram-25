function getRandomNumber(min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min); // Результат: целое число из диапазона "от...до"
}

const MAX_LENGTH_COMMENT = 140;
function isValidComment(comment, maxLength) {
  return comment.length <= maxLength; // Результат: true, если строка проходит по длине, и false — если не проходит
}


getRandomNumber(0, 10);
isValidComment('Комментарий', MAX_LENGTH_COMMENT);
