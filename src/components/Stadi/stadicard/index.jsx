import React from 'react';
import c from './style.module.scss';

function StadiCard({img, staditext}) {
    return (
     <div className={c.stadicard}>
         <img src={img} alt="" />
            <p>{staditext}</p>
     </div>   
    )
}

export default StadiCard
