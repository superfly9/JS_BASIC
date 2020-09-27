import React from 'react';
import './App.css';
import Seoul from '../Todo/prac'
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom';
import Rooms from './Component/Rooms';

function App() {
  return (
    // <BrowserRouter>
    //   <div style={{padding:20,border:'2px solid black'}}>
    //     <ul style={{listStyle:'none',padding:0}}>
    //       <li>
    //         <Link to='/'>홈</Link>
    //       </li>
    //       <li>
    //         <Link to='/photo'>사진</Link>
    //       </li>
    //       <li>
    //         <Link to='/rooms'>방 소개</Link>
    //       </li>
    //       <li>
    //         <Link to='/todo'>메모장</Link>
    //       </li>
    //     </ul>
        
    //     <Switch>
    //       <Route path='/' exact component={Home} />
    //       <Route path='/photo' component={Photo} />
    //       <Route path='/rooms' component={Rooms} />
    //       <Route path='/todo' component={Todo} />
    //     </Switch>
    //   </div>
    // </BrowserRouter>
    <>
      <Seoul />
    </>
  );
}

const Home = ()=><h2>홈페이지입니다</h2>
const Photo =()=><h2>여기서 사진을 감상하세요</h2>


export default App;
