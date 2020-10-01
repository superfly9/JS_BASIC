//컴포넌트 재사용 => UI다루는 부분은 재사용이 쉽다,로직/데이터있는 컴포넌트는 재사용 어렵다
//비즈니스 로직이 없다
//상태값이 없다(단 ,mouseOver같이 UI위한 상태값은 예외)
import React,{useState} from 'react';
import FriendList from './component/FriendList';
import SelectNumber from './container/SelectNumber';
import getNextFriend from './data';

export default function App () {
    const [friends,setFriends] = useState([]);
    const [ageLimit,setAgeLimit] = useState(MAX_AGE_LIMIT);
    const friendsWithAgeLimit = friends.filter(value=>value.age<ageLimit);
    const handleChange = (e) =>{
        const {value} = e.target
       setAgeLimit(Number(value))
    }   
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
            ageLimit={ageLimit}
            setAgeLimit={setAgeLimit}
            desc='세 이하만 보기'
            />
            <FriendList friends={friendsWithAgeLimit} />
        </div>
    )
}

const MAX_AGE_LIMIT = 100;
const AGE_LIMIT_OPTION = [15,20,25,MAX_AGE_LIMIT];