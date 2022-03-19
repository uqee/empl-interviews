/* eslint-disable @typescript-eslint/no-non-null-assertion */

// https://leetcode.com/problems/two-sum
// import assert from 'assert'

describe('', () => {
  function foo(nums: number[], sum: number): number[] {
    const seen = new Map<number, number>()
    for (let i = 0, l = nums.length; i < l; i++) {
      const n = nums[i]
      const complement = sum - n
      if (seen.has(complement)) return [seen.get(complement)!, i]
      else seen.set(n, i)
    }
    return []
  }

  test('', () => expect(foo([2, 7, 11, 15], 9)).toEqual([0, 1]))
  test('', () => expect(foo([3, 2, 4], 6)).toEqual([1, 2]))
  test('', () => expect(foo([3, 3], 6)).toEqual([0, 1]))
})
