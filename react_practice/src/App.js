import React,{useState,useEffect} from 'react';
import userInnerWidth from './3장/4-hooks2-custom/useInnerWidth';

export default function App () {
    const width = userInnerWidth()
    return (
        <div>
            {`width is ${width}`}
        </div>
    )
}