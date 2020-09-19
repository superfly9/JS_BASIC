const numbers = [8, 5, 6, 9, 3, 1, 4, 2, 7, 10];
/* 
divide( [8, 5, 6, 9, 3, 1, 4, 2, 7, 10]  )
1st
 left           right
[8,5,6,9,3]     [1,4,2,7,10]
sort(  divide([8,5,6,9,3])  , divide([1,4,2,7,10])  )

2nd
divide( [8,5,6,9,3]) 
left        right
[8,5]     [6,9,3]

sort(   divide([8,5]), divide([6,9,3])   )

3rd

divide( [8,5] )

left    right
 [8]       [5]

 4rd

 sort( divide([8]), divide([5]) );
 sort( [8] , [5] ) => 5 < 8 
 sorted = [5] left = [8] right = []

 output = [5,8]  -> 정렬 완료


5st

divide ([6,9,3])

left     right
[ 6 ]      [ 9, 3]

sort( divide([6], divide([9,3] ) ;

6rd
left
divide([6]) => [6]

7rd
right
divide( [9,3] ) 
left  right
[ 9 ]   [ 3 ]

sort(divide[9] , divide[3]) => sort( [9], [3]);

left right 
 [9]  [3]
sorted  left    right
 [3]      [9]     []
output = [3,9]
*/