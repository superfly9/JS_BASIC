import React,{createContext,useContext,useState} from 'react';

const UserContext = createContext('Seoul');
const name = 'Seung-chan'
export default function App () {
    const [name,setName] = useState('Seung-chan')
        return (
        <div>
            <UserContext.Provider value={name}>
                <div>상단</div>
                <Profile />
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <div>하단</div>
            </UserContext.Provider>
        </div>
    )
}

//Profile은 어떤 UI도 그리지 않고, 단지 name을 전달하는 역할만 함에도 컴포넌트를 2번 거쳐써야함
function Profile () {
    return (
        <div>
            <Greeting  />
        </div>
    )
}
function Greeting () {
    const username = useContext(UserContext);
    console.log('username:',username);
    return (        
        <p>{username}님 안녕하세요!</p>
    )
}