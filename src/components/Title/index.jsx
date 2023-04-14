import React from "react";
import img from '../../assets/red_element.svg';
import c from './style.module.scss';

function Title({title, text}) {
  return <div className={c.title}>
  <div><img src={img} alt="" /></div>
  <div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
  </div>;
}

export default Title;
