//풀이 1  
function solution(s){
    let stringP = [];
    let stringY = [];
    for (let i=0;i<s.length;i++) {
     if (s[i].toLowerCase()==='p')  stringP.push(s[i])
     if (s[i].toLowerCase()==='y')  stringY.push(s[i])
    }
    if (stringP.length === 0 && stringY.length === 0 ) return false;
    let result = stringP.length === stringY.length ? true : false
    return result;
}

//풀이 2
function numPY(s){
    //p의 갯수와 y의 갯수가 같으면 전체 문자열길이-p갯수  ==== 문자열길이-y갯수임을 이용
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }
console.log( numPY("pPoooyY") ) 
// s.toUpperCase().split("P") => ["", "", "OOOYY"]=>p의 왼쪽, 그리고 p와 p사이 공간이 ""로 구분됨
// s.toUpperCase().split("Y") => ["PPOOO", "", ""]=>y의 오른쪽, 그리고 y와 y사이 공간이 ""로 구분됨
console.log( numPY("Pyy") ) 