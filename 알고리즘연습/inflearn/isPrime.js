/*
소수 => 1과 자기 자신으로만 나누어진다
//2부터 시작,  어떤 수 n이 있다, 이 수는 1과 n자기 자신으로만 나누어져야 하고, 
그렇다면 n보다 작은 수로 나누어지는 경우가 있다면 소수가 아니라는 뜻

따라서 n이라는 타켓숫자에 대해 2~n-1까지의 숫자를 나눠보면 나머지가 0이면 소수가 아니므로
n까지의 소수갯수를 구하기 위해 2~n까지 순회할 for문 1개와
이 for문에 대해 나눠줄 숫자를 포함한 2~n-1까지의 for문 총 2개가 필요
*/

function checkPrime (target) {
    let primeArr = [];
    for (let i = 2; i <=target; i++) {
        //1은 소수가 아니기에 2부터시작
        let count = 0; // or let isPrime = true;
        for (let j = 2; j < i; j++) {
            //모든 숫자는 1로 나누어떨어지기에 2부터 시작
            if ( i % j === 0) count++; //isPrime = false;
        }
        console.log('i',i,'count:',count);
        if (count === 0) primeArr.push(i);
    }
    return primeArr;
}
console.log(checkPrime(19));
//[ 2,  3,  5,  7, 11, 13, 17, 19 ]