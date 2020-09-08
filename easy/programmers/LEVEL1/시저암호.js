//내 풀이
function solution(s, n) {
    var result = "";
  for (var i=0; i<s.length;i++){        
    if (s[i] == ' ' ) {
        result += ' '
    } else {
        //charCode
        //A ->65 Z -> 90
        //a ->97 z->122  + string.charCodeAt() String.fromCharCode(val)이용
        result += String.fromCharCode((s.charCodeAt(i)>90)?
        //s.charCodeAt(i)-97+n가 25보다 클 수도 있다.따라서 나머지 연산자 사용
        // 시작이 97으로 줬기에 s.charCodeAt(i)-97 + n의 값이 26부터면 'z'를 넘어섬,
        // 따러서 (s.charCodeAt(i)-97 + n) % 26을 통해 나눈 나머지가 'a'에서부터 시작된 알파벳 인덱스를 의미
      'a'.charCodeAt() +(s.charCodeAt(i)-97+n)%26 : 'A'.charCodeAt()+(s.charCodeAt(i)-65+n)%26)
    }
  }
    return result;
}

//다른 사람 것 참고
function solution(s, n) { 
    return s.split("").map(e => { 
        if(" " == e) return e; 
        
        return e.toUpperCase().charCodeAt(0) + n > 90 
                ? String.fromCharCode(e.charCodeAt(0)+n-26) 
                : String.fromCharCode(e.charCodeAt(0)+n); 
            }).join(""); 
}


//아스키 안 쓴 것 중 참고한것
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}