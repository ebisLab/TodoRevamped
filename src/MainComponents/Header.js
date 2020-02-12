import React from 'react';
import {BrowserRouter as Router, Route, Switch,Link, NavLink} from 'react-router-dom';

import ClassApp from '../Class/App';
import HooksApp from '../FunctionHooks/HooksApp'

const Header = () =>{

    return(
<header>
        <Link to="/" style={{padding: '20px'}}>Main</Link>
        <Link to="/class" style={{padding: '20px'}}>Class</Link>
        <Link to="/hooks" style={{padding: '20px'}}>Function/Hooks</Link>
        </header>
    
        )
}

export default Header