const add = (x: number = 1, y: number = 2): number => {
  return x + y;
};

function subtract(x: number = 1, y: number = 2): number {
  return x - y;
}

const logger = (...values: Array<any>): void => {
  console.log(...values);
};

logger("purp", 23, "e");

console.log(add(12));

const weather = {
  date: new Date(),
  temp: 72,
};

const logWeather = ({ date, temp }: { date: Date; temp: number }): void => {
  console.log(`${date}: ${temp}`);
};

const { date }: { date: Date } = weather;
// or just const { date }: { date: Date } = weather;

console.log(date);

logWeather(weather);
