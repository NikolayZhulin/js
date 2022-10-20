function solution(str, ending) {
  if (str == ending) return true;
  return str.endsWith(ending);
}

console.log(solution("str", "tr"));
