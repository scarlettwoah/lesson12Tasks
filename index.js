"use strict";

// 1. Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

let maxNum1 = 35;
let minNum1 = 15;

let count = 0;
let multiple = 6;

// with while

while (true) {
  const resultUser = Number(prompt("Enter you number! Number of attempts (3)"));
  count++;
  if (count > 3) {
    console.log("try again, you have reached 4 attempts");
    break;
  }
  if (resultUser > minNum1 && resultUser < maxNum1) {
    if (resultUser % multiple === 0) {
      console.log("Congrats, the number is correct");
      break;
    }
  }
}
console.log(count);

// -------

// with for

let maxNum2 = 35;
let minNum2 = 15;

let attempts = 4;

for (let i = 1; i < attempts; i++) {
  const result = Number(prompt("Enter you number! Number of attempts (3)"));
  if (result > minNum2 && result < maxNum2) {
    if (result % multiple === 0) {
      console.log("Congrats, the number is correct");
      break;
    }
  }
  console.log(`${i} attempts`);
}
