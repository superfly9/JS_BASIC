11/26
단위의 환산
- 시간 => 분으로 바꿔서 서로 차이를 빼줘서 비교하는 방법도 있다
- 내가 원하는 결과를 변수에 담아서 다시 배열에 push할수도 있지만, 할당하지 말고 바로 push도 고려해볼만하다
```
let resultArr = [];
let hours = Math.floor(result/60);
            let minutes = result%60;
            resultArr.push(`${String(hours).padStart(2,0)}시간 ${String(minutes).padStart(2,0)}분`);
```
- if ([소수들이있는 배열].prototype.includes(n-value) ) {
    result.push([n,value])
}
- String.padStart(목표 문자열의 길이,현재 문자열에 내가 채우고 싶은 값)
-현재 문자열의 시작을 다른 문자열로 채워 주어진 길이를 만족하는 새로운 문자열을 반환한다.채워넣기는 대상 문자열의 시작(좌측)부터 적용
-return  :시작점부터 주어진 문자열로 채워 목표 길이를 만족하는 String.
-주의할 점: 현재 문자열의 앞부터 새로운 문자를 붙이기에, 현재 문자열은 언제나 return에 포함된다

70~74해야(골드바흐/dfs/bfs/최단/최장)

11/27
- 문자열이 담겨있는 배열을 길이 순으로 정렬할때, maxIndex =arr.findIndex() + arr[maxIndex]하려함
- 이거 대신 arr = arr.sort((a,b)=>b.length - a.length)해주면 길이 따른 내림차순으로 정렬이 되고
- arr[0]해주면 가장 큰 길이의 원소가 나옴


11/28
배열의 인덱스가 변경된 새로운 배열을 다룰 때, 너무 더하고 나누는 연산 위주로 생각하는 것 같다
pop + push를 반복문과 적절히 사용한다면 더 간단한 코드를 짤 수도 있을 것 같다

11/29
- arr.unshift(arr.pop()) =>  1. 배열의 가장 마지막 원소를 뽑고  2. 배열의 가장 첫번째 원소로 넣어준다
- arr의 복사 : 참조관계를 끊기 위해  arr2 = arr.slice()로 얉은 복사를 해줄 수 있다.