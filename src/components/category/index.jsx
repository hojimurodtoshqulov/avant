import React from 'react';
import c from './style.module.scss';

function Category({img,title, text, }) {
    return (
     <div className={c.category}>
         <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{text}</p>
            
     </div>   
    )
}

export default Category
