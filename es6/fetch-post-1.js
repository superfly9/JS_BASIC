const url = `https://jsonplaceholder.typicode.com/todos`
//길이가 200인 배열을 가지고 있음
const postData = {
    userId: 12,
    title: 'coding task',
    completed: false
}

//function to make API Call
const postFetch = async (url,data) => {
  const response = await fetch(url, {
      method: 'POST',
      headers: {
        //type of data
        'Content-Type': 'application/json'
      },
      //data to be posted on server
      body: JSON.stringify(data)
    }); // Response {status,url,ok,redirected...}
  //convert response to Json format
  const myJson = await response.json();
  console.log('myJson:',myJson)
  // {userId: 12, title: "coding task", completed: false, id: 201}
  // 201번째 값이기에 id:201
  //return the response
  return myJson ;
}
let data;
console.log('post Result:',postFetch(url,postData).then(result=>console.log(result)));
console.log(data);  