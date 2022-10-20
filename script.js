// function solution(str, ending) {
//   if (str == ending) return true;
//   return str.endsWith(ending);
// }

// console.log(solution("str", "tr"));

// function greet() {
//   return "hello world!";
// }

function boolToWord(bool) {
  if (bool == false) return "No";
  if (bool == true) return "Yes";
}

console.log(boolToWord(true));
