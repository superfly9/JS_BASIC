function fetch (url,option) {
    return new Promise((resolve,reject)=>{
        const result=resolve('전달해줄 데이터')
    })
}
const result= fetch(url,option)
                .then(response=> response.json())
                .then(data=>console.log(data));