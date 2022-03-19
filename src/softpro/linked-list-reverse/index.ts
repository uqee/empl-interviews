class Item<TValue = unknown> {
  // eslint-disable-next-line no-use-before-define
  public next: Item<TValue> | undefined
  public value: TValue

  public constructor(value: TValue) {
    this.next = undefined
    this.value = value
  }
}

export class List<TValue = unknown> {
  private head: Item<TValue> | undefined

  public constructor(size: number, generateValue: () => TValue) {
    let i: number = size
    let item: Item<TValue> | undefined
    let tail: Item<TValue> | undefined
    while (--i >= 0) {
      item = new Item(generateValue())
      if (tail) tail.next = item
      else this.head = item
      tail = item
    }
  }

  public reverse(): this {
    let current: Item<TValue> | undefined = this.head
    let next: Item<TValue> | undefined
    let prev: Item<TValue> | undefined

    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }

    this.head = prev
    return this
  }

  public values(): TValue[] {
    const values: TValue[] = []
    let item: Item<TValue> | undefined = this.head
    while (item) {
      values.push(item.value)
      item = item.next
    }
    return values
  }
}
