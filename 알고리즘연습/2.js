//일단 팰린드롬인지부터 확인->아니면 문자 추가할 때마다 팰린드롬인지 확인, 같으면 true반환하고 끝
//어떤 문자를 어떤 인덱스에서 뽑아 붙일것인가
function solution(plain) {
    let reverseStr = plain.split('').reverse().join('');
    for (let i= reverseStr.length-1; i>0; i--) {
        let addedStr = reverseStr.slice(i,reverseStr.length);
        let newPlain = plain + addedStr;
        if((plain + addedStr) === (plain + addedStr).split('').reverse().join('')) {
            // console.log('newplain',newPlain,'added:',addedStr,i)
            return newPlain.length;
        }
    }
}
console.log(solution('abab'))
// pop + push => baba
// 주어진 문자열이 팰린드롬이 아니므로 string[length-2]부터 하나씩 거꾸로 다 더해서 확인

// reverseStr = edcba의 slice(1,length-1) / slice(2,length-1) / slice(3,length-1) / slice(4,length-1) , 저 4 === reverseStr.length -1
/* abcde + dcba / cba / ba /b
    abab + aba / ba / a 

*/
// abab => a  = ababa
// abcde + dcba = abcd e dcba
// length-1부터 더함
// abcde + 
// aba 
// abba