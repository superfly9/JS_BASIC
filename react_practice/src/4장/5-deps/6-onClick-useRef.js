import React,{useRef} from 'react';

function MyComponent ({onClick}) {
    const onClickRef = useRef();
    useEffect(() => {
        onClickRef.current  = onClick;
    })
    useEffect(() => {
        window.addEventListener('click',()=>{
            onClickRef.current()
        })
    })
}