const { default: fetch } = require("node-fetch");

async function my_async_fn(url) {
    let response = await fetch(url);
    console.log(response); // Logs the response
    return response;
}

console.log(my_async_fn(url)); // Returns Promise

//저 함수를 fetch로
async function my_async_fn1 (url) {
    return fetch(url).then(response=>{
        return response // Response {type,ok,url...}객체
    })
}

console.log(my_async_fn1(url)); // Returns Promise