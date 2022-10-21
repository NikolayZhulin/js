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
