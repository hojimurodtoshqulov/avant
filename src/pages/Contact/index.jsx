import Title from '../../components/Title';
import React from 'react';
import c from './style.module.scss';


function Contact() {
    return (
        <div className={c.contact}>
            <h3>КОНТАКТЫ</h3>
            <div className={c.contactShowCase}>
            <Title title={"КОНТАКТЫ"} />
            </div>
            <h2>Заполните форму обратной связи и мы
оперативно свяжемся с вами !</h2>
        </div>
    )
}

export default Contact
