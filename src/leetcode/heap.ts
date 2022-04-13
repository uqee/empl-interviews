class Heap {
  private static heapify(a: number[]): void {
    let swaps: number = 0

    const parent = (i: number): number => {
      if (i === 0) return 0
      else {
        return i % 2 === 0
          ? (i - 2) / 2 // i = 2p + 2
          : (i - 1) / 2
      } // i = 2p + 1
    }

    const swap = (a: number[], i1: number, i2: number): void => {
      const v = a[i1]
      a[i1] = a[i2]
      a[i2] = v
      swaps++
    }

    const bubble = (a: number[], i: number): void => {
      while (true) {
        const p = parent(i)
        if (a[i] > a[p]) {
          swap(a, i, p)
          i = p
        } else {
          break
        }
      }
    }

    for (let i = 0, l = a.length; i < l; i++) {
      bubble(a, i)
    }

    console.info(Math.round(swaps / a.length))
  }

  private readonly a: number[]

  public constructor(a: number[]) {
    const h: number[] = a.slice()
    Heap.heapify(h)

    this.a = h
  }

  public print(): void {
    let l = 1
    let i = 0
    while (i < this.a.length) {
      console.log(this.a.slice(i, i + l))
      i += l
      l *= 2
    }
  }
}

for (let i = 0; i < 8; i++) {
  const numbers: number[] = new Array(Math.pow(10, i)).fill(0).map((_, i) => i)
  const heap: Heap = new Heap(numbers)
  // heap.print()
}
