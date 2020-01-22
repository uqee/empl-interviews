import { List } from '.'

describe('default', () => {
  const create = (size: number): List =>
    new List(size, (): number => Math.floor(Math.random() * 10))
  const verify = (list: List): void =>
    expect(
      list
        .values()
        .reverse()
        .join(','),
    ).toEqual(
      list
        .reverse()
        .values()
        .join(','),
    )

  test('size 0', () => verify(create(0)))
  test('size 1', () => verify(create(1)))
  test('size 2', () => verify(create(2)))
  test('size 4', () => verify(create(4)))
  test('size 1024', () => verify(create(1024)))
})
