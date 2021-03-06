import React,{useState} from 'react';
import SelectNumber from '../component/SelectNumber';
import FriendList from '../component/FriendList';
import getNextFriend from '../data';

export default function FriendPage () {
    const [friends,setFriends] = useState([]);
    const [ageLimit,setAgeLimit] = useState(MAX_AGE_LIMIT);
    
    const friendsWithAgeLimit = friends.filter(value=>value.age<=ageLimit);

    const onAdd = () =>{
        const friend = getNextFriend()
        setFriends([...friends,friend])
    }
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <h2>친구들아 안녕</h2>
            <SelectNumber 
            ageLimit={ageLimit}
            limit_option={AGE_LIMIT_OPTION} 
            setAgeLimit={setAgeLimit}
            desc='세 이하만 보기'
            />
            <FriendList friends={friendsWithAgeLimit} />
        </div>
    )
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTION = [15,20,25,MAX_AGE_LIMIT];