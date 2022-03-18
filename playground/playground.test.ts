import assert from 'assert'

function getMaxsum(a: number[], k: number): number {
  let sum = 0
  let maxsum = 0
  for (let i = 0, l = a.length; i < l; i++) {
    sum += a[i]
    sum -= a[i - k] ?? 0
    maxsum = Math.max(maxsum, sum)
  }
  return maxsum
}

describe('', () => {
  test('', () => {
    assert(getMaxsum([2, 1, 5, 1, 3, 2], 3) === 9)
  })

  test('', () => {
    assert(getMaxsum([2, 3, 4, 1, 5], 2) === 7)
  })
})
