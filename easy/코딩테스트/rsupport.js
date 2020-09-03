const solution = (arr) =>{
    let infoObj ={'zero':0, 'one':1, 'two':2, 'three':3, 'four':4, 'five':5, 'six':6,     'seven':7, 'eight':8, 'nine':9}
    //infoObj의 키만 담은 배열을 생성
    let keyArr = Object.keys(infoObj);
    //숫자를 영어로 바꾼 값을 담을 배열
    let engCharacterArr = [];
    let result=[];
    //map을 통해 숫자를 영어로 바꾼다
    engCharacterArr =  arr.map((value,index)=>{
      let str='';
      if (value>=10) { 
        //숫자가 두 자리수 이상이면 각각을 쪼갠다
        value = String(value).split('')
        
        value.forEach(targetValue=>{
          let index = Number(targetValue)
          str+=keyArr[index];
          result.push(keyArr[index]);
        });
        console.log('String:',str);
        return str
      } else {
        return keyArr[value]
      }
    })
    
    let sortedArr = engCharacterArr.sort();
    console.log('result:',result,'sortedArr:',sortedArr)
    sortedArr = sortedArr.map((value,index)=>{
      if (value === result.join('')) {
       return Number(result.map((itemkey,index)=>keyArr.indexOf(itemkey)).join(''));
      } else {
        return infoObj[value] 
      }
    })
    return sortedArr;
  }
  console.log(solution([8,7,6]));
  console.log(solution([18,713,6]));