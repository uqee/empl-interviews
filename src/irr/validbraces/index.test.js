const validbraces = require('./index');

describe('required', () => {
  test('() -> true', () => {
    expect(validbraces('()')).toEqual(true);
  });

  test('[) -> false', () => {
    expect(validbraces('[)')).toEqual(false);
  });

  test('{}[]() -> true', () => {
    expect(validbraces('{}[]()')).toEqual(true);
  });

  test('([{}]) -> true', () => {
    expect(validbraces('([{}])')).toEqual(true);
  });

  test('())({}}{()][][ -> false', () => {
    expect(validbraces('())({}}{()][][')).toEqual(false);
  });
});

describe('custom', () => {
  test('(() -> false', () => {
    expect(validbraces('(()')).toEqual(false);
  });

  test('([)] -> false', () => {
    expect(validbraces('([)]')).toEqual(false);
  });

  test('{{}[[]}] -> false', () => {
    expect(validbraces('{{}[[]}]')).toEqual(false);
  });

  test('([{}()]({})([])) -> true', () => {
    expect(validbraces('([{}()]({})([]))')).toEqual(true);
  });

  test('((((((()))))))) -> false', () => {
    expect(validbraces('((((((())))))))')).toEqual(false);
  });
});
