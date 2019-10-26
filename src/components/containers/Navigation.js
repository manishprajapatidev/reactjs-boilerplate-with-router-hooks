import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {

    return (
        <div className={"text-center nav"}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;