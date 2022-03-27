describe('', () => {
  enum Direction {
    DOWN,
    UP,
  }

  class Heap {
    private static readonly Direction: typeof Direction = Direction
    private static readonly getIndexChildren = (i: number): number[] => [2 * i + 1, 2 * i + 2]
    private static readonly getIndexParent = (i: number): number =>
      (i % 2 === 1 ? i - 1 : i - 2) / 2

    private static heapifyParent(ns: number[], i: number, direction: Direction): void {
      if (i < 0) return

      let ilargest = i
      const [ileft, iright] = Heap.getIndexChildren(i)
      const imax = ns.length

      if (ileft < imax && ns[ileft] > ns[ilargest]) ilargest = ileft
      if (iright < imax && ns[iright] > ns[ilargest]) ilargest = iright

      if (ilargest !== i) {
        const tmp = ns[i]
        ns[i] = ns[ilargest]
        ns[ilargest] = tmp

        Heap.heapifyParent(
          ns,
          direction === Heap.Direction.DOWN ? ilargest : Heap.getIndexParent(i),
          direction,
        )
      }
    }

    private static print(ns: number[]): void {
      for (let i = 0; i < ns.length; i = 2 * i + 1) {
        console.log(ns.slice(i, 2 * i + 1))
      }
    }

    //

    private _ns: number[]

    public constructor(ns: number[] = []) {
      this._ns = []
      for (const n of ns) this.push(n)
    }

    //

    public getNs(): number[] {
      return this._ns.slice()
    }

    public pop(): number | undefined {
      const nfirst = this._ns[0]
      const nlast = this._ns.pop()
      if (this._ns.length !== 0 && nlast !== undefined) this._ns[0] = nlast
      Heap.heapifyParent(this._ns, 0, Heap.Direction.DOWN)
      return nfirst
    }

    public print(): void {
      Heap.print(this._ns)
    }

    public push(n: number): void {
      const length = this._ns.push(n)
      Heap.heapifyParent(this._ns, Heap.getIndexParent(length - 1), Heap.Direction.UP)
    }
  }

  test('', () => {
    const h = new Heap()

    for (let i = 1; i < 12; i++) h.push(i)
    expect(h.getNs()).toEqual([11, 10, 6, 7, 9, 2, 5, 1, 4, 3, 8])

    for (let i = 1; i < 12; i++) h.pop()
    expect(h.getNs()).toEqual([])
  })
})
