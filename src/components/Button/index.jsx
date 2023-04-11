import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
function Button({ btnClassName, link, btnTitle }) {
  const classNames = ['red', 'borderWhite', 'borderRed'];

  return (
    <Link to={link} className="link" href="http://">
      <button
        // className={color === "red" ? "button red" : " button"}
        className={
					(classNames.filter((item) => btnClassName === item).join(""))
					// btnClassName === "buttonDenger"
					// 	? scss.button && scss.buttonDenger
					// 	: scss.button
				}
        type="submit"
      >
        {btnTitle}
      </button>
    </Link>
  );
}

export default Button;
