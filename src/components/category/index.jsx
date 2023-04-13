import React from 'react';
import c from './style.module.scss';

function Category({img,title, text, categ}) {
    return (
     <div className={c.category}>
         <img src={img} alt="" />
            <h1 className={[c.categ==='red'?'red':'']}>{title}</h1>
            <p>{text}</p>
            
     </div>   
    )
}

export default Category
