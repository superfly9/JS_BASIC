import React,{useState} from 'react';
import FriendList from './component/FriendList';
import SelectNumber from './container/SelectNumber';
import getNextFriend from './data';

//로직 처리 및 데이터를 받아서 전달하는 기능
export default function FriendPage () {
    const [friends,setFriends] = useState([]);
    const [ageLimit,setAgeLimit] = useState(MAX_AGE_LIMIT);
    
    const friendsWithAgeLimit = friends.filter(value=>value.age<ageLimit);
    const onAdd = () =>{
        const friend = getNextFriend()
        setFriends([...friends,friend])
    }
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <h2>친구들아 안녕</h2>
            <SelectNumber 
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