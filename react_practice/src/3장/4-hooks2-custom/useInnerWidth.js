import React,{useState,useEffect} from 'react';

export default function useInnerWitdh () {
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(() => {
        console.log(`Seoul`)
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
