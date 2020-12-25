import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header style={headerStyle}>
                <h1>ToDo</h1>
                <Link to='/' style={linkStyle}>Home</Link> | <Link to='/about' style={linkStyle}>About</Link>
            </header>
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '12px'
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}

export default Header;