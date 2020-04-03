import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ClassApp from '../Class/App';
import HooksApp from '../FunctionHooks/HooksApp'
import Home from './Home'
import StateApp from '../State/StateApp'

const MainPath = () =>{
    return(<div>
{/* <Home /> */}
    <Switch>
  <Route exact path="/" component={Home}/>  
<Route exact path= "/class" component={ClassApp}/>
<Route exact path= "/hooks" component={HooksApp}/>
<Route exact path= "/reducer" component={StateApp}/>

</Switch>

    
    </div>)
}

export default MainPath