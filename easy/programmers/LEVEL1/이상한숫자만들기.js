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

  