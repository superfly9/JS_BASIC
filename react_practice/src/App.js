import React,{useState,useEffect} from 'react';
import InnerWitdth from './3장/4-hooks2-custom/InnerWidth';

export default function App () {
    const [userId,setUserId] = useState(0);
    return (
        <div>
            <InnerWitdth />
        </div>
    )
}