import React,{useState,useEffect} from 'react';
import Profile from './Profile';

export default function App () {
    const [userId,setUserId] = useState(0);
    return (
        <div>
            <Profile userId={userId} />
            <button onClick={()=>setUserId(userId+1)}>유저id 변경</button>
        </div>
    )
}