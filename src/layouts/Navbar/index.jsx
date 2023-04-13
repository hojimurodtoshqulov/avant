import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/header_logo.png";
import c from "./styles.module.scss";
import { AlignRightOutlined } from "@ant-design/icons";
// import "../../scss/main.scss";

function Navbar() {
  function onclick() {
    
  }
  return (
    <nav className={c.navbar}>
      <div className={c.container}>
        <div className={c.leftcontainer}>
          <div className={c.logo}>
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={c.links}>
            <div className={c.a}>
              <Link to={"/about"}>О Нас</Link>
            </div>
            <div className={c.a}>
              <Link to={"/service"}>Услуги</Link>
            </div>
            <div className={c.a}>
              <Link to={"/production"}>Производство</Link>
            </div>
            <div className={c.a}>
              <Link to={"/partners"}>Партнеры</Link>
            </div>
            <div className={c.a}>
              <Link to={"/project"}>Наши проекты</Link>
            </div>
            <div className={c.a}>
              <Link to={"/contact"}>Контакты</Link>
            </div>
          </div>
        </div>
        <div>
          <div className={c.button}>
            <Button
              btnClassName={"red"}
              link={"https://kun.uz/"}
              btnTitle={"ЗАКАЗАТ ЗВАНОК"}
            />
          </div>
        </div>
        <div className={c.bars} onClick={onclick}>
          <AlignRightOutlined />
        </div>
        {/* <Button btnClassName={"borderRed"} link={'kun.uz'} btnTitle={'salomred'}  /> */}
      </div>
    </nav>
  );
}

export default Navbar;
