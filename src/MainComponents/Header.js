import React from 'react';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';

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