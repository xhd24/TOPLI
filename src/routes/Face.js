import React from 'react';
import './Home.css';
import button from '../img/button2.png';
import {Link} from 'react-router-dom';

export default function Face(){
    return(
    <div className="face">
    <Link to="/result">
    <span><img src={button}/></span>
    </Link>

    </div>

    )
}