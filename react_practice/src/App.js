import React from 'react';
import './App.css';
import Todo from './Todo';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Rooms from './Component/Rooms';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{padding:20,border:'2px solid black'}}>
        <Link to='/'>홈</Link>
        <br />
        <Link to='/photo'>사진</Link>
        <br />
        <Link to='/rooms'>방 소개</Link>
        <br />
        <Route path='/' exact component={Home} />
        <Route path='/photo' component={Photo} />
        <Route path='/rooms' component={Rooms} />
        <Todo />
      </div>
    </BrowserRouter>
  );
}

const Home = ()=><h2>홈페이지입니다</h2>
const Photo =()=><h2>여기서 사진을 감상하세요</h2>


export default App;
