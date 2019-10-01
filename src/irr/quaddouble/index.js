function checker(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  return (digit) => {
    const re4 = new RegExp(`${digit}{4}`);
    const re2 = new RegExp(`${digit}{2}`);
    return re4.test(str1) && re2.test(str2);
  };
}

module.exports = function quaddouble(num1, num2) {
  const check = checker(num1, num2);
  for (let i = 0; i <= 9; i++) if (check(i)) return true;
  return false;
};

/*
 * Примечание:
 * можно было бы смотреть по одной цифре в цикле только арифметикой,
 * и сохранять найденные значения в хеш таблицу (можно в объект или массив),
 * может быть немножко быстрее бы работало (хотя хз, это надо тестировать),
 * но зато так код гораздо короче и поддерживаемее.
 */
