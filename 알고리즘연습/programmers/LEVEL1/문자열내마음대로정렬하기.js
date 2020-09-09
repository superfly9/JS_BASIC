//내 풀이
function solution(arr, n) {
  let answer = [];
  let lenStr = arr.length;

  arr.sort();
  let newStrings = arr.map((str) => str[n]);
  newStrings.sort();

  for (let i = 0; i < lenStr; i++) {
    for (let j = 0; j < lenStr; j++) {
      if (newStrings[i] === arr[j][n]) {
        answer[i] = arr[j];
        arr.splice(j, 1);
        break;
      }
    }
  }
  return answer;
}

//다른사람
function solution(strings, n) {
    // n 번째 문자열 비교
    //기준문자열.localCompare(비교할 문자열) => 비교할 문자열이 기준문자열보다  더 뒤에 오면 음수/앞에 오면 양수반환
    // 같으면 0을 반환
    //ex) 'a'.localeCompare('c'); // -2 or -1 (or some other negative value)
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}