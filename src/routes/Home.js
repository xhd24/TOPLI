import React from "react";
import './Home.css';
import logo from '../img/logo.png';
import button from '../img/button.png';
import {Link} from 'react-router-dom';

function Home() {
  return (
  
    <div className="logo">
       <span><img src={logo} alt="logo" /></span>
       <span className="sub_text"><h1>오늘 기분은 어떠신가요?</h1></span>
       <span className="main_text"><h1>당신의 지금 기분에 맞는 음악을 추천해드릴게요</h1></span>
       
       

    <Link to="/face" >
    <span><img src={button}/></span>
    </Link>

    </div>
    
  );
 
}

export default Home;
