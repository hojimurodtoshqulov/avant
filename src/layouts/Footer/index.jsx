import React from "react";
import logo from "../../assets/logo.png";
import c from "./style.module.scss";

function Footer() {
  return (
    <footer className={c.footer}>
      <div className={c.Footercards}>
        <div className={c.card}>
          {" "}
          <img src={logo} alt="" />
        </div>
        <div className={c.card}>
          <p>
            Компания OOO 'ENGINEERING' Avant Metal Group зарекомендовала себя
            как надежного и ответственного производителя, в продукции которой вы
            можете быть уверены.
          </p>
          <hr />
          {/* <div>
            <img src={} alt="" />
            <img src={} alt="" />
            <img src={} alt="" />
          </div> */}
        </div>
        <div className={c.card}>
          <h4>ПРОИЗВОДСТВО</h4>
          <p>Ангары</p>
          <p>Уникальные здания</p>
          <p>Промышленные здания</p>
          <p>Строительные краны</p>
        </div>
        <div className={c.card}>
          <h4>О КОМПАНИИ</h4>
          <p>Производтвенный комплекс</p>
          <p>Конструкторское бюро</p>
          <p>Оборудование</p>
          <p>Наши Проекты</p>
          <p>Новости</p>
        </div>
        <div className={c.card}>
          <h4>КОНТАКТЫ</h4>
          <p>Обратная связь</p>
          <hr />
          <p>По вопросам партнерства</p>
        </div>
      </div>
      <div className={c.footerend}>
        <p>OOO 'ENGINEERING' Avant Metal Group © 2021 Все права защищены</p>
        <p>Условия обработки персональных данных</p>
      </div>
    </footer>
  );
}

export default Footer;
