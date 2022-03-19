import assert from 'assert'

describe('', () => {
  function foo(): number {
    return 42
  }

  test('', () => assert(foo() === 42))
})
