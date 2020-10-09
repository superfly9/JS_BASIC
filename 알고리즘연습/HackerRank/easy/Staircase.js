/* n=4 일때 다음을 출력할 수 있어야
   #
  ##
 ###
####

*/

// string.repeat(count)사용 
function staircase(n) {
    let result = '';
    for (let i=1;i<=n;i++) {
        result = ' '.repeat(n-i) + '#'.repeat(i);
        console.log(result);
    }   
}
staircase(4);