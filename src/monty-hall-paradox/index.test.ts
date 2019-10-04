import { GameStrategy, playMultipleTimes } from '.'

describe('default', () => {
  test('change', () => {
    const probabilityOnChange = playMultipleTimes(GameStrategy.CHANGE)
    expect(probabilityOnChange).toBeCloseTo(2 / 3)
  })

  test('insist', () => {
    const probabilityOnInsist = playMultipleTimes(GameStrategy.INSIST)
    expect(probabilityOnInsist).toBeCloseTo(1 / 3)
  })
})
