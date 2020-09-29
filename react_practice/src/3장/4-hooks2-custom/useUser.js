import React,{useState,useEffect} from 'react';

export default function useUser (userId) {
    const [user,setUser] = useState(null);
    useEffect(()=>{
        getUserApi(userId).then(data=>setUser(data))
    },[userId])
    return user;
}

const USER1 = {name:'React',age:33};
const USER2 = {name:'Vue',age:56};

const getUserApi = (userId) => {
    console.log(userId)
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(userId%2 ? USER2 : USER1)
        },500)
    })
}