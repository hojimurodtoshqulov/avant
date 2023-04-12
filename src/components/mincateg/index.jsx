import React from 'react';
import c from './style.module.scss'

function Mincateg({img, title}) {
    return (
        <div className={c.Mincateg}>
            <div className={c.img}><img src={img} alt="" /></div>
            <h3>{title}</h3>
        </div>
    )
}

export default Mincateg
