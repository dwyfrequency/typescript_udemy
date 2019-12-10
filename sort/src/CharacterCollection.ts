export class CharacterCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    const arr = this.data.split('');
    const temp = this.data[leftIdx];
    arr[leftIdx] = this.data[rightIdx];
    arr[rightIdx] = temp;
    this.data = arr.join('');
  }
}
