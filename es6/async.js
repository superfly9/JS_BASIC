const axios = require('axios');

function getData() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
console.log('1',getData()); // Promise {}



(async ()=>{
    let notawaitResult = getData()
    console.log('not Await:',notawaitResult) // 'not Await': Promise {<pending>}
    
    // awiat Promise  ===  fetch(url).then(response=>response.json()) === Promise.then()인가?
    let awaitResult = await getData()  //  
    console.log('await Result:',awaitResult);  //{status:200,statusText:'OK,headers:{},data:[]....}
    
    let data = awaitResult.data;
    //awaitResult.data(userData is in here) => [ {},{},{}...]
})();

console.log('=========================================');

let data;
    (async ()=>{
        let result = await getData();
        return result.data;
        //result.data(userData is in here) => [ {},{},{}...], then을 통해 <resolved>된 promise 객체의 데이터를 가져오기에 데이터가 제대로 나옴
    })();
const seoul = async () => {
    let result = await getData();
        return result.data;
}
data = seoul().then(data=>data)
console.log('Data:',data);


//원하는 것 data변수에 불러온 값을 담아서 쓰기
function fetchItems() {
    return new Promise(function(resolve, reject) {
      var items = [1,2,3];
      resolve(items)
    });
}
  //promise를 반환하는 함수
  async function logItems() {
    var resultItems = await fetchItems(); // resolve(items)의 items가 반환 됨
    console.log(resultItems); // [1,2,3]
}