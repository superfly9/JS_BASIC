import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

const Topics = () =>{
  let match = useRouteMatch();
  console.log('match:',match)
    // <Route path='/topics />실행시 path로 넘겨준 값들이 match로 전달
    // match : {url:'/topics",path:'/topics',params: {}}
  return (
    <div>
      <h2>Topics</h2>
      {/* routing할 경로 설정 */}
      <ul>
        <li>
          <Link to={`${match.path}/seoul`}>Seoul</Link>
        </li>
        <li>
          <Link to={`${match.path}/lite`}>Lite For ME</Link>
        </li>
      </ul>
      <Switch>
        {/* 경로 일치시 보여줄 컴포넌트를 설정 */}
        <Route path={`${match.path}/:topicId`} >
          <Topic />
        </Route>
        <Route path={match.url} >
          <h3>Please Select Topic</h3>
        </Route>
      </Switch>
    </div>
  )
}

const Topic = () => {
  let {topicId} = useParams();
  console.log('useParams:',useParams()) 
  //<Route path={`${match.path}/:topicId`} >
  //useParams: {topicId: "Lite"}
  // path = {url/:변수} 사용시 useParams()에는 {변수명:값}이 담긴다
  return (
  <h3>Topic Id is:{topicId}</h3>
  )
}