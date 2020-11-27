/*
골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다.
이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

**2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요. 
* 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.
*/

/*
소수 => 1과 자기 자신으로만 나누어진다
//2부터 시작,  어떤 수 n이 있다, 이 수는 1과 n자기 자신으로만 나누어져야 하고, 그렇다면 n보다 작은 수로 나누어지는 경우가 있다면 소수가 아니라는 뜻,
*/
let target = 10;

function checkPrime (target) {
    let primeArr = [];
    for (let i = 2; i <=target; i++) {
        //1은 소수가 아니기에 2부터시작
        let count = 0; // or let isPrime = true;
        for (let j = 2; j < i; j++) {
            //모든 숫자는 1로 나누어떨어지기에 2부터 시작
            if ( i % j === 0) count++; //isPrime = false;
        }
        if (count === 0) primeArr.push(i);
    }
    return primeArr;
}
// console.log(checkPrime(19));


/*
2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다.
이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

예)
100 == 47 + 53
56 == 19 + 37

**2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요. 
*/
function gold (number) {
    let numberArr = checkPrime(number); //number까지의 소수들을 모아놓은 배열
    let result = [];
    // console.log('length:',numberArr.length,'middle:',numberArr[Math.floor(numberArr.length/2)]);
    for (let n of numberArr) {
        if (numberArr.includes(number - n) && n <= (number-n)) {
            //앞의 숫자 n이 뒤의 숫자 number-n보다 작거나 같을때만 추가
            result.push([n,number-n]);
        }
    }
    let dif = result.map((item)=>item[1]-item[0]);
    let minIndex = dif.indexOf(Math.min(...dif)); //차가 가장 작은 녀석의 인덱스
    let maxIndex = dif.indexOf(Math.max(...dif)); //차가 가장 큰 녀석의 인덱스
    return { min :result[minIndex], max : result[maxIndex]};
}
console.log(gold(100));
