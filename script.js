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

// const number = +prompt("?????????????? ?????????? ?????????? 0 ?? 3", "");
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
//     return confirm("???????????????? ???????????????????");
//   }
// }

// function checkAge(age) {
//   age > 18 ? true : confirm("???????????????? ???????????????????");
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
//   "???? ?????????????????",
//   () => alert("???? ??????????????????????."),
//   () => alert("???? ???????????????? ????????????????????.")
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
//     // ???????????????????? ?????????????? ??????????????????
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

// console.log(truncate("??????, ?????? ?????? ???????????????? ???? ?????????????? ???? ?????? ????????:", 20));

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// console.log(extractCurrencyValue("$120") === 120);

// let styles = ["????????", "????????"];
// console.log(styles.push("??????-??-????????"));
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

// let vasya = { name: "????????", age: 25 };
// let petya = { name: "????????", age: 30 };
// let masha = { name: "????????", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);

// alert(names);

// let vasya = { name: "????????", surname: "????????????", id: 1 };
// let petya = { name: "????????", surname: "????????????", id: 2 };
// let masha = { name: "????????", surname: "??????????????", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//   fullname: `${item.name} ${item.surname}`,
//   id: item.id,
// }));

// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullname);

// let vasya = { name: "????????", age: 25 };
// let petya = { name: "????????", age: 30 };
// let masha = { name: "????????", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);

// // ????????????: [vasya, masha, petya]
// alert(arr[0].name); // ????????
// alert(arr[1].name); // ????????
// alert(arr[2].name); // ????????

// let vasya = { name: "????????", age: 25 };
// let petya = { name: "????????", age: 30 };
// let masha = { name: "????????", age: 29 };

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
//   "????????????",
//   "????????????",
//   "????????",
//   "????????",
//   "????????",
//   "????????",
//   "????????????",
//   "????????????",
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

// let vasya = { name: "????????", surname: "????????????", id: 1 };
// let petya = { name: "????????", surname: "????????????", id: 2 };
// let masha = { name: "????????", surname: "??????????????", id: 3 };

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
// <li>????????</li>
// <li>??????</li>
// <li>??????</li>
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
// <p>????????????????1</p>
// <p>????????????????2</p>
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
// 			<p>???????????????????? ${brand} -${year} ????????. ?????????????? ???????? - ${new Date().getFullYear()- year} ??????.</p>
// 			<p>????????: ${color}</p>
// 			<button type="button" class="btn">??????????????</button>
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
// 					<p>???????????????????? ${brand} -${year} ????????. ?????????????? ???????? - ${new Date().getFullYear()- year} ??????.</p>
// 					<p>????????: ${color}</p>
// 					<button type="button" class="btn">??????????????</button>
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
// 	let days = ['????', '????', '????', '????', '????', '????', '????'];
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
// 	top: 10, // 10px ???? ?????????????? ?????????????? ???????? (???? ?????????????????? 0px)
// 	right: 10, // 10px ???? ?????????????? ???????? ???????? (???? ?????????????????? 0px)
// 	html: "Hello!", // HTML-??????????????????????
// 	className: "welcome" // ???????????????????????????? ?????????? ?????? div (??????????????????????????)
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
//
// let field = document.querySelector('#field');
// let ball = document.querySelector('#ball');
//
// field.addEventListener('click', (event)=>{
// 	console.log(event.clientY)
// 	if(event.clientX > field.clientWidth+field.offsetLeft+field.clientLeft-ball.clientWidth/2){
//
// 		let maxX = field.clientWidth - ball.clientWidth;
// 		ball.style.left = maxX+ 'px';
// 	}else if(event.clientX < field.offsetLeft+field.clientLeft+ball.clientWidth/2){
// 		ball.style.left = 0+ 'px';
// 	}else{
// 		let left = event.clientX-field.offsetLeft+field.clientLeft-ball.clientWidth;
// 		ball.style.left = left + 'px';
// 	}
// 	if(event.clientY+scrollY>field.clientHeight-ball.clientHeight/2){
// 		let maxY = field.clientHeight- ball.clientHeight;
// 		ball.style.top = maxY + 'px';
// 	}else if(event.clientY+scrollY < field.clientTop + ball.clientHeight/2){
// 		ball.style.top = 0 +'px';
// 	}else{
// 		let tOp = event.clientY-field.clientTop+scrollY  - ball.clientHeight/2;
// 		ball.style.top = tOp+ 'px';
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
// 	card.addEventListener('click', (e)=>{
// 		if(e.target.classList.contains('remove-button'))
// 		card.remove()
// 	})
// })


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


// let container = document.querySelector('#container');
// console.log(container)
// container.addEventListener('click', function(event){
// 	let target = event.target;
// 	console.log(target)
// 	if(!target.classList.contains('remove-button')) return;
// 	let div = target.closest('div');
// 	deleteDiv(div);
// })
//
// function deleteDiv(div){
// 	div.remove();
// }

// let table = document.querySelector('#grid');
//
// table.addEventListener('click', (event) => {
// 	let tr = document.querySelectorAll('tr');
// 	let type = event.target.dataset.type;
// 	let sortTable;
// 	if (type == 'string') {
// 		sortTable = Array.from(tr).slice(1).sort((a, b) => a.cells[1].innerHTML>b.cells[1].innerHTML?1:-1 );
// 	}
// 	if (type == 'number') {
// 		sortTable = Array.from(tr).slice(1).sort((a, b) => a.cells[0].innerHTML-b.cells[0].innerHTML);
// 	}
// 	table.tBodies[0].append(...sortTable);
//
// })


// let animalsList = document.querySelector('#tree')
//
// animalsList.addEventListener('click', (event)=>{
// 	let target = event.target.nextElementSibling;
// 	if(!target){
// 		return;
// 	}else if(target.tagName == 'UL'){
// 		target.hidden = !target.hidden;
// 	}
// })

// document.addEventListener('mouseover',(event)=> {
// 	let target = event.target;
// 	let id = event.target.dataset.tooltip;
// 	if (!id) return;
// 	let popUp = document.createElement('div');
// 	popUp.classList.add('tooltip');
// 	popUp.innerHTML = id;
// 	let btnPos = target.getBoundingClientRect();
// 	popUp.style.left = btnPos.left + 'px';
// 	target.prepend(popUp);
// 	if(scrollY>btnPos.top+popUp.offsetHeight){
// 		popUp.style.top = (btnPos.top+target.offsetHeight + 5) + 'px';
// }else{
// 		popUp.style.top = (btnPos.top - popUp.offsetHeight - 5) + 'px';
// 	}
// })
//
// document.addEventListener('mouseout',(event)=>{
// 	let id = event.target.dataset.tooltip;
// 	if(!id) return;
// 	let popUp = document.querySelector('.tooltip')
// 	popUp.remove();
// })

// function squareSum(numbers){
// 	let newArr=[];
// for(let number of numbers){
// 	newArr.push(number**2);
// }
// let sum=0;
// for(let num of newArr){
// 	sum+=num
// }
// return sum;
// }
// console.log(squareSum([1, 2, 2]))

// function reverseWords(str) {
// 	let reversArrOfStr = str.split(' ').map(a=>a.split('').reverse().join(''))
// 	return reversArrOfStr.join(' ');
// }
// reverseWords("This is an example!");

// let content = document.querySelector('#contents')
//
// function hrefCatcher(event){
// 	let target = event.target.closest('a');
// 	if(!target) return;
// 	let question = confirm('perehod?');
// 	if(question == false){
// 		event.preventDefault();
// 	}
// }
//
// content.addEventListener('click',hrefCatcher);

// let imgList = document.querySelector('#thumbs');
// let bigImg = document.querySelector('#largeImg');
//
// function changeImg(event){
// 	let target = event.target;
// 	if(!target.closest('a')) return;
// 	event.preventDefault();
//
// 	let aOfTarget = target.closest('a').href;
// 	bigImg.src=aOfTarget;
// }
// imgList.addEventListener('click', changeImg)

// function sum (numbers) {
// 	return numbers.reduce((sum,num)=>sum + num, 0)
// };
//
//
// console.log(sum ([1,2,3,4]));
//
// function getDivisorsCnt(n){
// let arr = [];
// for(let i = 1;i<=n;i++){
// 	if(n%i==0){
// 		arr.push(i);
// 	}
// }
// return arr.length;
// }
//
// console.log(getDivisorsCnt(10));

// let modalWindow = document.querySelector('#prompt-form-container');
// let btnForModal = document.querySelector('button');
// let form = document.querySelector('#prompt-form');
// let valueInput = document.querySelector('.val');
// let container = document.querySelector('.container')
// modalWindow.style.display = 'none';
// btnForModal.addEventListener('click', () => showPrompt('vvedite 4to-nibud', (value) => {
// 	if (value == null || value == '') {
// 		alert('???? ??????????: ' + null)
// 	} else {
// 		alert(value)
// 	}
// 	container.removeAttribute('inert');
// }))
//
// function showPrompt(html, callback) {
//
// 	let promptMessage = document.querySelector('#prompt-message');
// 	promptMessage.innerHTML = html;
// 	modalWindow.style.display = 'block';
// 	valueInput.focus();
// 	container.setAttribute('inert', 'true');
// 	form.addEventListener('submit', () => callback(valueInput.value))
// 	form.addEventListener('click', (event) => {
// 		let target = event.target
// 		if (target.value == '????????????') {
// 			callback(null)
// 			modalWindow.style.display = 'none';
// 			valueInput.value = '';
// 			container.removeAttribute('inert');
// 		}
// 	})
// }

// function arrayDiff(a, b) {
// 	let newArr = [];
// 	if(b.length===0){
// 		return a;
// 	}
// 	if (a.length > 0) {
// 		for (let i = 0; i < b.length; i++) {
// 			for (let j = 0; j < a.length; j++) {
// 				if (a[j] !== b[i]) {
// 					newArr.push(a[j])
// 				}
// 			}
// 		}
// 	}
// 	return newArr;
// }

// function arrayDiff(a, b) {
// 	return a.filter(item=>!b.includes(item))
// }
//
// arrayDiff([1, 2], [1])

// let calculator = {
// 	read:function(){
// 		this.a  = prompt('a')
// 		this.b = prompt('b')
// 	},
// 	sum:function(){
// 		return +this.a + +this.b
// 	},
// 	mul:function(){
// 		return this.a * this.b
// 	},
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// function evenOrOdd(number) {
// 	return (number%2==0)?'Even':'Odd'
// }
//
//
// console.log(evenOrOdd(8))

// function duplicateEncode(word) {
// 	let arr = word.toLowerCase().split('');
// 	return arr.map((w, ind) => {
// 		let newArr = [
// 			...arr.slice(0,ind),
// 			...arr.slice(ind+1)
// 		]
// 		console.log(newArr)
// 		return(
// 			newArr.includes(w)?')':'('
// 		)
// 	}).join('')
//
// }
//
// console.log(duplicateEncode("recede"))


//
// let myArray = ['one', 'two', 'three'];
// let myIndex = myArray.indexOf('two');
//
// if (myIndex !== -1) {
// 	myArray.splice(myIndex, 1);
// }
//
// console.log(myArray)

// function Calculator(){
// 	this.read=function(){
// 		this.a  = prompt('a')
// 		this.b = prompt('b')
// 	},
// 		this.sum=function(){
// 		return +this.a + +this.b
// 	},
// 	this.mul=function(){
// 		return this.a * this.b
// 	}
// }
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// function Accumulator(startValue) {
// 	this.value = startValue
// 	this.read = function () {
// 		this.value += +prompt('vvedi 4islo')
// 	}
// }
//
// let accumulator = new Accumulator(1); // ?????????????????? ???????????????? 1
//
// accumulator.read(); // ???????????????????? ?????????????????? ?????????????????????????? ???????????????? ?? ???????????????? ????????????????
// accumulator.read(); // ???????????????????? ?????????????????? ?????????????????????????? ???????????????? ?? ???????????????? ????????????????
// accumulator.read(); // ???????????????????? ?????????????????? ?????????????????????????? ???????????????? ?? ???????????????? ????????????????
// accumulator.read(); // ???????????????????? ?????????????????? ?????????????????????????? ???????????????? ?? ???????????????? ????????????????
// accumulator.read(); // ???????????????????? ?????????????????? ?????????????????????????? ???????????????? ?? ???????????????? ????????????????
// accumulator.read(); // ???????????????????? ?????????????????? ?????????????????????????? ???????????????? ?? ???????????????? ????????????????
//
// alert(accumulator.value); // ?????????????? ?????????? ???????? ????????????????

// function XO(str) {
// 	let xArr=[];
// 	let oArr=[];
// 	let arr = str.toLowerCase().split('');
// 	for(let i=0;i<=arr.length;i++){
// 		if(arr[i]=='x'){
// 			xArr.push(arr[i])
// 		}
// 		if(arr[i]=='o'){
// 			oArr.push(arr[i])
// 		}
// 	}
// 	return xArr.length==oArr.length?true:false
// }
//
// XO("xxOo");

// function persistence(num) {
// 	let numbers = String(num).split('');
// 	let counter = 0
// 	while (numbers.length>1) {
// 		numbers = numbers.reduce((acc, n) => (acc * n), 1)
// 		numbers = String(numbers).split('')
// 		counter++
// 	}
// 	return counter
// }
//
// persistence(999);

// function maps(x){
// 	return x.map(x=>x*2)
// }
//
// maps([1,2,3,4,5,6,7,8,9])
//
// function findUniq(arr) {
// 	return arr.find((item,ind)=>{
// if(item===arr.length-1){
// 	return item!==arr[ind-1]
// }else if(ind===0){
// 	return item!==arr[ind+1]&&item!==arr[ind+2]
// }else{
// 	return item!==arr[ind+1]&&item!==arr[ind-1]
// }
// 		return ind===0?item!==arr[ind+1]&&item!==arr[ind+2]:item!==arr[ind+1]&&item!==arr[ind-1]
// 	})
// }
//
//
// console.log(findUniq([ 3, 10, 3, 3, 3 ]))

// let user = {
// 	name: "John",
// 	years: 30
// };
//
// let {name, years, isAdmin = false} = user
//
// console.log(name)
// console.log(years)
// console.log(isAdmin)

// function addElementInArray(arr,el){
// 	arr[arr.length] = el;
// 	return arr;
// }
// console.log(addElementInArray([1,2,3,4,5],6))


// function invert(array) {
// 	return array.map(el=>-el)
// }
//
// console.log(invert([1,2,-3,4,5,6]))

// let isSquare = function (n) {
// 	return n>0?n%Math.sqrt(n)==0:n==0?true:false
// }
//
// console.log(isSquare(3))

// var uniqueInOrder=function(iterable){
// 	console.log([...iterable]);
// 	let arr;
// 	if(Array.isArray(iterable)){
// 		arr = iterable;
// 	}else if(typeof(iterable)=='number'){
// 		arr = String(iterable).split('')
// 	}else{
// 		arr = iterable.split('')
// 	}
// 	return arr.filter((el,i,ar)=>el!== ar[i+1])
// }
//
// console.log(uniqueInOrder(12333))


// let salaries = {
// 	"John": 100,
// 	"Pete": 300,
// 	"Mary": 250
// };
//
// let sum = 0;
// for(let num of Object.values(salaries)){
// 	sum+=num;
// }
// console.log(sum);
//
// let user = {
// 	name: 'John',
// 	age: 30
// };
//
// let count =(obj)=>{
// 	return Object.values(obj).length
// }
//
// alert( count(user) );

// function noSpace(x){
// return x.trim().split(' ').join('')
// }
//
// console.log(noSpace('8aaaaa dddd r     '))

// function isPangram(string) {
// 	let alphavite = 'abcdefghijklmnopqrstuvwxyz'
// 	let newStr = string.replace(/\s+/g, " ").split(' ').join('').toLowerCase()
// 	console.log(newStr)
// 	for (let i = 0; i < alphavite.length; i++) {
// 		if (newStr.indexOf(alphavite[i])===-1) {
// 			return false;
// 		}
//
// 	}
// 	return true;
// }
//
//
// console.log(isPangram("The quick brown fox jumps over the lazy dog."))

// const mulWord = (a) => {
// 	return  a.toLowerCase().split('').reduce((acc, item, ind) => {
// 		acc[ind] = item.toUpperCase();
// 		for (let i = 0; i < ind; i++) {
// 			acc[ind] += item;
// 		}
// 		return acc;
// 	}, []).join('-')
// }
//
//
// console.log(mulWord('abcD'))

// function Calculator(){
// 	this.operation={
// 		'+':(a,b)=>a+b,
// 		'-':(a,b)=>a-b,
// 	}
//
// 	this.calculate =function (exp){
// 		let expression = exp.split(' ');
// 		let a = +expression[0];
// 		let op = expression[1];
// 		let b = +expression[2];
//
// 		if(!op||isNaN(a)||isNaN(b)){
// 			return NaN
// 		}
//
// 		return this.operation[op](a,b);
// 	}
//
// 	this.addMethod=function(op, exp){
// 		this.operation[op] = exp;
// 	}
//
// }
//
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
//
// let result = powerCalc.calculate("2 + 3");
// console.log(( result )); // 8
// console.log(( powerCalc )); // 8


// function unique(arr) {
// 	let set = new Set(arr)
// 	return Array.from(set)
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
// 	"Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) );

// const aclean = (arr) => {
// 	let newArr = arr.map(a => a.toLowerCase().split('').sort().join(''));
// 	let set = new Set(newArr)
// 	let sortArr = Array.from(set)
// 	let result = [];
// 	for(let i = 0;i<newArr.length;i++){
// 		if(newArr.indexOf(sortArr[i])!==-1)
// 		result.push(newArr.indexOf(sortArr[i]))
// 	}
// 	let result2 = [];
// 	for(let j = 0; j<arr.length;j++){
// 		for(let k = 0; k<result.length;k++){
// 			if(j===result[k]){
// 				result2.push(arr[j])
// 			}
// 		}
// 	}
// 	return result2;
// 	}

// function aclean(arr) {
// 	let map = new Map();
//
// 	for (let word of arr) {
// 		// ?????????????????? ?????????? ???? ??????????, ?????????????????? ?? ???????????????????? ?????????? ?? ????????????
// 		let sorted = word.toLowerCase().split("").sort().join(""); // (*)
// 		map.set(sorted, word);
// 	}
//
// 	return Array.from(map.values());
// }
//
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// console.log(aclean(arr));
// &&

// function sum(n) {
//     let finalSum = 0
//     for (let i = 0; i <= n; i++) {
// 		finalSum= finalSum + i
//     }
//     return finalSum;
// }
//
// console.log(sum(100))
//
//
// function recursionSum(n) {
//     if(n===1) return 1
//     return n+recursionSum(n-1);
// }
//
// console.log(recursionSum(100));


// function factorial(n){
//     if(n===1)return 1;
//     return n*factorial(n-1);
// }
//
// console.log(factorial(5));

// function fib(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fib(n - 1) + fib(n - 2);
// }
//
// console.log(fib(7)); // 2

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


// function printList(list){
//
//         console.log(list.value)
//
//     if(list.next){
//         return printList(list.next)
//     }
// }
// function printList(list){
//     console.log(list.value)
//     if(list.next){
//          printList(list.next)
//     }
// }

// function printList(list) {
//  while(list){
//      console.log(list.value)
//      list = list.next
//  }
// }

// function printList(list) {
//     let arr=[];
//  while(list){
//      arr.push(list.value)
//      list = list.next
//  }
//
//  for (let i = arr.length-1; i>= 0; i--){
//      console.log(arr[i])
//  }
//
// }
// printList(list);

// let company = {
// //     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
// //     development: {
// //         sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
// //         internals: [{name: 'Jack', salary: 1300}]
// //     }
// // };
// //
// // function sumSalary(obj) {
// //     if (Array.isArray(obj)) {
// //         return obj.reduce(((acc, el) => acc += el.salary), 0)
// //     } else {
// //         let sum = 0;
// //         for (let seb in obj){
// //             console.log(obj[seb])
// //             sum += sumSalary(obj[seb])
// //         }
// //         return sum
// //     }
// // }
// //
// // console.log(sumSalary(company))\

// function sum(a){
//     return sum2=(b)=>{
//         return a+b
//     }
// }
//
// console.log(sum(5)(-1));

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// function inBetween(a,b){
//     return function(el){
//         if(a<=el&& b>=el){
//             return true
//         }
//     }
// }
//
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// function inArray(arr) {
//     return function (a) {
//         for (let el of arr) {
//             if (el === a) return true
//         }
//     }
// }

// alert(arr.filter(inArray([1, 3, 10]))); // 3,4,5,6

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(keyForSort){
//     if(keyForSort==='name'){
//         return function(a,b){
//            return a.name > b.name?1:-1
//         }
//     }
//     if(keyForSort==='age'){
//         return function(a,b){
//             return a.age - b.age
//         }
//     }
// }
//
// console.log(users.sort(byField('age')))

// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//         let shooter = function() {
//             let a =i
//             return function wrapper(){
//                alert( a );
//            }
//         };
//         shooters.push(shooter(i));
//         i++;
//     }
//     console.log(shooters)
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0](); // ?? 0-???? ?????????????? ?????????? ?????????? 10
// army[5]();

// function solution(string) {
//     return string.split('').map(elem=>elem===elem.toUpperCase()?` ${elem}`:elem).join('');
// }
//
// console.log(solution('camelCaseReally'))

// function makeArmy() {
//     let shooters = [];
//
//     let i = 0;
//     while (i < 10) {
//         let a = i
//             let shooter = function() { // ?????????????? shooter
//                 alert(i); // ???????????? ???????????????? ???????????????????? ??????????
//             };
//         shooters.push(shooter);
//         i++;
//     }
//
//     return shooters;
// }
//
// let army = makeArmy();
//
// army[0](); // ?? 0-???? ?????????????? ?????????? ?????????? 10
// army[5]();


// function countSmileys(arr) {
//     return arr.filter(el => (el[0] === ';' || el[0] === ':')
//         && ((el[1] === ('-') || el[1] === ('~')) && (el[2] === 'D' || el[2] === ')'))
//         || (el[0] === ';' || el[0] === ':')&&(el[1] === 'D' || el[1] === ')')).length
// }
//
// console.log(countSmileys([":---)", "))", ";~~D", ";D"]))

// function bouncingBall(h, bounce, window) {
//     if (h > 0 && (bounce > 0 && bounce < 1) && window < h) {
//         let a =h;
//         let countDown=1;
//         while (a*bounce > window) {
//             a = a * bounce;
//             countDown = countDown+2;
//         }
//         return countDown;
//     } else {
//         return -1;
//     }
// }
//
// console.log(bouncingBall(30.0, 0.66, 1.5))


// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 90,
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120,
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100,
//     },
//     {
//         name: "Helen",
//         age: 20,
//         isMarried: false,
//         scores: 110,
//     },
//     {
//         name: "Ann",
//         age: 20,
//         isMarried: false,
//         scores: 105,
//     },
// ];
//
// const user = {
//     name: "Bob",
//     age: 23,
//     isMarried: false,
//     friends: ["Alex", "Nick", "John"],
// };
//
// // Shallow user copy
// let copyUser= {...user}
//
// console.log(user === copyUser)
//
// //Deep user copy
//
// let deepUserCopy={
//     ...user,
//     friends: [...user.friends]
// }
//
// console.log(user.friends=== deepUserCopy)
//
//  // Shallow students array copy
//
// let studentsCopy = [...students]
//
// console.log(students === studentsCopy)
//
// //Deep students array copy
//
// let deepStudentsCopy = students.map(student=> ({...student}))
//
// console.log(students === deepStudentsCopy)
// console.log(students[0]===deepStudentsCopy[0]);
// console.log(students)
// console.log(deepStudentsCopy)
//
// // students name sort
//
// let sortStudentsByNames = students.map(student=>({...student})).sort((a,b)=>a.name>b.name?1:-1)
// console.log(students)
// console.log(sortStudentsByNames)
//
// //students score sort
// let sortStudentsByScores = students.map(student=>({...student})).sort((a,b)=>a.scores-b.scores)
// console.log(students)
// console.log(sortStudentsByScores)
//
// //Students scores >100
//
// let bestStudents = students.filter(student=> student.scores>100)
// console.log(bestStudents)
// console.log(students)
//
// //best students
//
// let spliceStudents = students.map(student=>({...student})).sort((a,b)=>b.scores-a.scores).splice(0,3)
// console.log(spliceStudents)
//
// let concatStudents = [...deepStudentsCopy,...bestStudents]
// console.log(concatStudents)
//
// // arr from not married students
//
// let notMarriedStudents = students.filter(student => !student.isMarried)
// console.log(notMarriedStudents)
//
// //arr from students names
//
// let studentNames = students.map(student=>student.name)
// console.log(studentNames)
//
// // string from students names
//
// console.log(studentNames.join(', '))
//
// //add key "isStudent"
//
// let studentsWithIsStudentKey = students.map(student=> ({...student, isStudent:true}))
// console.log(studentsWithIsStudentKey)
//
// // Change married status for Nick
//
// let studentsWithMarriedNick = students.map(student=> student.name==='Nick'? {...student, isMarried:true}:student)
// console.log(studentsWithMarriedNick)
//
// //Find a student named Ann
//
// let studentAnn = students.find(student=> student.name === 'Ann')
// console.log(studentAnn)
//
// //Student who has the best score
//
// let highScoreStudent = students.reduce((acc, student)=>{
//     console.log(1)
//     return acc.scores>student.scores?acc:student
// })
// console.log(1)
// console.log(highScoreStudent)
// //Sum students scores
//
// let sumStudentsScores = students.reduce((sumScores, student)=>sumScores+student.scores,0)
//
// console.log(sumStudentsScores)
//
// //14.???????????????? ?????????????? addFriends, ?????????????? ?????????????????? ???????????????????? ???????????? students ??
// // ???????????????????? ?????????? ????????????, ?????? ???????? ?????????????????? ?? ?????????????? ???????????????? ???????????????? .friends,
// // ?????????????????? ???????????????? ???????????????? ???????????? ???????? ???????? ?????????????????? ?????????????????? ???? ??????????????, ???? ??????????????????????
// // ???????????????????????? ?????????? ????????????????.
// // ??.??. ?? ?????????????? ?? ???????? ???????? ???????? ???? ????????????.
//
// const addFriends = (students)=>{
//     let friendsArr = students.map(student=>student.name);
// return students.map(student=>({...student,friends:friendsArr.filter(friendName=> friendName!==student.name)}))
// }
//
// console.log(addFriends(students))

// function SeriesSum(n) {
//     let initialVal = n > 0 ? 1 : 0;
//     let k = 4;
//     for (let i = 0; i < n - 1; i++) {
//         initialVal = initialVal + 1 / k
//         k = k + 3
//     }
//     return initialVal.toFixed(2)
// }
//
// console.log(SeriesSum(0))

// function digPow(n, p) {
//     let st = p
//     let arrOfNumbers = n.toString().split('');
//     let res = 0;
//     for (let i = 0; i < arrOfNumbers.length; i++) {
//         res = res + Math.pow(+arrOfNumbers[i], st);
//         st = st + 1;
//     }
//     let result = Number.isInteger(res / n) ? res / n : -1
//     return result
// }
//
// console.log(digPow(46288, 3))

// const isEvenIndexSumGreater = (arr) => {
//     //...?????????? ?????????? ??????.
//     // ?? return ?????????? "????????????????", ???????? typescript ???? ??????????????
//     let sum1 = arr.reduce((acc, el, ind) => (ind === 0 || ind % 2 === 0) ? acc + el : acc, 0)
//     let sum2 = arr.reduce((acc, el, ind) => ind % 2 !== 0 ? acc + el : acc, 0)
//     console.log(sum1)
//     console.log(sum2)
//     return sum1 < sum2;
// }
// isEvenIndexSumGreater([1,2, 1, 2, 1,2,1])

// function getSquarePositiveIntegers(array){
//     //...?????????? ?????????? ??????.
//     // ?? return ?????????? "????????????????", ???????? typescript ???? ??????????????
//     return array.reduce((acc, el) => el % 1===0 && el > 0 ? [...acc, el * el] : acc, [])
// }
//
// console.log(getSquarePositiveIntegers([4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2]))

// function getBanknoteList(amountOfMoney) {
//     //...?????????? ?????????? ??????.
//     // ?? return ?????????? "????????????????", ???????? typescript ???? ??????????????
//     const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
//     let newMoney =  amountOfMoney
//     let newArr = [];
//     for(let  i =0;i<banknotes.length;i++){
//         while(newMoney>=banknotes[i]){
//             newMoney = newMoney-banknotes[i]
//             newArr.push(banknotes[i])
//         }
//     }
//     return newArr
// }
//
// getBanknoteList(2500)

//
// function twoSum(numbers, target) {
//     let newArr = []
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i; j < numbers.length; j++) {
//             if (i !== j && numbers[i] + numbers[j] === target) {
//                 newArr.push(i)
//                 newArr.push(j)
//                 break;
//             }
//         }
//     }
//     return newArr.slice(0,2)
// }
//
// console.log(twoSum([486, 53, 56, -382, -292, -601, -193, 585, -870, 183, -841, -400, 656, 183, -573, -473, -767, 282, -339, 246, -642, 115, -531, 793, 999, -738, 260, -331, 389], -658))

// function towerBuilder(nFloors) {
//     let newArr = [];
//     let stars = '*';
//     for (let i = 0; i < nFloors; i++) {
//         for (let j = 0; j < 2; j++) {
//             if (i >= 1) {
//                 stars = stars + '*';
//             } else {
//                 stars = '*';
//             }
//         }
//         newArr.push(stars);
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         let spaceCount = newArr[newArr.length - 1].length - newArr[i].length;
//         let spaces = '';
//         for (let j = 0; j < spaceCount / 2; j++) {
//             spaces = spaces + ' '
//         }
//         newArr[i] = newArr[i].concat(spaces)
//         newArr[i] = spaces.concat(newArr[i])
//     }
//     return newArr;
// }
//
// console.log(towerBuilder(3))

// function sumTo(num){
//     if(num===1){
//         return num
//     }else{
//         return  num + sumTo(num-1)
//     }
// }
//
// console.log(sumTo(100))
//
// function factorial(a){
//     if(a === 1) return 1;
//     return a * factorial(a - 1);
// }
//
// console.log(factorial(4))

// function fib(s) {
//     if (s === 0) return 0
//     if (s === 1) return 1;
//     return fib(s - 1) + fib(s - 2)
// }
//
// console.log(fib(5))

// function fib(s) {
//     let a = 0;
//     let b = 1;
//     let c;
//     for (let i = 0; i < s-1; i++) {
//         c = a + b;
//         [a, b] = [b, c];
//     }
//     return c;
// }
//
// console.log(fib(77))
//
// let qwer = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };
//
// const printList = (a) => {
//     if (a.next) {
//          printList(a.next)
//
//     }
//     console.log(a.value)
// }
//
// console.log(printList(qwer))

// function count(string) {
//     let obj = {};
//     let a = string.split('');
//
//     for (let el of a) {
//         obj[el] = 0;
//     }
//
//     for (let i = 0; i < a.length; i++) {
//         obj[a[i]] = obj[a[i]] + 1
//     }
//
//     return obj
//
// }
//
// console.log(count('abafafff'))

// function duplicateCount(text) {
//     let arr = [];
//     let set = new Set();
//     let textArr = text.toLowerCase().split('')
//     for (let i = 0; i < textArr.length; i++) {
//         if(!arr.includes(textArr[i])){
//             arr.push(textArr[i])
//         }else{
//             set.add(textArr[i])
//         }
//     }
//     return set.size
// }
//
// console.log(duplicateCount("abcdefghijklmnopqrstuvwxyzbaaAAB"))


// function wave(str) {
//     let arr = []
//     for (let i = 0; i < str.length; i++) {
//         console.log(str.split('')[i])
//         if (str.split('')[i]) {
//             arr.push(str)
//         }
//     }
//     console.log(arr)
//     let arr2 = []
//     for (let i = 0; i < arr[0].length; i++) {
//         arr2.push(str[i].toUpperCase())
//     }
//   let arrTwoWords = arr[0].split(' ')
//
//     console.log(arrTwoWords)
//     for(let i = 0 ; i< arr[i].split(' '); i++){
//         for(let j = 0; j< arr[i][i].length;j++){
//             arr[i] = arr[i].replace(arr[i][j], arr2[i])
//         }
//
//     }
//     console.log(arr2)
//     return arr;
// }
//
// console.log(wave("two words"))

// function wave(str) {
//     let arr = str.split('')
//     let arr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             arr2.push()
//         }
//     }
// }


// const wave = (word) => {
//     let arr = word.split(' ')
//     let arr2 = [];
//     let arr3 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(arr[i].split(''))
//         for (let j = 0; j < arr[i].length; j++) {
//             arr3.push(arr2[i][j].toUpperCase())
//             // arr3.push(arr2[i].split(''))
//         }
//     }
//     arr3.map((el,ind)=> word[i])
//     console.log(arr)
//     console.log(arr2)
//     console.log(arr3)
// }
//
//
// const wave = (word) => {
//     return word.reduce
// }
//


// const wave = (word) =>{
//     let wordSplitOfUpLetter = word.toUpperCase().split('')
//     let arr = [];
//    let sss = word.split(' ')
//     for(let i = 0; i< sss.length; i++){
//         for(let j = 0 ; j<sss[i].split('').length;j++ ){
//             sss[i].split('')[j] = wordSplitOfUpLetter[i]
//             console.log(sss[i])
//             arr.push(sss[i])
//         }
//     }
// for(let i = 0 ; i<wordSplitOfUpLetter.length; i++){
//     arr.push(word.split()[0].replace(word[i], wordSplitOfUpLetter[i]))
//     console.log(word.split()[0])
//     console.log(word[i])
//     console.log(wordSplitOfUpLetter[i])
// }
// console.log(arr)
//     return arr.filter(el => el !== el.toLowerCase())
// }
//
//
// console.log(wave("qwqq dcsd"))


// Task 02
// ?????????????????????? ?????????????? counter ?? ???????? ?????????????? ???? ???????????????????? ????????????????:
// get current count; - ?????????????? ?????????????? ???????????????? ????????????????
// increment; - ?????????????????????? ???????????????? ???????????????? ???? 1
// decrement; - ?????????????????? ???????????????? ???????????????? ???? 1
// set current count; - ?????????????????? ?? ?????????????????????? ???????????????? ????????????????
// rest current count - ?????????????????????????? ???????????????? ???????????????? ???????????? 0
// ?????? ???????????? ???????????? ?????????????????? ???? ?????? ????????????

// let counter = {
//     counter: 0,
//     getCurrentCount: function () {
//         return this.counter
//     },
//     increment: function () {
//         this.counter = this.counter + 1;
//         return this
//     },
//     decrement: function () {
//         this.counter = this.counter - 1;
//         return this
//     },
//     setCurrentCount: function (newCount) {
//         this.counter = newCount
//         return this
//     },
//     restCurrentCount: function () {
//         this.counter = 0
//         return this
//     },
// }
//
// console.log(counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())
//
// // Task 04
// // ???????????????? ?????????????? ?????????????????????? myFirstConstructorFunc ?????????????? ?????????????????? 2 ?????????????????? name ?? age ?? ???????????????????? ????????????
// // ?? ???????????????? ?????????? ?????? ???????????????? ?? ?????????? greeting ???? Task 01\
//
// function MyFirstConstructorFunc(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greeting = function () {
//         return `my name is ${this.name}. I am ${this.age}`
//     };
// }
//
// let func = new MyFirstConstructorFunc('nickolay', 10)
//
// console.log(func.greeting())
// console.log(func.age)
// console.log(func.name)
//
//
//
// let One = {name: 'One'};
// let Two = {
//     name: 'Two',
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`)
//     }
// };
//
// Two.sayHello.bind(One)()
//
// // Task 06
// // ???????????????? ???????????? helperObj ?? ???????????????? ???????? ?????????????????? ????????????:
// // changeName - ???????????? ???????????????? ?? ???????????????? name ?????????????? ???? ???????????????????? ????????????????
// // setAge - ?????????????????????????? ???????????????????? ???????????????? ?? ???????????????? age ??????????????
// // greeting - ???????????????????????? ?????????????? sayHello ???? Task 05
// // ?????????? ???????????????????????? @ts-ignore
//
// let helperObj={
//     name:'OLEG',
//     age:10,
//     changeName:function(newName){
//         this.name = newName
//     },
//     setAge:function(newAge){
//         this.age = newAge
//     },
//     greeting: Two.sayHello,
// }

// function sumDigPow(a, b) {
//     let arr = [];
//
//     for (let i = a; i <= b; i++) {
//         let splitA = i.toString().split('')
//         let sumNum = 0
//         console.log(splitA)
//         for (let j = 0; j < splitA.length; j++) {
//             sumNum = sumNum + Math.pow(+splitA[j], j + 1)
//         }
//         if (sumNum === i) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
//
// console.log(sumDigPow(1, 150))

// function rowSumOddNumbers(n) {
// return Math.pow(n,3)
// }
//
//
// console.log(rowSumOddNumbers(4))

// function deleteNth(arr,x) {
//     let cache = {};
//     return arr.filter(function(n) {
//         cache[n] = (cache[n]||0) + 1;
//         return cache[n] <= x;
//     });
// }
//
// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2))

//
// function findEvenIndex(arr) {
//     return arr.findIndex((el, ind, arr) => {
//        return arr.slice(0, ind).reduce((acc, el) => acc + el, 0) === arr.slice(ind+1, arr.length).reduce((acc, el) => acc + el, 0)
//     })
// }
//
//
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))

// function getSortArr(arr){
//     for(let i=0; i< arr.length; i++){
//         for(let j= i ; j <arr.length-1-i; j++ ){
//             if(arr[j]> arr[j+1]){
//                 [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
//             }
//         }
//     }
//     return arr
// }
//
// console.log(getSortArr([3,1,2,2,3,4,6]))

// function isValidWalk(walk) {
// if(walk.length<10) return false
//     //initiate person starting point
//     let person = [0, 0]
//     //establish what the ending point must be
//     let finalDestination = [0, 0]
//
//     let north = [0, 1]
//     let east = [1, 0]
//     let south = [0, -1]
//     let west = [-1, 0]
//
//     //as long as the length of the array is 10 or less, continue walk
//     for (let i = 0; i <= 10; i++) {
//         //if the letter in the array is "n", move north
//         if (walk[i] === "n") {
//             person[1] +=1
//         }
//         //if the letter in the array is "e", move east
//         if (walk[i] === "e") {
//           person[0] +=1
//
//         }
//         //if the letter in the array is "s", move south
//         if (walk[i] === "s") {
//             person[1] -=1
//
//         }
//         //if the letter in the array is "w", move west
//         if (walk[i] === "w") {
//             person[0] -=1
//         }
//     }
//     console.log(person)
//     console.log(finalDestination)
//     if (person[0] === finalDestination[0] &&person[1] === finalDestination[1] ) {
//         return true;
//     }
//     else {
//         return false;
//     }
//
// }
//
// console.log(isValidWalk(['w','n']))

// function friend(friends) {
//     return friends.filter(f => f.length === 4)
// }
//
// function alphabetPosition(text) {
//     let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//    return text.split('').reduce((acc,letter)=>{
//        console.log(arr.indexOf(letter))
//         if(arr.includes(letter.toLowerCase())){
//            acc.push(arr.indexOf(letter.toLowerCase())+1)
//             return acc
//         }else{
//             return acc
//         }
//     },[]).join(' ')
// }
//
//
// console.log(alphabetPosition('abcdefghijklmnopqrstuvwxyz'))
// const wait=(n)=>{
//     return new Promise((res)=>{
//         setTimeout(()=>{res()},n)
//     })
//
// }
//
// async function run(){
//     await wait(1000)
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
//
// }
//
// run()

// function getUserByID(id) {
//     const users = [
//         {id: 1, name: 'Sabaka'},
//         {id: 2, name: 'Mabaka'},
//         {id: 3, name: 'Dubaka'},
//     ]
//
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             let user = users.find(user=>user.id===id)
//             if(user){
//                 res(user)
//             }else{
//                 rej(new Error('user not found'))
//             }
//         }, 1000)
//     })
// }
//
// getUserByID(5)
//     .then(user=> console.log(user))
//     .catch(err=> console.log(err))

// function comp(array1, array2) {
//
//     if(!array2 || !array1) return false
//     let newArr = [];
//     array1.forEach((el) => newArr.push(el * el))
//
//     let newArr2 = [...array2];
//
//     for (let i = newArr2.length-1; i >= 0; i--) {
//
//         for (let j = 0; j < newArr.length; j++) {
//             if (newArr2[i] === newArr[j]) {
//                 newArr2.splice(i, 1)
//                 newArr.splice(j, 1)
//             }
//
//         }
//     }
//
//         return newArr[0] === newArr2[0]
//
// }
//
//
// let a = [121, 144, 19, 161, 19, 144, 19, 11]
// let b = [231, 14641, 20736, 361, 25921, 361, 20736, 361]
// console.log(comp(a, b))
//
// let r = [1]

// function getSum(a, b) {
// //     if (a === b) return a;
// //     let sum = 0;
// //     let lowVal = a>b?b:a
// //     let bigVal = a>b?a:b
// //     for (let i = lowVal; i <= bigVal; i++) {
// //         sum = sum + i
// //     }
// //     return sum
// //
// // }
// // getSum(1, 0)

// function removeSmallest(numbers) {
//     return numbers.filter((el,ind)=> ind !== numbers.findIndex(el=>el===Math.min(...numbers)))
// }
//
// console.log(removeSmallest([1, 2, 3, 4,1, 5, 6]))

// let uniqueInOrder = function (iterable) {
//
//     if(!iterable.length) return []
//
//     let arrFromIterable = typeof(iterable) === 'string'
//         ? iterable.split('')
//         : iterable;
//
//     console.log(arrFromIterable)
//
//     return arrFromIterable.map((el, ind) => el !== arrFromIterable[ind - 1] && ind !== 0
//         ? `-${el}`
//         : el)
//         .join('')
//         .split('-')
//         .map(el =>{
//             return isFinite(+el[0])? +el[0] : el[0]
//         } )
//
// }
//
// console.log(uniqueInOrder([1,2,3,3,3]))

function duplicateEncode(word){
    let arrFromWord = word.split('').map(el=> el.toLowerCase())
    return arrFromWord.map(el=>arrFromWord.indexOf(el) === arrFromWord.lastIndexOf(el)? '(':')')
        .join('')
}


console.log(duplicateEncode("recede"))