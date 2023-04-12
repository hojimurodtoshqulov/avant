import React from 'react';
import './style.css';
import Button from '../Button';

function OurProject({theme,img, subtitle,title, location, text,line}) {
    return (
        <div className={'ourproject'} >
            <div className={ `card ${theme ? "order1" : "order2"}`}>
                <h5>{subtitle}</h5>
                <h3>{title}</h3>
                <div className={`${line==="black"?"black":'grey'}`}></div>
                <p>{location}</p>
                <p>{text}</p>
                <div><Button btnClassName={'borderRed'} btnTitle={'asdfgh'} /></div>
                
            </div>
            <div className={`card ${theme ? "order2" : "order1"}` }>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default OurProject
