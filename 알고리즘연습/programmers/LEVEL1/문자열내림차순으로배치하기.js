//내 풀이
function solution(string) {
//charCodeAt으로 ASCII값 얻기
//내림차순 정렬 후,String.fromCharCode(ASCII)이용
//사실 sort함수 쓰면 아스키 코드 순으로 정렬되서 이럴 필요 없었다
  let ASCII = string
    .split("")
    .map((singleString) => singleString.charCodeAt())
    .sort((a, b) => b - a);

  return ASCII.map((ascii) => String.fromCharCode(ascii)).join("");
}

//참고
function solution2(s) {
    return s.split("").sort((a,b) => a<b ? 1:-1).join("")
}