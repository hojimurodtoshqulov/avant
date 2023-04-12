import React from "react";

function Title({img,title,text}) {
  return <div className="nmadr">Title
  <div><img src={img} alt="" /></div>
  <div>
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
  </div>;
}

export default Title;
