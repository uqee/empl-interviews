/*
  Given an integer number N > 0, return a number of ways to get N chicken nuggets from McDonalds, if they only sell packs of 6, 9 and 20, or undefined if it's not possible.
*/

// 18:15 -> + implementation 18:25 -> + debug 18:35 -> + details 18:50 -> + deduplicate 19:00

const numberOfWays = ((): ((n: number) => void) => {
  const availablePackSizes: number[] = [7, 9, 20]
  const alreadyCalculatedAnswers: Array<Array<Array<number | undefined>>> = [[[]]]
  // eslint-disable-next-line max-lines-per-function
  return (n: number): Array<Array<number | undefined>> => {
    const highestAlreadyCalculatedIndex: number = alreadyCalculatedAnswers.length
    if (n < highestAlreadyCalculatedIndex) return alreadyCalculatedAnswers[n]
    else {
      for (let i = highestAlreadyCalculatedIndex; i <= n; i++) {
        availablePackSizes.forEach((packSize: number): void => {
          const indexBeforeAddingTheCurrentPack: number = i - packSize
          if (
            indexBeforeAddingTheCurrentPack >= 0 &&
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            alreadyCalculatedAnswers[indexBeforeAddingTheCurrentPack] !== undefined
          ) {
            if (!alreadyCalculatedAnswers[i]) alreadyCalculatedAnswers[i] = []
            alreadyCalculatedAnswers[i].push(
              ...alreadyCalculatedAnswers[indexBeforeAddingTheCurrentPack].map((answer) => [
                ...answer,
                packSize,
              ]),
            )
          }
        })
      }
      if (alreadyCalculatedAnswers[n]) {
        for (const answer of alreadyCalculatedAnswers[n]) {
          answer.sort((a, b) => (a && b ? a - b : 0))
        }
        alreadyCalculatedAnswers[n] = Array.from(
          new Map(
            alreadyCalculatedAnswers[n].map((answer: Array<number | undefined>) => {
              return [answer.join(','), answer]
            }),
          ).values(),
        )
      }
      return alreadyCalculatedAnswers[n]
    }
  }
})()

for (let n = 0; n <= 50; n++) {
  console.log(n, ' -> ', numberOfWays(n))
}
