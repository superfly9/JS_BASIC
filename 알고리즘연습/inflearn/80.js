/*
이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.
나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

**<--요구 조건-->**
1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
2. 두 번째 입력으로 조합의 수가 주어집니다.
3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.
입력
ㄱ,ㄴ,ㄷ,ㄹ
3
*/

// function makeCombination (arr,n) {
//     let result = []; // 조합 결과를 담을 배열
//     let str = '';
//     console.log('n:',n);
//     for (let i=0;i<=arr.length-n;i++) {
//            str = '';
//            console.log(i);
//         for (let j=i+1;j<arr.length;j++) {
//             //for문이 3개 => 3개짜리 문자를 담는 것밖에는 못담는다
//             for (let k=j+1;k<arr.length;k++) {
//                 str = arr[i]+arr[j]+arr[k];
//                 console.log('str:',str);
//                 result.push(str);
//             }
//         }
//     }
//     return result;
// }

// console.log(makeCombination(arr,3));
// console.log(makeCombination(arr2,2));
let arr = ['ㄱ','ㄴ','ㄷ','ㄹ'];
let arr2 = ['A','B','C','D','E'];

//3:05 - 3:25
/*
출력
    ['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
    4
    
만약 5자리 글자를 3개
0 1 2  index index+1 index+2
0 1 3  index index+1 index+3 
0 1 4  index index+1 (index+4<=length-1)까지 돌아야 
0 2 3   i      i+2    i + 3
0 2 4   i      i+2    i + 4
0 3 4  index index+3 index+4
맨 앞 인덱스 1증가

변하는 index가 3개, for문도 3번..? 이러면 별로 같은데... 
=> 이것의 오류 : 3글자를 뽑는것만 생각함...4개의 글자,5개의 글자면 for문 갯수를 그만큼 늘릴수는 없다...
=> 뽑는 갯수에 따라 동적으로 동작하는 다른 방법 찾아야

1 2 3 index index+1 index+1
1 2 4  i    i + 1     i + 3
1 3 4
맨 앞 인덱스 1증가
2 3 4
2라는 맨 앞자리의 마지막 인덱스는 index = length(5) - n(3) => 맨 바깥 for문의 인덱스
*/
/*
abcd 
abc abd acd  =>  ab ac ad abc abd acd  abcd (a놔두고 뒤에 것만 길이 긴 것부터 slice해오기)
             => a + 문자형태 (길이가 3 / 2/ 1 순서대로)
bcd          => bc  bd cd bdc 
*/

function makeCombination (arr,n) {
    let result = [];
    function getStr (prefix, arr) {
        for (let i=0;i<arr.length;i++) {
            result.push(prefix + arr[i]);
            console.log('index:',i,prefix+arr[i],'result:',result)
            getStr (prefix+arr[i], arr.slice(i+1)) // arr.slice(i+1)이 getStr()의 arr이 되고, 갈수록 배열의 길이가 작아지므로 재귀 종료됨
        }
    }
    getStr('',arr);
    return result.filter(v=>v.length === 3);
}

console.log(makeCombination('abcd'.split(''),3))

