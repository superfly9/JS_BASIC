function solution(s) { 
    return /^\d{4}$|^\d{6}$/.test(s) ? true : false; 
}

//첫풀이=>지수형식의 값이 올 때 틀리는 단점,ASCII code를 가지고 비교해야 한다더라
function alpha_string46(s) {
    return s.length == 4 || s.length == 6 ? !isNaN(s) : false 
 }
 