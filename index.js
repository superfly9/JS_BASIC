let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = numbers.length - 1; i >= 0; --i) {
  //배열의 가장 마지막원소부터 순회하며 짝수 제거
  if (numbers[i] % 2 === 0) {
    numbers.splice(i, 1); // 짝수 제거
    console.log(numbers);
    //number예상과 결과
    /*예상 :                      
    i=9 => [1,2,3,4,5,6,7,8,9]   [1, 3, 5, 7, 9]
    i=7 => [1,2,3,4,5,6,7,9]     [1, 3, 5, 7, 9] 
    i=5 => [1,2,3,4,5,7,9]...    [1, 3, 5, 7, 9]
    i=3 => [1,2,3,5,7,9]         [1, 3, 5, 7, 9] 
    i=1 => [1,3,5,7,9]           [1, 3, 5, 7, 9] 
    */
  }
}
