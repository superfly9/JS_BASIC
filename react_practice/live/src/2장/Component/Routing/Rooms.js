import React from 'react'
import { Link,useRouteMatch, Switch, Route, useParams,BrowserRouter } from 'react-router-dom';

function Rooms(props) {
    console.log('props:',props,'useRouteMatch:',useRouteMatch())
    const match = useRouteMatch();
    // <Route path='/rooms' component={Rooms} />
    //useRouteMatch() === props.match와 동일
    // {url:'/rooms' ,path:'/rooms', params :{} , isExact:true}
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${match.path}/seoul`}>서울의 밤</Link>
                </li>
                <li>
                    <Link to={`${match.path}/myLite`}>나의 밝은 미래가 되길</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${match.url}/:roomId`} component={Room} />
                <Route path={match.path}>
                    <h2>원하는 방을 클릭하세요</h2>
                </Route>
            </Switch>
        </div>
    )
}
const Room = (props) =>{
    const {roomId} = useParams();
    // <Route path={`${match.url}/:roomId`} component={Room} />
    // component ={ Room }을 통해 routing해야 props.history/match/location에 접근 가능
    console.log('Props:',props,'useParams:',useParams())
    // {roomId : myLite or seoul}
    return (
    <div>Welcome To {`${roomId}`}'s place</div>
    )
}
export default Rooms
