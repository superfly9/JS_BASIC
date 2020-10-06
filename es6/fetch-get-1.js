const url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url) => return Promise{<fullfilled> : Response객체} , Response : {status:number,ok:boolean,url:string....}
// fetch().then(response=>response.json()) => return Promise {<fullfilled>:마지막 then에서 return하는 값(여기서는 response.json())}

const result = fetch(url).then(data=>data.json())
console.log(result)
console.log(fetch(url));

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