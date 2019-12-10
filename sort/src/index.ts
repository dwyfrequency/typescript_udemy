import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numberColl = new NumbersCollection([10, 4, -5, 0]);
const sorter = new Sorter(numberColl);
sorter.sort();

console.log(numberColl);
