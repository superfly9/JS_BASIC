//n! =  n * n-1...* 1
//ex> 5! = 5 * 4 * 3 * 2 * 1

//재귀함수로 console출력이 뜻대로 안되서 pass
function extraLongFactorials(n) {
    if (n===1) return n
    return n * extraLongFactorials(n-1)
}
console.log(extraLongFactorials(5))

//        n    result 
//func(5) 5   5 * func(4)
//func(4) 4   4 * func(3); 
//func(3) 3   3 * func(2); console(3,3*2)
//func(2) 2   2 *  func(1); console(2,2*1)
/* 
func(1)이 1을 return하고 나서부터 값이 반환되므로, 마지막 것부터 함수값 반환
2 2
3 6
4 24
5 120
*/


function extraLongFactorials(n) {
    n = BigInt(n);
    let result = BigInt(1);
    for (let i=n;i>0;i--) {
        result *= i;  // BigInt는 같은 BigInt자료형끼리만 연산해야
    }
    console.log(result.toString()) // 1024n.toString() === 1024
}

extraLongFactorials1(5)