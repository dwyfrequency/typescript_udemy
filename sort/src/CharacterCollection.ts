export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    this.data = `${this.data.slice(0, leftIdx)}${this.data[rightIdx]}${
      this.data[leftIdx]
    }${this.data[rightIdx + 1]}`;
  }
}
