import React,{useState,useEffect} from 'react';

//리사이즈시 Effect2 => (Seoul=>Effect1) 순으로 출력
export default function WidthPrinter () {
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(() => {
        console.log(`Seoul`)
        const onResize = () =>{setWidth(window.innerWidth)};
        window.addEventListener('resize',onResize); 
        console.log(`Effect 1 ${width}`)
        return () => {
            // window.removeEventListener('resize',onResize)
            console.log(`Effect 2 ${width}`);
        }
    },[width])
    return (
        <div>
            {`width is ${width}`}
        </div>
    )
}