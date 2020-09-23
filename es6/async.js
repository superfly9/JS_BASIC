const axios = require('axios');

async function getData() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
// console.log(getData().then(result=>console.log(result.data,typeof result.data))); // Promise {<pending>}

(async ()=>{
    let notawaitResult = getData().then(result=>result.data);  
    console.log('not Await:',notawaitResult) // 'not Await': Promise {<pending>}
    let awaitResult = await getData()  //  result.data(userData is in here) => [ {},{},{}...]
    let data = awaitResult.data;
    console.log('Await:',data)  // 'Await' : [ {},{},{}...]

    //사용하면 안되는 방식
    let awaitResult2 = await getData().data  // getData를 await으로 받아오기 전에 .data로 접근하기에 undefined나온다
    console.log('AWait 2:',awaitResult2); // 'Await2: undefined'
       // await후 resolved된 promise객체에 접근하기에 데이터가 내가 원하는 대로 나옴
})();

console.log('=========================================');

/* 실행순서 및 결과

not Await: Promise { <pending> }
=========================================
Await: [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: [Object]
    },{},{}....]
*/

/*
(async ()=>{
    console.log(getData());  // Promise {<pedning>}
})();

(async ()=>{
    console.log(getData().data);  // undefined => {<pending>}상태인 promise 객체에 대해 .data를 가져오려 하기에
})();

(async ()=>{
    //getData().then(result=>console.log(result.data)); 
    // result.data(userData is in here) => [ {},{},{}...], then을 통해 <resolved>된 promise 객체의 데이터를 가져오기에 데이터가 제대로 나옴
})();
*/