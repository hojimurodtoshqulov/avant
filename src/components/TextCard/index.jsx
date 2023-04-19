import React from 'react';
import './style.css';
import Button from '../Button';

function TextCard({btnCN, theme,img, subtitle,title, location, text,line}) {
    return (
        <div className={'TextCard'} >
            <div className={ `card ${theme ? "order1" : "order2"}`}>
                <div>
                <h5>{subtitle}</h5>
                    <div></div>
                </div>
                <h3>{title}</h3>
                <div className={`${line==="black"?"black":'grey'}`}></div>
                <p>{location}</p>
                <p>{text}</p>
                <div><Button btnClassName={btnCN} /></div>
                
            </div>
            <div className={`card ${theme ? "order2" : "order1"}` }>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default TextCard
