import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link, NavLink} from 'react-router-dom';

import ClassApp from './Class/App';
import HooksApp from './FunctionHooks/HooksApp'
import Header from './MainComponents/Header'
import MainPath from './MainComponents/MainPath'


const App = () =>{
    return(
        <div>
        
            <Header/>
            <MainPath/>
          


          {/* <Router>
          <Link to="/" style={{padding: '20px'}}>Main</Link>
<Link exact to="/class" style={{padding: '20px'}}>Class</Link>
<Link exact to="/hooks" style={{padding: '20px'}}>Function/Hooks</Link>
<Switch>
  <Route path="/" component={MainPath}>  
<Route path= "/class" component={ClassApp}/>
<Route path= "/hooks" component={HooksApp}/>
</Route>   
</Switch>

</Router> */}
        </div>
    
    )
}

export default App