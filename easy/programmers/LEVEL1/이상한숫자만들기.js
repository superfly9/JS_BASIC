//sol1
function solution1(s) {
    let arr = s.split(' ');
    console.log(arr);
    arr = arr.map(word=>{
        word = word.split('').map((string,index)=>{
            if (index%2===0){
              string= string.toUpperCase();
            } else {
              string = string.toLowerCase();
            }
            return string;
        }).join('')
        console.log('Word:',word);
        return word;
    }).join(' ');
    return arr;
  }
  

  //solution2
  function solution2(s){ 
    let word = s.split(" "), ans = [],val = null; 
    for (let string of word) { 
        val = string.split("") 
        for (let i = 0; i < val.length; i++) { 
            if( i % 2 == 0 ) { 
                val[i] = val[i].toUpperCase() 
            } else { 
                val[i] = val[i].toLowerCase() 
            } 
        } 
        ans.push(val.join('')) 
    } return ans.join(" ") 
}

  

//자극된 코드1
function toWeirdCase(s){
    //함수를 완성해주세요
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
  
  }
//자극 2

4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function toWeirdCase(s){
  var result = "";

  for(var word of s.split(" ")) {
    for(var i in word) {
        //특히 이부분
      result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
    }
    result += " ";
  };

  return result.slice(0, -1);
}

