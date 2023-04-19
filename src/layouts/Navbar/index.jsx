import React, { useRef } from "react";
import ButtonNav from "../../components/Button";
import { Link } from "react-router-dom";
import Logo from "../../assets/header_logo.png";
import "./styles.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

function Navbar() {
  let barRef = useRef();
  let blurRef = useRef()
  let navFormRef = useRef();

  const showNavbar = () => {
    barRef.current.classList.toggle("bars");
    // console.log("salom");
  };

  const req = () => {
    navFormRef.current.classList.toggle("navform")
  }

  return (
    <nav className={"navbar"}>
      <div ref={blurRef} className={"container"}>
        <div></div>
        <div className={"leftcontainer"}>
          <div className={"logo"}>
            <Link to={"/"}>
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div ref={barRef} className={"links"}>
            <div className={"a"}>
              <div className="blur"></div>
              <Link to={"/about"}>О Нас</Link>
            </div>
            <div className={"a"}>
              <Link to={"/service"}>Услуги</Link>
            </div>
            <div className={"a"}>
              <Link to={"/production"}>Производство</Link>
            </div>
            <div className={"a"}>
              <Link to={"/partners"}>Партнеры</Link>
            </div>
            <div className={"a"}>
              <Link to={"/project"}>Наши проекты</Link>
            </div>
            <div className={"a"}>
              <Link to={"/contact"}>Контакты</Link>
            </div>
            <button className={"nav_bars close_bars"} onClick={showNavbar}>
              <FaTimes />
            </button>
          </div>
        </div>

        <div>
          <div onClick={req} className="button">
            <ButtonNav
              btnClassName="red"
              btnTitle={"ЗАКАЗАТ ЗВАНОК"}
            />
          </div>
        </div>
        <div className="nav_bars" onClick={showNavbar}>
          <FaBars />
        </div>
        {/* <Button btnClassName={"borderRed"} link={'kun.uz'} btnTitle={'salomred'}  /> */}
      </div>


    {/* zakazat */}
      <div  className={'formPage'} ref={navFormRef}>
        <h1>
          Заполните форму обратной связи и мы оперативно свяжемся с вами !
        </h1>
        <div></div>
        <p>Поля отмеченные (*) обязательные для заполнения !</p>
       
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button onClick={req} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </nav>
  );
}

export default Navbar;
