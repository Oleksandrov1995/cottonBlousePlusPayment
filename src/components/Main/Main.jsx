import "./Main.css"
import React from 'react';
import { Link } from "react-router-dom";
export const Main = ()=>{
    return(
        <section className="main-container">
            <img className="main-discount" src={require('../../Images/discount30.png')}  alt="discount" />
            <div className="main-titles">
<h1 className="main-title">ОРИГІНАЛЬНІ ТА КЛАСИЧНІ  СОРОЧКИ УСИХ РОЗМІРІВ З НАТУРАЛЬНИХ ТА ЕФЕКТНИХ ТКАНИН</h1>
<h4 className="title">НАЙКРАЩІ РІШЕННЯ ДЛЯ ОФІЦІЙНИХ ТА ПОВСЯКДЕННИХ ОБРАЗІВ</h4>
<ul className="main-benefits">
<li><h3>Відправка протягом 1-3 днів </h3></li>
<li><h3>Легкі в підборі розміру</h3></li>
<li><h3>Безпосередній контроль якості</h3></li>
</ul>
<Link className="backLink" to={`/paymethods`}>
       <p>Оплата</p>
      </Link>
</div>
<img src={require('../../Images/logo2.png')} alt="Logo" className="main-logo" />
        </section>
    )
}