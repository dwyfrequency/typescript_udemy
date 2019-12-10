import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

interface Sortable {
  length: number;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

const numberColl = new NumbersCollection([10, 4, -5, 0]);
const sorter = new Sorter(numberColl);
sorter.sort();

console.log(numberColl);
