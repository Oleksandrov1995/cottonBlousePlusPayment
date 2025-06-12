import React from "react";
import './PayMethods.css'

export const PayMethods = () => {
  return (
    <div>
      {/* Thank You Section */}
      <div className="ThankYou">
        <div className="ThankYou-text">
          <h1 className="Thank-text">Дякуємо за замовлення!</h1>
          <h3 className="Pay-text">
            Ваше замовлення прийнято, <b>оберіть зручний спосіб оплати</b>, щоб ми могли швидше його обробити
          </h3>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="PayMathod">
        <div className="card">
          <h4>Часткова передплата:</h4>
          <div className="line-and-text">
            <div className="line"></div>
            <p className="sum">до оплати: 86 грн</p>
          </div>
          <p className="note">*при отриманні решта суми та за доставку</p>
          <button>Оплатити частково</button>
        </div>

        <div className="card">
          <h4>Повна передплата:</h4>
          <div className="line-and-text">
            <div className="line"></div>
            <p className="sum">до оплати: 845 грн</p>
          </div>
          <p className="note">*при отриманні лише за доставку</p>
          <button>Оплатити повністю</button>
        </div>
      </div>

      {/* Agreement Section */}
      <div className="agreement">
        <p className="agreement-text">
          Натискаючи кнопку “Оплатити частково” або “Оплатити повністю”, я погоджуюся з умовами та правилами нижче
        </p>
        <div className="accordion">
          <input type="checkbox" id="faq1" hidden />
          <label htmlFor="faq1" className="accordion-label">
            <p className="agree-text">
              Правила та умови
              <svg className="arrow" viewBox="0 0 24 24" width="24" height="24">
                <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            </p>
          </label>
          <div className="accordion-content">
            <p>
              1.<b>Оплата замовлення здійснюється через надійного платіжного провайдера FONDY...</b>
            </p>
            <p>
              - умови публічної оферти FONDY
              <a href="https://fondy.ua/uploads/%D0%9E%D1%84%D0%B5%D1%80%D1%82%D0%B0_%D0%B4%D0%BB%D1%8F_%D0%9F%D0%BB%D0%B0%D1%82%D0%BD%D0%B8%D0%BA%D1%96%D0%B2-p2p_winget.docx">
                (детальніше)
              </a>
            </p>
            <p>- правила банку-еквайра АТ «ПРИВАТБАНК» що до обробки платежів</p>
            <p><b>Можлива коміся банку:</b></p>
            <ul>
              <li className="point">0,5 – 1,5% + 5 ₴ за тарифами переказів з картки на картку;</li>
              <li className="point">4% у разі використання кредитних коштів;</li>
            </ul>
            <p>Комісія не зменшує суму замовлення і сплачується додатково.</p>
            <p>
              2. Погоджуюся із <b>Політикою конфіденційності</b> сайту
              <a href="https://cotonblouseplus.pp.ua"> <b>cotonblouseplus.pp.ua</b></a>
            </p>
            <p>3. <b>Повернення товару при повній передплаті:</b></p>
            <ul>
              <li className="point">Товар має бути в товарному ж вигляді.</li>
              <li className="point">Повне повернення коштів можливе у разі браку протягом 14 днів.</li>
              <li className="point">В інших випадках клієнт компенсує доставку назад.</li>
            </ul>
            <p>4. Умови при частковій передплаті:</p>
            <ul>
              <li className="point">
                На пошті сплачується залишок суми (повна вартість мінус 86 грн).
              </li>
              <li className="point">
                У разі відмови від отримання — 86 грн не повертаються, окрім випадків браку. Ця сума вважається
                компенсацією за доставку повернення і вартість примірки.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

