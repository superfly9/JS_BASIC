import React,{useState,useEffect} from 'react';

export default function WidthPrinter () {
    const [width,setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',onResize);
        console.log(`Effect 1 ${window.innerWidth}`)
        return () => {
            window.removeEventListener('resize',onResize)
            console.log('Effect 2');
        }
    })
    return (
        <div>
            {`width is ${width}`}
        </div>
    )
}