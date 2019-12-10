import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
    /*  */
    const { length } = this.collection;
    let swapped: boolean;
    do {
      swapped = false;
      for (let j = 0; j < length - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
          swapped = true;
        }
      }
    } while (swapped);
  }
}

// const sorter = new Sorter([10, 4, -5, 0]);

// const sorter1 = new Sorter([10, 4, 11, 0]);

// sorter.sort();
// sorter1.sort();
// console.log(sorter.collection);
// console.log(sorter1.collection);
