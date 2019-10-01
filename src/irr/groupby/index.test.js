require('./index');

describe('required', () => {
  const arr = [1, 2, 3, 2, 4, 1, 5, 1, 6];
  const fn = (val => val % 3);

  test('default', () => {
    const a = arr.groupBy();
    const b = new Map([
      [1, [1, 1, 1]],
      [2, [2, 2]],
      [3, [3]],
      [4, [4]],
      [5, [5]],
      [6, [6]],
    ]);
    expect(a).toEqual(b);
  });

  test('custom', () => {
    const a = arr.groupBy(fn);
    const b = new Map([
      [1, [1, 4, 1, 1]],
      [2, [2, 2, 5]],
      [0, [3, 6]],
    ]);
    expect(a).toEqual(b);
  });
});

describe('custom', () => {
  const foo = () => {};
  const bar = { a: 42 };
  const arr = [
    1, NaN, 2, 'foo', null, 'bar', 0b1,
    'foo', NaN, undefined, null, 0, '', '',
    foo, bar, bar, foo, undefined, 652,
  ];
  const fn = (val => val % 3);
  const err = 'Not a function';

  test('null', () => {
    expect(() => arr.groupBy(null)).toThrowError(err);
  });

  test('invalid', () => {
    expect(() => arr.groupBy(42)).toThrowError(err);
  });

  test('default', () => {
    const a = arr.groupBy();
    const b = new Map([
      [1, [1, 1]],
      [NaN, [NaN, NaN]],
      [2, [2]],
      ['foo', ['foo', 'foo']],
      [null, [null, null]],
      ['bar', ['bar']],
      [undefined, [undefined, undefined]],
      [0, [0]],
      ['', ['', '']],
      [foo, [foo, foo]],
      [bar, [bar, bar]],
      [652, [652]],
    ]);
    expect(a).toEqual(b);
  });

  test('custom', () => {
    const a = arr.groupBy(fn);
    const b = new Map([
      [1, [1, 1, 652]],
      [NaN, [NaN, 'foo', 'bar', 'foo', NaN, undefined, foo, bar, bar, foo, undefined]],
      [2, [2]],
      [0, [null, null, 0, '', '']],
    ]);
    expect(a).toEqual(b);
  });

  test('immutable', () => {
    const a = arr;
    arr.groupBy(fn);
    expect(arr).toEqual(a);
  });
});
