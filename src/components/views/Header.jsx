import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=> {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/api">Api</Link></li>
            </ul>
        </>
    )
};

export { Header };
