"use strict";

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// }

// const country1 = describeCountry("Turkey", 85, "Ankara");
// const country2 = describeCountry("Germany", 83, "Berlin");
// const country3 = describeCountry("Finland", 6, "Helsinki");

// console.log(country1);
// console.log(country2);
// console.log(country3);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// console.log(percentageOfWorld1(85));
// console.log(percentageOfWorld1(33));
// console.log(percentageOfWorld1(1441));

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// console.log(percentageOfWorld2(85));
// console.log(percentageOfWorld2(33));
// console.log(percentageOfWorld2(1441));

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// console.log(percentageOfWorld3(85));
// console.log(percentageOfWorld3(33));
// console.log(percentageOfWorld3(1441));

// const describePopulation = (country, population) => {
//   const worldPercentage = percentageOfWorld3(population);
//   return `${country} has ${population} million people, which is about ${worldPercentage}% of the world.`;
// };

// console.log(describePopulation("Turkey", 85));
// console.log(describePopulation("Germany", 83));
// console.log(describePopulation("China", 1441));

// const populations = [85, 83, 1441, 33];

// if (populations.length === 4) console.log("true");
// else console.log("false");

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// console.log(percentages);

// const neighbours = ["Syria", "Iraq", "Iran", "Armenia", "Georgia"];
// neighbours.push("Utopia");
// neighbours.pop("Utopia");

// if (!neighbours.includes("Germany"))
//   console.log("Probably not a central european country :d");

// neighbours[neighbours.indexOf("Iraq")] = "Irak";
// console.log(neighbours);

// const myCountry = {
//   country: "Turkey",
//   capital: "Ankara",
//   language: "Turkish",
//   population: 85,
//   neighbours: neighbours,
//   describe: function () {
//     return console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length > 0 ? false : true;
//   },
// };

// myCountry.population += 2;
// myCountry["population"] -= 2;
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.isIsland);

// for (let i = 1; i <= 1; i++) {
//   console.log(`Voter number ${i} is currently voting.`);
// }

// const percentages2 = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   if (listOfNeighbours[i].length > 1) {
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//       console.log(listOfNeighbours[i][j]);
//     }
//   } else {
//     console.log(listOfNeighbours[i][0]);
//   }
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

const averageBill = calcAverage(bills);
console.log(averageBill);
