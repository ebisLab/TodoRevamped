import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link, NavLink, Redirect} from 'react-router-dom';

import ClassApp from './Class/App';
import HooksApp from './FunctionHooks/HooksApp'

const App = () =>{
    return(
        <div>

          <Router>

<Link exact to="/class" style={{padding: '20px'}}>Class</Link>
<Link exact to="/hooks" style={{padding: '20px'}}>Function/Hooks</Link>
<Switch>
<Route path= "/class" component={ClassApp}/>
<Route path= "/hooks" component={HooksApp}/>
</Switch>

</Router>
        </div>
    
    )
}

export default App