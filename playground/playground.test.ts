function clone<T extends Object>(value: T): T {
  if (typeof value === 'object' && value !== null) {
    const result = {} as T
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        result[key] = clone(value[key])
      }
    }
    return result
  } else {
    return value
  }
}

describe('', () => {
  const object = {
    a: 1,
    b: 'hello',
    c: {
      d: 'world',
    },
    e: {
      f: {
        g: 100,
      },
    },
  }

  test('', () => {
    expect(JSON.stringify(object) === JSON.stringify(clone(object))).toBeTruthy()
  })

  test('', () => {
    expect(object !== clone(object)).toBeTruthy()
  })
})
