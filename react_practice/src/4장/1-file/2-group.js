import React,{useState,useEffect} from 'react';

export default function Profile ({userId}) {
    //연관되어 있는 코드끼리 묶기, 가독성에 좋고 custom Hook으로 바꾸기에도 좋다
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

