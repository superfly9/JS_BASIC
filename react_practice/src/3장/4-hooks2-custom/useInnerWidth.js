import React,{useState,useEffect} from 'react';

//useState를 쓰지만, UI를 다루는 부분은 여기서 X
export default function useInnerWitdh () {
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
    return width;
}
