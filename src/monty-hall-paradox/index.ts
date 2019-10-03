export enum GameStrategy {
  CHANGE,
  INSIST,
}

const defaultNumberOfBoxes: number = 3
const defaultNumberOfPlays: number = 1e4

const getRandomBox = (numberOfBoxes: number): number => {
  return Math.floor(Math.random() * numberOfBoxes)
}

const getRandomBoxExcept = (numberOfBoxes: number, ...forbiddenBoxes: number[]): number => {
  let box: number
  do {
    box = getRandomBox(numberOfBoxes)
  } while (forbiddenBoxes.includes(box))
  return box
}

const playOnce = (gameStrategy: GameStrategy, numberOfBoxes: number): boolean => {
  const prizeBox: number = getRandomBox(numberOfBoxes)
  const firstGuessBox: number = getRandomBox(numberOfBoxes)
  const emptyBox: number = getRandomBoxExcept(numberOfBoxes, prizeBox, firstGuessBox)
  const secondGuessBox: number =
    gameStrategy === GameStrategy.CHANGE
      ? getRandomBoxExcept(numberOfBoxes, firstGuessBox, emptyBox)
      : firstGuessBox
  return secondGuessBox === prizeBox
}

export const playMultipleTimes = (
  gameStrategy: GameStrategy,
  numberOfBoxes: number = defaultNumberOfBoxes,
  numberOfPlays: number = defaultNumberOfPlays,
): number => {
  let score: number = 0
  let i: number = numberOfPlays
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  while (--i >= 0) score += playOnce(gameStrategy, numberOfBoxes) ? 1 : 0
  return score / numberOfPlays
}
