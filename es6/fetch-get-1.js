const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url) => return Promise{<fullfilled> : Response객체} , Response : {status:number,ok:boolean,url:string....}
// 즉, fetch(url)은 Promise{<fullfilled> : Response객체}를 반환, fetch(url).then(response=>response.json()).then(data=>data)을 해줘야 데이터가 포함된 Promise {<fullfilled> :data}를 반환
// fetch().then(response=>response.json()) => return Promise {<fullfilled>:마지막 then에서 return하는 값(여기서는 response.json())}

const result = fetch(url).then(response=>response.json())
console.log(result) // Promise {<fullfilled> : [{},{}...]}
console.log(fetch(url)); // Promise {<fullfilled> : {status:200,url:'https://jsonplaceholder.typicode.com/users', ok:true}}

const option = {
    method : 'POST',
    headers : {'Content-Type': 'application/json'},
    body : JSON.stringify({city:'Seoul-Lite'})
}

const getFetch = fetch(url)                   
                    .then(response=>{
                        return response.json()})
                    .then(data=>data)
                    .catch(err=>console.log('Fetch Error:',err));

console.log(getFetch); // Promise{<fullfilled>:data(마지막 then이 return 해주는 data)}

let data;
(async ()=>{
    const response = await fetch(url); // Response {type:"cors",url:'' ,status:200....}
    console.log('response:',response);
    const fetchData = await response.json(); // data [{},{},{}.....], response.json()앞에 await붙여줘야
    data = fetchData;
    console.log(data); 
})(url)
console.log('Data:',data) // Data: undefined

const getFetch2 = async (url)=>{
    const response = await fetch(url); // Reponse 객체
    myJson = await response.json()
    return myJson
}
// Promise{<pending>} = async()
console.log(getFetch2(url)); // Promise{<pending>}