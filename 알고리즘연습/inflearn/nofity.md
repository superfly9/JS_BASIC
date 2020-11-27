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

68완료=>다시 해보기
69~74해야(골드바흐/dfs/bfs/최단/최장)

75 / 77하기