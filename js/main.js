/* eslint-disable no-unused-vars */
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Дарина',
  'Никита',
  'Глеб',
  'Егор',
  'Анна',
  'Владимир',
  'Михаил',
  'Макар',
  'Евгения',
  'Матвей',
  'Иван',
  'Вероника',
  'Станислав',
  'Арина',
  'Анастасия',
  'Артём',
  'Эмилия',
  'Дарья',
  'Давид',
  'Алиса'
];


function getRandomNumber(min, max) {
  return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min); // Результат: целое число из диапазона "от...до"
}


const MAX_LENGTH_COMMENT = 140;
function isValidComment(comment, maxLength) {
  return comment.length <= maxLength; // Результат: true, если строка проходит по длине, и false — если не проходит
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

function getComment() {
  const COUNT_COMMENT = getRandomNumber(1, 2);
  const message = Array.from({length: COUNT_COMMENT}, () => getRandomArrayElement(COMMENTS)).join(' ');

  if(!isValidComment(message, MAX_LENGTH_COMMENT)) {
    return message.substring(0, MAX_LENGTH_COMMENT);
  }
  return message;
}


const createComments = () => ({
  id: getRandomNumber(100, 999),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getComment(),
  name: getRandomArrayElement(NAMES)
});

let photoId = 0;
const createPhotoDescription = () => ({
  id: photoId += 1,
  url: `photos/${photoId}.jpg`,
  description: 'Описание фотографий генерируются случайным образом.',
  likes: getRandomNumber(15, 200),
  comments: createComments()
});

console.log(Array.from({length: 25}, createPhotoDescription));
