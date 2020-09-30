import React,{createContext,useContext} from 'react';

const UserContext = createContext();
const userInfo = {name:'Seung-chan',location:'Korea'}
export default function App () {
        return (
        <div>
            <UserContext.Provider value={userInfo}>
                <div>상단</div>
                <Profile />
                <div>하단</div>
            </UserContext.Provider>
        </div>
    )
}

function Profile () {
    return (
        <div>
            <Greeting  />
        </div>
    )
}
function Greeting () {
    
    //<UserContext.Priovider value={userInfo} /> => value에 저장된 값이 useContext의 return 값,즉 여기서는 userInfo = {name:'Seung-chan',location:'Korea'} 객체
    //결국 , 다음을 따른다 1. createContext()로 컨텍스트 생성 2. 컴포넌트에 Provider제공 3.useContext(context)통한 값 가져오기
    const {name,location} = useContext(UserContext);
    console.log('Info:',name,location);
    return (        
        <p>{name}님 안녕하세요! {location}에 있군요</p>
    )
}