// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     //C) FIX
//     // value: Number(prompt("Degrees celsius:")),
//     value: 10,
//   };

//   console.log(measurement);

//   // B) FIND
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY
// console.log(measureKelvin());

// //Using a DEbugger
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   debugger;
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// //A) Identify
// console.log(amplitudeBug);

// const printForecast = function (arr) {
//   let b = "";
//   for (let i = 0; i < arr.length; i++) {
//     b += `... ${arr[i]}°C in ${i + 1} days `;
//   }
//   return b;
// };

// console.log(printForecast([12, 5, -5, 0, 4]));


