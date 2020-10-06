async function seoul () {

}
console.log(seoul()) // Promise {<fullfilled>:undefined } 

async function lite () {
    return 'Seoul Lite'
}

console.log(lite()) // Promise {<fullfilled> : 'Seoul Lite' }

async function awaitSeoul () {
    const result = await 'Seoul Lite';
    return result;
}
console.log(awaitSeoul())  //  Promise {<pending>} =>browser console확인해보면 [[PromiseState]]: "fulfilled" [[PromiseResult]]: Object

const URL  ='https://jsonplaceholder.typicode.com/todos/1';

async function getData (URL) {
    const data = await fetch(URL);
    console.log('data:',data);  // Response {type: "cors", redirected: false, status: 200..}
    const result =await data.json(); 
    //  await data.json() =>{userId:1,id:1, title: "delectus aut autem", completed: false}  
    //  반면에 data.json() === Promise {<pending>}
    console.log('Result:',result)
    return result;
}

console.log(getData(URL)) // Promise {<pending>}인데  browser console에는 [[PromiseState]]: "fulfilled",[[PromiseResult]]: Object 이렇게 뜸

//async function의 반환값=> 언제나 Promise{<fullfilled>}를 반환


// promise는 왜 나왔는가? callback hell을 피하기 위해, 그렇다면 callback hell은 왜 나왔는가? 비동기처리를 위해
// async는 promise에 비해 어떤 이점이 있고 어떻게 사용하면 되는가?

async function myAsync (data) {
    try {
        if (data<=10) throw Error(`${data} is less than 10`);
        // return data  => myAsync(100) === Promise {<fullfilled>:100}
        return await data; // myAsync(100) === Promise {<pending>:100}
    } catch (e) {
        console.log(e);
    }
}
              
console.log(myAsync(100)); // Promise {<fullfilled>:100}


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