/* eslint no-extend-native: ['error', { 'exceptions': ['Array'] }] */

function coalesce(fn) {
  if (fn !== undefined && typeof fn !== 'function') throw new TypeError('Not a function');
  return fn || (value => value);
}

function memoize(fn) {
  const cache = new Map();
  return (element) => {
    if (!cache.has(element)) cache.set(element, fn(element));
    return cache.get(element);
  };
}

function assembly(fn) {
  const groups = new Map();
  return (value) => {
    const key = fn(value);
    const group = groups.get(key) || [];
    group.push(value);
    groups.set(key, group);
    return groups;
  };
}

Array.prototype.groupBy = function groupBy(filter) {
  const fn = assembly(memoize(coalesce(filter)));
  return this.reduce((result, value) => fn(value), null);
};

/*
 * Примечание:
 *
 * В задании написано вернуть объект вида { 0: [...], 1: [...], 2: [...] }.
 * По факту возвращается Map, потому что:
 *
 * 1) у объекта не может быть числовых ключей (массив, конечно, тоже объект, но тогда
 * в нем будет куча пустых промежуточных значений, и массивы не записывают как { ... });
 *
 * 2) если использовать простой объект, то результаты функции фильтра будут
 * приводиться к строкам, поэтому если она вернет разный результат, одинаково приводящийся
 * к строке, он будет считаться одинаковым (например, все объекты будут
 * ключом '[object Object]');
 *
 * 3) На вопрос о возможности ES6 в решении мне явно ответили, что это только приветствуется.
 */
