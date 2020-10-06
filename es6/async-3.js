const USER_URL = 'https://jsonplaceholder.typicode.com/users/1'
const TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';

function fetchUser(url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
} // 객체 반환
console.log(fetchUser(USER_URL)) // Promise {<fullfilled>:response.json()}
console.log(fetch(TODO_URL)) // Promise {<fullfilled> : Response객체}

let result =fetch(USER_URL)
    .then(response => response.json())
    .then(result=>result)
  
console.log(result); //객체

function fetchTodo(url) {
    return fetch(url).then(function(response) {
      return response.json();
    });
  }
  