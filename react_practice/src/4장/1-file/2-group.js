import React,{useState,useEffect} from 'react';

export default function Profile ({userId}) {
    const [user,setUser] = useState(null);
    useEffect(()=>{
        getUserApi(userId).then(data=>setUser(data))
    },[userId])

    const [width,setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () =>{setWidth(window.innerWidth)};
        window.addEventListener('resize',onResize); 
        console.log(`Effect 1 ${width}`)
        return () => {
            window.removeEventListener('resize',onResize)
            console.log(`Effect 2 ${width}`);
        }
    },[width])    

}

