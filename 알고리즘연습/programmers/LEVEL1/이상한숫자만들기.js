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

