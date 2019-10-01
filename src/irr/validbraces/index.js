const round = new RegExp(/\(\)/, 'g');
const square = new RegExp(/\[]/, 'g');
const curly = new RegExp(/\{\}/, 'g');
const empty = '';

module.exports = function validbraces(input) {
  let str = input.slice(0);
  let length = 0;
  while (str.length !== length) {
    length = str.length;
    str = str
      .replace(round, empty)
      .replace(square, empty)
      .replace(curly, empty);
  }
  return !length;
};

/*
 * Примечание:
 *
 * O(n^2) конечно не очень, зато коротко и просто,
 * и в требованиях к решению нет ничего кроме тестов.
 *
 * Быстрее будет стандартный скобочный алгоритм с использованием стека
 * (push на открытии скобки, pop и проверка корректности на закрытии).
 */
