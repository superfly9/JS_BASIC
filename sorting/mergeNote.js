const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
/* 
쪼개고 정렬하고 쪼개고 정렬하고를 반복, 즉 길이가 1인 배열 2개 생기면 그 둘을 
비교해서 정렬

1st
divide( [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]  )
 left           right
[8,5,6,9,3]     [1,4,2,7,10]
divide( [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]  ) = merge1(  divide([8,5,6,9,3])  , divide([1,4,2,7,10])  )

divide([8,5,6,9,3])완료 후 divide([1,4,2,7,10])실행, 이 둘 다 실행 후 merge1의 인자로 들어가서 최종정렬 된다

2nd
divide( [8,5,6,9,3]) 
left        right
[8,5]     [6,9,3]

divide( [8,5,6,9,3]) = merge1(   divide([8,5]), divide([6,9,3])   )

3rd

divide( [8,5] ) 
= merge1( divide([8]), divide([5]))=merge1([8],[5])
= [5,8]

left    right
 [8]       [5]

 4rd
 merge1( divide([8]), divide([5]) );
 merge1( [8] , [5] ) => 5 < 8 
 sorted = [5] left = [8] right = []

 merge1( divide([8]), divide([5]) ) = [5,8](output)  -> 정렬 완료


5st

divide ([6,9,3]) = merge1( divide([6], divide([9,3] );

left     right
[ 6 ]      [ 9, 3]

6rd
left
divide([6])=[6]

7rd

divide( [9,3] ) =
 merge1(divide[9] , divide[3]) =merge1( [9], [3]);
 =[3,9]
left  right
[ 9 ]   [ 3 ]

left right 
 [9]  [3]
sorted  left    right
 [3]      [9]     []
output = [3,9]

8th
merge1([6],[3,9]) = [3,6,9]
*/