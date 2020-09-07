//내 풀이
function solution(n) {
    let sum = 0;
    String(n).split('').forEach(v=>sum+=Number(v));
    return sum;
}
//참고할만했던 것, 숫자+''하면 문자열이 되고, 문자*1은 숫자가 된다.
function solution(n) {
    var a = (n + '').split('');
    var b = 0;
    for(var i = 0; i < a.length; ++i) {
        b += parseInt(a[i]);
    }
    return b;
}
