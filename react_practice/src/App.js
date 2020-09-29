import React,{useState,useEffect} from 'react';
import Profile from './3장/4-hooks2-custom/Profile';

export default function App () {
    const [userId,setUserId] = useState(1);
    return (
        <div>
            <Profile userId={userId} />
            <button onClick={()=>setUserId(userId+1)}>유저id 변경</button>
        </div>
    )
}