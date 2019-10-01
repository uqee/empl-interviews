const quaddouble = require('./index');

describe('required', () => {
  test('(45568411115, 11223344) -> true', () => {
    expect(quaddouble(45568411115, 11223344)).toBe(true);
  });

  test('(11112344445, 442253) -> true', () => {
    expect(quaddouble(11112344445, 442253)).toBe(true);
  });

  test('(12222345, 123452) -> false', () => {
    expect(quaddouble(12222345, 123452)).toBe(false);
  });

  test('(12345, 12345) -> false', () => {
    expect(quaddouble(12345, 12345)).toBe(false);
  });
});

describe('custom', () => {
  test('(4556841.1115, 0.11223344) -> false', () => {
    expect(quaddouble(4556841.1115, 0.11223344)).toBe(false);
  });

  test('(121122111222, 0) -> false', () => {
    expect(quaddouble(121122111222, 0)).toBe(false);
  });

  test('(1 / 3, 33) -> true', () => {
    expect(quaddouble(1 / 3, 33)).toBe(true);
  });

  test('(0b100001, 0b1001) -> false', () => {
    expect(quaddouble(0b100001, 0b1001)).toBe(false);
  });
});
