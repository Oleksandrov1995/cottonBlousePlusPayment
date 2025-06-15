import React, { useEffect } from "react";
import './PayMethods.css';

export const PayMethods = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pay.fondy.eu/s/c54w1EWgh";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  const startFondyPayment = ({ amount, description }) => {
    if (!window.$ipsp) {
      alert("Завантаження платіжного скрипта Fondy...");
      return;
    }

    const button = window.$ipsp.get('button');
    button.setMerchantId(1555449); // заміни на свій merchant_id
    button.setAmount(amount, 'UAH', true);
    button.setResponseUrl('https://oleksandrov1995.github.io/cottonBlousePlusPayment'); // твоя URL після оплати
    button.setHost('pay.fondy.eu');

    button.addField({
      label: '298489',
      name: '8425',
      required: true
    });

    button.addField({
      label: 'Опис платежу',
      name: 'description',
      value: description,
      readonly: true
    });

    window.location.href = button.getUrl();
  };
  return (
    <div>
      {/* Дякуємо за замовлення */}
      <div className="ThankYou">
        <div className="ThankYou-text">
          <h1 className="Thank-text">Дякуємо за замовлення!</h1>
          <h3 className="Pay-text">
            Ваше замовлення прийнято, <b>оберіть зручний спосіб оплати</b>, щоб ми могли швидше його обробити
          </h3>
        </div>
      </div>

      {/* Способи оплати */}
      <div className="PayMathod">
        <div className="card">
          <h4>Часткова передплата:</h4>
          <div className="line-and-text">
            <div className="line"></div>
            <p className="sum">до оплати: 86 грн</p>
          </div>
          <p className="note">*при отриманні решта суми та за доставку</p>
          <button onClick={() => startFondyPayment({ amount: 86, description: '897897894' })}>
            Оплатити частково
          </button>
        </div>

        <div className="card">
          <h4>Повна передплата:</h4>
          <div className="line-and-text">
            <div className="line"></div>
            <p className="sum">до оплати: 845 грн</p>
          </div>
          <p className="note">*при отриманні лише за доставку</p>
          <button onClick={() => startFondyPayment({ amount: 845, description: 'klnmklmlk' })}>
            Оплатити повністю
          </button>
        </div>
      </div>

      {/* ...інша частина компонента */}
    </div>
  );
};
