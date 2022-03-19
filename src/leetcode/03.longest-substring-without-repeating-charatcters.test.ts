// https://leetcode.com/problems/longest-substring-without-repeating-characters/

describe('', () => {
  function foo(s: string): number {
    let ileft = 0
    let iright = 0
    let char
    let seen = new Set()
    let result = 0
    while (iright < s.length) {
      char = s[iright]
      if (!seen.has(char)) {
        seen.add(char)
        iright++
      } else {
        result = Math.max(result, iright - ileft)

        seen = new Set()
        ileft = iright
        while (ileft - 1 >= 0 && s[ileft - 1] !== char) {
          ileft--
          seen.add(s[ileft])
        }
      }
    }
    return result
  }

  test('', () => expect(foo('abcabcbb')).toEqual(3))
  test('', () => expect(foo('bbbbb')).toEqual(1))
  test('', () => expect(foo('pwwkew')).toEqual(3))
})
