// https://leetcode.com/problems/add-two-numbers/
// import assert from 'assert'

describe('', () => {
  function foo(l1: number[], l2: number[]): number[] {
    let sum: number
    let next: number = 0
    let i: number = 0
    const result: number[] = []
    while (l1[i] !== undefined || l2[i] !== undefined || next) {
      sum = (l1[i] ?? 0) + (l2[i] ?? 0) + (next ?? 0)
      result.push(sum % 10)
      next = sum > 9 ? 1 : 0
      i++
    }
    return result
  }

  test('', () => expect(foo([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]))
  test('', () => expect(foo([0], [0])).toEqual([0]))
  test('', () => expect(foo([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([8, 9, 9, 9, 0, 0, 0, 1]))
})
