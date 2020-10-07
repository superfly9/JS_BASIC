function myPromise (data) {
    return new Promise((resolve,reject)=>{
        if (data>=10) resolve(data)
        else reject(`${data} is less than 10`)
    })
}

// console.log(myPromise(5));   Promise {<rejected>:"5 is less than 10"} => Promise.catch()통해 에러 처리하자
// console.log(myPromise(20));  Promise {<fullfilled> :20}  resolve에 넣어준 값을 .then()을 통해 사용할 수 있다.
myPromise(29)
    .then(data=>`${data} is 1st data`) // then의 return값이 그 다음 then의 인자로 넘어간다
    .then(data=>console.log(data))
    .catch(e=>console.log(e));


const seoul = async (data)=>{
    const result = myPromise(data); // Promise {<fullfilled> : 30}  ,Promise {<rejected>: "Seoul is less than 10"}
    console.log('result:',result);

    const awaitResult = await myPromise(data); // 30, promise에 await을 붙이면 resolve()에 전달된 값이 반환된다. await myPromise(data) === data
    console.log('awaitResult:',awaitResult);
}
seoul(30);
seoul('Seoul');  