import { GameStrategy, playMultipleTimes } from '.'

describe('default', () => {
  test('change', () => {
    const probabilityOnChange = playMultipleTimes(GameStrategy.CHANGE)
    expect(probabilityOnChange).toBeCloseTo(2 / 3) // eslint-disable-line @typescript-eslint/no-magic-numbers
  })

  test('insist', () => {
    const probabilityOnInsist = playMultipleTimes(GameStrategy.INSIST)
    expect(probabilityOnInsist).toBeCloseTo(1 / 3) // eslint-disable-line @typescript-eslint/no-magic-numbers
  })
})
