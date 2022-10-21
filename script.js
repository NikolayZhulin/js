function solution(str, ending) {
  if (str == ending) return true;
  return str.endsWith(ending);
}

console.log(solution("str", "tr"));

function greet() {
  return "hello world!";
}

function boolToWord(bool) {
  if (bool == false) return "No";
  if (bool == true) return "Yes";
}

console.log(boolToWord(true));

let number = prompt("Vvedite chislo");

if (number > 0) {
  alert("1");
} else if (number == 0) {
  alert("0");
} else if (number < 0) {
  alert("-1");
}

let nameJS = prompt("Kakoe officialnoe nazvanie js");

if (nameJS == "ecmascript") {
  alert("Verno");
} else {
  alert("ne znaete?");
}

let result = a + b < 4 ? "Malo" : "Mnogo";

let message =
  login == "sotrudnik"
    ? "Privet"
    : login == "Director"
    ? "Zdravstvuite"
    : login == ""
    ? "Net logina"
    : "";

if (age >= 14 && age <= 90) {
  return true;
}

if (age < 14 || age > 90) {
  return true;
}

if (!(age >= 14 && age <= 90)) {
  return true;
}

let login = prompt("Who here?");

if (login == "Admin") {
  let password = prompt("password");
  if (password === "I am main") {
    alert("hello");
  } else if (password === null || password === "") {
    alert("cansel");
  } else {
    alert("Invalid password");
  }
} else if (login === null || login === "") {
  alert("cansel");
} else {
  alert("i dont know you");
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) continue;
  console.log(i);
}

let i = 0;
while (i < 3) {
  console.log(`number ${i}`);
  i++;
}

while (+prompt("enter number") <= 100) {}

let n = 10;

for (i = 1; i <= n; i++) {
  for (j = 2; j <= i; j++) {
    if (i % j == 0 && j < i) break;
    else if (j === i) {
      console.log(i);
    }
  }
}

if (browser == "Edge") {
  console.log("You've got the edge");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

const number = +prompt("Введите число между 0 и 3", "");
switch (number) {
  case 0:
    console.log("0");
    break;

  case 1:
    console.log("1");
    break;
  case 2:
  case 3:
    console.log("2 or 3");
    break;
}

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Родители разрешили?");
  }
}

function checkAge(age) {
  age > 18 ? true : confirm("Родители разрешили?");
}

function min(a, b) {
  if (a < b) return a;
  if (a > b) return b;
}

function pow(a, b) {
  if (a % 1 == 0 && b % 1 == 0) return a ** b;
}

console.log(pow(1, 3));

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

function makeNegative(num) {
  return -num;
}

console.log(makeNegative(9));

function check(a, x) {
  return a.includes(x);
}

function oddOrEven(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (sum % 2 == 0) {
    return "even";
  } else return "odd";
}

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("world"));
