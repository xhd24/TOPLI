import React from 'react';
import './Result.css';

export default function Result(){

    const result = 1;
      return (
        <div >
        {
          (function(){
            if(result == 1){
                return(
                    <div className='result'>
                    <h2 style={{display:'inline-block'}}>당신의 지금 기분은 </h2>
                    <h1 style={{color:'#3e3d85',fontSize:'30px', display:'inline-block'}}> 슬픔 </h1>
                    <h2 style={{display:'inline-block'}}>이군요</h2>
                    <h2>다음 노래를 추천해드릴게요</h2>
                    </div>
                );
            }else if(result == 2){
                return(
                    <div className='result'>
                    <h2 style={{display:'inline-block'}}>당신의 지금 기분은</h2>
                    <h1 style={{color:"pink", display:'inline-block'}}>기쁨</h1>
                    <h2 style={{display:'inline-block'}}>이군요</h2>
                    <h2>다음 노래를 추천해드릴게요</h2>
                    </div>
                );
            }else if(result == '3'){
                return(
                    <div className='result'>
                    <h2 style={{display:'inline-block'}}>당신의 지금 기분은</h2>
                    <h1 style={{color:"yellow", display:'inline-block'}}>신남</h1>
                    <h2 style={{display:'inline-block'}}>이군요</h2>
                    <h2>다음 노래를 추천해드릴게요</h2>
                    </div>
                );
            }else if(result=='4'){
                return(
                    <div className='result'>
                    <h2 style={{display:'inline-block'}}>당신의 지금 기분은</h2>
                    <h1 style={{color:"purple", display:'inline-block'}}>놀람</h1>
                    <h2 style={{display:'inline-block'}}>이군요</h2>
                    <h2>다음 노래를 추천해드릴게요</h2>
                    </div>
                );
            }else {
                return(
                    <div className='result'>
                    <h2 style={{display:'inline-block'}}>당신의 지금 기분은</h2>
                    <h1 style={{color:"red", display:'inline-block'}}>화남</h1>
                    <h2 style={{display:'inline-block'}}>이군요</h2>
                    <h2>다음 노래를 추천해드릴게요</h2>
                    </div>
            );}
        })()
    }</div>
      );
}
    
        
                    
