// function solution(str, ending) {
//   if (str == ending) return true;
//   return str.endsWith(ending);
// }

// console.log(solution("str", "tr"));

// function greet() {
//   return "hello world!";
// }

// function boolToWord(bool) {
//   if (bool == false) return "No";
//   if (bool == true) return "Yes";
// }

// console.log(boolToWord(true));

// let number = prompt("Vvedite chislo");

// if (number > 0) {
//   alert("1");
// } else if (number == 0) {
//   alert("0");
// } else if (number < 0) {
//   alert("-1");
// }

// let nameJS = prompt("Kakoe officialnoe nazvanie js");

// if (nameJS == "ecmascript") {
//   alert("Verno");
// } else {
//   alert("ne znaete?");
// }

// let result = a + b < 4 ? "Malo" : "Mnogo";

// let message =
//   login == "sotrudnik"
//     ? "Privet"
//     : login == "Director"
//     ? "Zdravstvuite"
//     : login == ""
//     ? "Net logina"
//     : "";

// if (age >= 14 && age <= 90) {
//   return true;
// }

// if (age < 14 || age > 90) {
//   return true;
// }

// if (!(age >= 14 && age <= 90)) {
//   return true;
// }

// let login = prompt("Who here?");

// if (login == "Admin") {
//   let password = prompt("password");
//   if (password === "I am main") {
//     alert("hello");
//   } else if (password === null || password === "") {
//     alert("cansel");
//   } else {
//     alert("Invalid password");
//   }
// } else if (login === null || login === "") {
//   alert("cansel");
// } else {
//   alert("i dont know you");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 != 0) continue;
//   console.log(i);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}`);
//   i++;
// }

// while (+prompt("enter number") <= 100) {}

// let n = 10;

// for (i = 1; i <= n; i++) {
//   for (j = 2; j <= i; j++) {
//     if (i % j == 0 && j < i) break;
//     else if (j === i) {
//       console.log(i);
//     }
//   }
// }

// if (browser == "Edge") {
//   console.log("You've got the edge");
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   console.log("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     console.log("0");
//     break;

//   case 1:
//     console.log("1");
//     break;
//   case 2:
//   case 3:
//     console.log("2 or 3");
//     break;
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

// function checkAge(age) {
//   age > 18 ? true : confirm("Родители разрешили?");
// }

// function min(a, b) {
//   if (a < b) return a;
//   if (a > b) return b;
// }

// function pow(a, b) {
//   if (a % 1 == 0 && b % 1 == 0) return a ** b;
// }

// console.log(pow(1, 3));

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// function makeNegative(num) {
//   return -num;
// }

// console.log(makeNegative(9));

// function check(a, x) {
//   return a.includes(x);
// }

// function oddOrEven(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   if (sum % 2 == 0) {
//     return "even";
//   } else return "odd";
// }

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// console.log(solution("world"));

// function greet(name) {
//   return `Hello, ${name} how are you doing today?`;
// }

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (fuelLeft * mpg >= distanceToPump) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(zeroFuel(120, 25, 2));

// function paperwork(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   } else return n * m;
// }

// console.log(paperwork(5, 5));

// let arr = [];
// let i = 1;
// while (i <= 20) {
//   if (i % 2 == 0) arr.push(i);

//   i++;
// }
// console.log(arr);

// for (let i = 30; i >= 1; i--) {
//   if (i % 3 == 0) console.log(i);
// }

// let arr = [];
// for (let i = 0; i <= 10; i++) {
//   console.log(i ** 2);
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16];
// let count = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) count++;
// }
// console.log(count);

// let str = "";
// for (i = 0; i <= 10; i++) {
//   console.log((str += "*"));
// }

// let count = 0;
// let out = document.querySelector(".outer");
// let flag = 3;

// while (count < 4) {
//   let count1 = 0;
//   while (count1 < 4) {
//     if (count1 < flag) {
//       out.innerHTML += "&nbsp";
//     } else {
//       out.innerHTML += "* ";
//     }
//     count1++;
//   }
//   flag--;
//   count++;
//   out.innerHTML += "<br>";
// }

// function findAverage(array) {
//   let sum = 0;
//   let average;
//   if (array.length == 0) {
//     return 0;
//   } else {
//     for (i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     console.log(sum);
//     return (average = sum / array.length);
//   }
// }

// console.log(findAverage([1, 2, 3, 4]));

// let location1 = 1;
// let location2 = 2;
// let location3 = 3;
// let guess;
// let guesses = 0;
// let hits = 0;
// let issunk = false;

// while (issunk === false) {
//   guess = prompt("vvedi koordinati");
//   if (guess <= 0 || guess > 6) {
//     alert("nekorrektno");
//   } else {
//     guesses += 1;
//     if (guess == location1 || guess == location2 || guess == location3) {
//       alert("popadanie");
//       hits += 1;
//       console.log(hits);
//       if (hits == 3) {
//         issunk = true;
//         alert("korabl potoplen");
//       }
//     }
//   }
// }

// function findShort(s) {
//   let str = s.split(" ");
//   let lengths = str.map((item) => item.length);
//   let min = lengths[0];
//   for (item of lengths) {
//     if (item < min) {
//       min = item;
//     }
//   }
//   return min;
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// function abbrevName(name) {
//   let arr = name.split(" ");
//   const str = arr
//     .map((word) => word[0])
//     .join(".")
//     .toUpperCase();
//   return str;
// }

// console.log(abbrevName("Nikolay Zhulin"));

// function areYouPlayingBanjo(name) {
//   if (name[0] == "r" || name[0] == "R") {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not play banjo`;
// }

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// alert(isEmpty(schedule));

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// let salaries = {};
// function sum(obj) {
//   let summ = 0;
//   for (let key in obj) {
//     summ += obj[key];
//   }
//   return summ;
// }
// console.log(sum(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
//   return menu;
// }

// console.log(multiplyNumeric(menu));

// let schedule = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// alert(isEmpty(schedule));

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule));

// let salaries = {};

// function sumSalaries(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == "number") {
//       obj[key] *= 2;
//     }
//   }
//   return obj;
// }

// console.log(multiplyNumeric(menu));

// let calculator = {
//   read() {
//     return (
//       (this.one = prompt("vvedi pervoe chislo")),
//       (this.two = prompt("vvedi vtoroe chislo"))
//     );
//   },
//   sum() {
//     return +this.one + +this.two;
//   },
//   mul() {
//     return +this.one * +this.two;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();

// function Calculator() {
//   this.read = function () {
//     return (
//       (this.one = prompt("vvedi pervoe chislo")),
//       (this.two = prompt("vvedi vtoroe chislo"))
//     );
//   };
//   this.sum = function () {
//     return +this.one + +this.two;
//   };
//   this.mul = function () {
//     return +this.one * +this.two;
//   };
// }

// let calculator = new Calculator();

// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt("vvedi chislo");
//   };
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// function smash(words) {
//   return words.join(" ");
// }

// console.log(smash(["hello", "amazing", "world"]));

// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf("needle")}`;
// }

// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );

// function summ() {
//   a = prompt("1");
//   b = prompt("1");
//   let sum = +a + +b;
//   alert(sum);
// }

// summ();
// function readNumber() {
//   let a = +prompt("vvedi chislo");
//   if (a.isFinite) {
//     alert(`chislo ${a}`);
//   } else if (a == null) {
//     alert(`chislo null`);
//   }
// }
// readNumber();

// function sumArray(array) {
//   //   console.log(array.length);
//   if (array == null || array.length == 0 || array.length == 1) {
//     return 0;
//   } else {
//     let max = array[0];
//     let min = array[0];
//     array.forEach(function (elem, index) {
//       if (index > 0) {
//         if (max < elem) {
//           max = elem;
//         }
//       }
//     });
//     array.forEach(function (elem, index) {
//       if (index > 0) {
//         if (min > elem) {
//           min = elem;
//         }
//       }
//     });
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum = sum + array[i];
//     }
//     return sum - min - max;
//   }
// }
// console.log(sumArray(null));

// function readNumber() {
//   let num;
//   do {
//     num = prompt("vvedi chislo");
//   } while (!isFinite(num));
//   return "Chislo:" + num;
// }
// console.log(readNumber());

// function ucFirst(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst("hjbjhbuhbihu"));

function checkSpam(str) {
  str = str.toLowerCase();
  if (str.includes("viagra") || str.includes("xxx")) {
    return true;
  } else return false;
}
console.log(checkSpam("hsudn c ijs s cc xxx"));
