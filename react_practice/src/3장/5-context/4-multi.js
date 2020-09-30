import React,{useState,createContext,useContext} from 'react';

const UserContext = createContext('unknown');
const ThemeContext = createContext('dark');

export default function App () {
    return (
        <div>
            <ThemeContext.Provider value='light'>
                <UserContext.Provider value='Seung-chan' >
                    <div>상단</div>
                    <Profile />
                    <div>하단</div>
                </UserContext.Provider>
            </ThemeContext.Provider>
        </div>
    )
}

const Profile = () =>{
    return (
        <div>
            <Greeting />
        </div>
    )
}
const Greeting = () =>{
    //데이터 종류별로 context나눠서 불필요한 렌더링 방지
    //즉, theme이 변할때 username만 사용하는 곳에서는 렌더링 일어나지 않는다.
    const theme = useContext(ThemeContext);
    const username = useContext(UserContext);
    return (
    <p style={{color : theme === 'dark' ? 'gray'  : 'pink'}}>{username}님 안녕하세요</p>
    )
}