const fetch = require('node-fetch');
const url = `https://jsonplaceholder.typicode.com/users`

function getUser (id) {
    return fetch(`${url}/${id}`)
        .then(res=>res.json())
        .then(res=>res.username)
}

//genUser(1) Promise{<pending>} ,  promise.then()이라는 건 이미 promise가 resolved되었다는 뜻
getUser(1).then(res=>console.log(res)); // Bret

async function getUserById () {
    let user;
    user = await getUser(2);
    console.log(user); // Antonette
    user = await getUser(3);
    console.log(user); // Samantha
}

getUserById();