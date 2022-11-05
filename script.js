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

// function checkSpam(str) {
//   str = str.toLowerCase();
//   if (str.includes("viagra") || str.includes("xxx")) {
//     return true;
//   } else return false;
// }
// console.log(checkSpam("hsudn c ijs s cc xxx"));

// function truncate(str, maxlength) {
//   if (str.length >= maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   }
// }

// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// console.log(extractCurrencyValue("$120") === 120);

// let styles = ["Джаз", "Блюз"];
// console.log(styles.push("Рок-н-ролл"));
// console.log(styles.splice(1, Math.floor((styles.length - 1) / 2), "classic"));
// console.log(styles.shift());
// styles.unshift("rap", "raggy");
// console.log(styles);

// function camelize(str) {
//   let arr = str.split("-");
//   console.log(arr);
//   let newArr = arr.map((item, index) =>
//     index != 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item
//   );
//   return newArr.join("");
// }

// console.log(camelize("-ollist-style-image-ul-yi"));

// let arrq = [5, 3, 8, 1, 1, 2, 3, 1, 2, 9];

// function filterRange(arr, a, b) {
//   let filterArr = arr.filter((item) => item >= a && item <= b);
//   return filterArr;
// }

// console.log(filterRange(arr, 1, 4));

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] < a || arr[i] > b) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// console.log(arrq.length);
// console.log(filterRangeInPlace(arrq, 1, 4));
// console.log(arrq.length);

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//   return arr.slice().sort();
//
// let sorted = copySorted(arr);
// alert(sorted);
// alert(arr);

// function Calculator() {
//   this.calculate = function (str) {
//     let split = str.split(" ");
//     let a = +split[0];
//     let op = +split[1];
//       let b = +split[2];

//   };
// }

// let calc = new Calculator();
// alert(calc.calculate("3 + 7"));
// let a = "1+2";
// console.log(a.split("+"));

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);

// alert(names);

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//   fullname: `${item.name} ${item.surname}`,
//   id: item.id,
// }));

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullname);

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// function getAverageAge(arr) {
//   return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
// }

// alert(getAverageAge(arr));

// function unique(arr) {
//   let res = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];

// alert(unique(strings));

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// function groupById(arr) {
//   return arr.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
// }

// let usersById = groupById(users);

// console.log(usersById);

// function createUser(uName, uAge) {
//   return {
//     name: uName,
//     age: uAge,
//     displayInfo() {
//       console.log(this.name + " " + this.age);
//     },
//     displayCarInfo(car) {
//       console.log(this.name + " " + car.name + " " + car.cyear);
//     },
//   };
// }

// function createCar(car, year) {
//   return {
//     name: car,
//     cyear: year,
//   };
// }

// let renault = createCar("logan", 2020);

// let tom = createUser("Tom", 25);
// tom.displayInfo();
// console.log(tom.name);

// tom.displayCarInfo(renault);

// function User(uName, age) {
//   this.name = uName;
//   let _age = age;
//   this.displayInfo = function () {
//     console.log(this.name + " " + this.age);
//   };
//   this.getAge = function () {
//     return _age;
//   };
//   this.setAge = function (age) {
//     _age = age;
//   };
// }

// let tom = new User("Tom", 25);
// console.log(tom._age);
// console.log(tom.getAge());
// console.log(tom.setAge(12));
// console.log(tom.getAge());

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//   fullName: item.name + " " + item.surname,
//   id: item.id,
// }));

// console.log(usersMapped);

// function unique(arr) {
//   let set = new Set(arr);
//   return Array.from(set);
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
//   4,
// ];

// console.log(unique(values));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let map = new Map();
//   for (let item of arr) {
//     let newArr = item.toLowerCase().split("").sort().join("");
//     map.set(newArr, item);
//   }
//   return Array.from(map.values());
// }
// console.log(aclean(arr));


// function descendingOrder(n){
//   if(isFinite(n)&& n>=0){
// 	  return n.toString().split('').sort((a,b)=>b-a).join('');
//   }
// }
// console.log(descendingOrder(3401345));

// const div = document.createElement('div');
// console.log(div);
// div.classList.add('wrapper');
// let body = document.querySelector('body');
// body.appendChild(div);
//
// const header = document.createElement('h1');
// header.textContent = 'DOM (Document Object Model)';
//
// div.insertAdjacentElement("beforebegin", header);
//
// let ul = `<ul>
// <li>один</li>
// <li>два</li>
// <li>три</li>
// </ul>`
//
// div.innerHTML = ul;
//
// let img = document.createElement('img');
// img.src = 'https://picsum.photos/240';
// console.log(img);
// img.width = 240;
// img.classList.add('super');
// img.alt = 'superman';
// div.appendChild(img);
//
// const elemHTML = `<div class="pDiv">
// <p>Параграф1</p>
// <p>Параграф2</p>
// </div>`
//
//
// const ulList = div.querySelector('ul')
// ulList.insertAdjacentHTML('beforebegin', elemHTML);
// const secondP = document.querySelector('.pDiv').children[1];
// console.log(secondP);
// secondP.classList.add('text');
// const firstP = document.querySelector('.pDiv').firstElementChild;
// firstP.remove();
//
// const generationAutoCard = (brand, color, year) => {
// 	return `
// 		<div class="autoCard">
// 			<h2>${brand}</h2>
// 			<p>Автомобиль ${brand} -${year} года. Возраст авто - ${new Date().getFullYear()- year} лет.</p>
// 			<p>Цвет: ${color}</p>
// 			<button type="button" class="btn">Удалить</button>
// 		</div>`
// }
//
// let autosDiv = document.createElement('div');
// autosDiv.classList.add('autos');
// console.log(autosDiv);
//
// const carsList =  [
// 	{brand:'Tesla', year: 2015, color:'red'},
// 	{brand:'Lexus', year: 2016, color:'silver'},
// 	{brand:'Nissan', year: 2012, color:'black'},
// ]
//
// let carsHTML = carsList.map(car => {
// 	return generationAutoCard(car.brand, car.color, car.year)
// }).join('')
//
// console.log(carsHTML);
//
// autosDiv.innerHTML = carsHTML;
// div.insertAdjacentElement("beforebegin", autosDiv);
//
// const buttons = document.querySelectorAll('.btn');
// console.log(buttons);
//
// function handleClick(event){
// const currentButton = event.currentTarget;
// currentButton.closest('.autoCard').remove();
//
// }
//
// buttons.forEach((b)=>b.addEventListener('click',handleClick))

// let div = document.createElement('div');
// div.classList.add('wrapper');
// console.log(div);
// let body = document.querySelector('body');
// body.appendChild(div);
//
// const carsList =  [
// 	{brand:'Tesla', year: 2015, color:'red'},
// 	{brand:'Lexus', year: 2016, color:'silver'},
// 	{brand:'Nissan', year: 2012, color:'black'},
// ]
//
// function getCarsInfo(brand, year,color){
// 	return `<div class="autoCard">
// 					<h2>${brand}</h2>
// 					<p>Автомобиль ${brand} -${year} года. Возраст авто - ${new Date().getFullYear()- year} лет.</p>
// 					<p>Цвет: ${color}</p>
// 					<button type="button" class="btn">Удалить</button>
// 		 		</div>`
// }
//
// let carsHTML = carsList.map(car => getCarsInfo(car.brand, car.year, car.color)).join('');
// console.log(carsHTML);
//
// div.insertAdjacentHTML('beforebegin',carsHTML);
//
// const buttons = document.querySelectorAll('.btn');
//
// function removeCard(e){
// 	let currentBtn = e.currentTarget;
// 	currentBtn.closest('.autoCard').remove()
// }
//
// buttons.forEach(b=> b.addEventListener('click',removeCard))

// let list = document.querySelectorAll('li');
// for(let i = 0;i<list.length;i++){
// 		let childLi = list[i].querySelectorAll('li').length;
// 		if(childLi){
// 			list[i].firstChild.data += `[${childLi}]`;
// 		}
// }


// function createCalendar() {
// 	let calendar = document.querySelector('#calendar');
// 	console.log(calendar)
// 	let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// 	let counter = 1;
// 	let createTable = document.createElement('table');
// 	createTable.classList.add('bigTable')
// 	calendar.append(createTable);
// 	let table = document.querySelector('.bigTable')
// 	for (let day of days) {
// 		let createTh = document.createElement('th');
// 		createTh.innerHTML = day;
// 		table.append(createTh);
// 	}
// 	for(let i=0;i<=4;i++){
// 		let createTr = document.createElement('tr');
// 		table.append(createTr);
// 		let rows = table.rows;
// 		for(let j=0;j<7;j++){
// 			let createTd = document.createElement('td');
// 			createTd.innerHTML = counter;
// 			counter++;
// 			if(counter<=32){
// 				rows[i].append(createTd);
// 			}else{
// 				createTd.innerHTML = ' ';
// 				rows[i].append(createTd);
// 			}
// 		}
// 	}
// }
//
// createCalendar();


// let body = document.querySelector('body');
// let clock = document.createElement('div');
// body.prepend(clock);
// let hours = document.createElement('span');
// hours.classList.add('red')
// hours.textContent = 'hh:';
// clock.append(hours);
// let min = document.createElement('span');
// min.textContent = 'mm:';
// min.classList.add('green')
// clock.append(min);
// let sec = document.createElement('span');
// sec.textContent = 'ss';
// sec.classList.add('blue');
// clock.append(sec);
//
//
// let timer;
// function clockStart(){
// 	timer = setInterval(returnDate,1000)
// 	returnDate();
// }
// 	function returnDate(){
// 		 let h, m, s;
// 		let date = new Date();
// 		s = date.getSeconds();
// 		if(s<10){s = '0'+s}
// 		h = date.getHours();
// 		if(h<10){h = '0'+h}
// 		m = date.getMinutes();
// 		if(m<10){m = '0'+m}
// 		sec.innerHTML = s;
// 		min.innerHTML = m + ':';
// 		hours.innerHTML = h + ':';
// 	};
//
// function clockStop(){
// 	clearInterval(timer);
// };

// let table = document.querySelector('tbody');
// let rows = document.querySelectorAll('tbody>tr');
// let arr = Array.from(rows);
// let sort = arr.sort((a,b)=> a.innerHTML < b.innerHTML ? 1:-1);
// for(let i=0;i<sort.length; i++){
// 	rows[i].remove()
// }
// for(let i=0;i<sort.length; i++){
// 	table.insertAdjacentElement('afterbegin', sort[i]);
// }

// let table = document.querySelectorAll('tr');
// for (let i = 2; i < table.length; i++) {
// 	table = document.querySelectorAll('tr');
// 	for (let j = 1; i - j > 0; j++) {
// 		if (table[i].firstElementChild.textContent < table[i-j].firstElementChild.textContent) {
// 			table[i - j].before(table[i])
// 		}
// 	}
// }

// let shouldSwitch;
// let switching=true;
// let i;
// while(switching){
// 	switching = false;
// 	let rows = document.querySelectorAll('tr');
// 	console.log(rows)
// 	for (i = 1; i < (rows.length-1); i++) {
// 		shouldSwitch = true;
// 		console.log(rows.length);
// 		let x = rows[i].querySelectorAll("td")[0];
// 		console.log(x);
// 		let y = rows[i + 1].querySelectorAll("td")[0];
// 		console.log(y);
// 		if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
// 			shouldSwitch = true;
// 			break;
// 		}
// 	}
// 		if (shouldSwitch) {
// 			rows[i].parentElement.insertBefore(rows[i + 1], rows[i]);
// 			switching = true;
// 		}
// }

// function showNotification(options){
// 	let body = document.querySelector('body');
// 	let div = document.createElement('div');
// 	div.classList.add('notification');
// 	div.classList.add(options.className);
// 	div.innerHTML = options.html;
// 	body.append(div);
// 	div.style.position = 'absolute';
// 	div.style.top = options.top + 'px';
// 	div.style.right = options.right + 'px';
// 	setInterval(()=>div.classList.toggle("visible"),1000)
// }
//
// showNotification({
// 	top: 10, // 10px от верхней границы окна (по умолчанию 0px)
// 	right: 10, // 10px от правого края окна (по умолчанию 0px)
// 	html: "Hello!", // HTML-уведомление
// 	className: "welcome" // дополнительный класс для div (необязательно)
// });

// function showNotification(options) {
// 	let body = document.querySelector('body');
// 	let div = document.createElement('div');
// 	div.classList.add('notification');
// 	div.classList.add(options.className);
// 	div.innerHTML = options.html;
// 	body.append(div);
// 	div.style.position = 'absolute';
// 	div.style.top = options.top + 'px';
// 	div.style.right = options.right + 'px';
// 	setTimeout(() => div.remove(), 2000)
// }
// let i =1;
// setInterval(() => {
// 	showNotification({
// 		top: 10,
// 		right: 10,
// 		html: "Hello!" + i++,
// 		className: "welcome"
// 	});
// }, 4000)

// function printerError(s) {
// 	let inputArr = s.split('')
// 	let errColors = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];
// 	let errorArr = [];
// 	for(let i = 0;i<errColors.length-1;i++){
// 		for (let j=0;j<=inputArr.length;j++){
// 			if (errColors[i].includes(inputArr[j])){
// 				errorArr.push(inputArr[j]);
// 			}
// 		}
// 	}
// return `${errorArr.length}/${inputArr.length}`
// }
//
//
// s="aaabbbbhaijjjmw"
// console.log(printerError(s));


// const ball = document.querySelector('#ball');
// const field = document.querySelector('#field');
// let left = field.clientWidth/2 -ball.offsetWidth/2;
// ball.style.left =left + 'px';
// let tOp = field.clientHeight/2 -ball.offsetHeight/2;
// ball.style.top =tOp + 'px';


// let btn = document.querySelector('#hider');
// let text = document.querySelector('#text');
//
// btn.addEventListener('click',()=> text.style.display = 'none');

// let btn = document.querySelector('#hider');
// btn.addEventListener('click', ()=> btn.hidden = true);

// let field = document.querySelector('#field');
// let ball = document.querySelector('#ball');
//
// field.addEventListener('click', (event)=>{
// 	if(event.clientX > field.clientWidth-ball.clientWidth/2){
// 		let maxX = field.clientWidth - ball.clientWidth;
// 		ball.style.left = maxX+ 'px';
// 	}else if(event.clientX < ball.clientWidth){
// 		ball.style.left = 0+ 'px';
// 	}else{
// 		let left = event.clientX-ball.clientWidth/2;
// 		ball.style.left = left + 'px';
// 	}
// 	if(event.clientY>field.clientHeight-ball.clientHeight/2){
// 		let maxY = field.clientHeight - ball.clientHeight;
// 		ball.style.top = maxY + 'px';
// 	}else if(event.clientY < ball.clientHeight/2){
// 		ball.style.top = 0 +'px';
// 	}else{
// 		let tOp = event.clientY - ball.clientHeight/2;
// 		ball.style.top = tOp + 'px';
// 	}
// });


// let title = document.querySelector('span');
// let list = document.querySelector('ul');
//
// title.addEventListener('click', ()=>{
// 	list.classList.toggle('visible');
// 	if(list.classList.contains('visible')){
// 		title.classList.remove('open');
// 		title.classList.add('close');
// 	}else if(!list.classList.contains('visible')){
// 		title.classList.remove('close');
// 		title.classList.add('open');
// 	}
// })

// let cards = document.querySelectorAll('.pane');
//
// cards.forEach(card=>{
// 	card.addEventListener('click', ()=>card.remove())
// }


// let imgContainer = document.querySelector('.img-line');
// let leftBtn = document.querySelector('.left');
// let rightBtn = document.querySelector('.right');
// let move = 0;
//
// rightBtn.addEventListener('click', () => {
// 	if(move ==0 || move>-780){
// 		move -= 390;
// 	}else if(move==-780){
// 		move -= 130;
// 	}else if(move<=-910){
// 		move -= 0;
// 	}
// 	imgContainer.style.left = move +'px';
// })
//
// leftBtn.addEventListener('click', () => {
// 	if(move ==0){
// 		move += 0;
// 	}else if(move==-130) {
// 		move += 130;
// 	}else{
// 		move += 390;
// 	}
// 	imgContainer.style.left = move +'px';
// })
//

//
// let arr = [20,4,-3,0,1,4,5,67,8];
// let temp;
//
// for(let i= 0;i<arr.length;i++){
// 	for(let j= arr.length-1;j>=i;j--){
// 		if(arr[j]<arr[i]){
// 		temp = arr[j];
// 		arr[j] = arr[i];
// 		arr[i]=temp;
// 		}
// 	}
// }
//
// console.log(arr);

// let btn = document.querySelector('.btn');
// let input = document.querySelector('.input');
//
// btn.addEventListener('click',()=>{
// 	console.log('dv')
// 	if(input.type!= 'password'){
// 		input.type = 'password';
// 		btn.value = 'Show';
// 	}else if(input.type!='text'){
// 		input.type = 'text';
// 		btn.value = 'Hide';
// 	}
// })


let container = document.querySelector('#container');
console.log(container)
container.addEventListener('click', function(event){
	let target = event.target;
	console.log(target)
	if(!target.classList.contains('remove-button')) return;
	let div = target.closest('div');
	deleteDiv(div);
})

function deleteDiv(div){
	div.remove();
}