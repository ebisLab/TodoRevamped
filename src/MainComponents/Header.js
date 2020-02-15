import React from 'react';
import {Link} from 'react-router-dom';

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