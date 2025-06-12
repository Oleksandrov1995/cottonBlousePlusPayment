export const productsTypeData = [
  {
    id: 'natural',
    imageSrc: require('../Images/products/natural/naturalWhite.jpg'),
    type: 'Natural',
    price: 985,
    todayPrice: 689,
    discount: 30,
    aboutTitle:
      'Найпопулярніша модель нашого магазину, дихаюча та приємна тканина. Рукава мають волани на манжетах та зав`язку, завдяки якій можна регулювати довжину на руці. Спинка злегка подовжена. Прямий крій сорочки відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (
      <div>
        {/* <p>Переваги:</p>
      <p> - Легкі штани з гарною циркуляцією повітря;</p>
      <p> - Еластичні та зручні гумки для фіксації на широкому діапазоні параметрів;</p>
      <p> - Яскрава, нарядна та практична тканина;</p>
      <p> - Елементи легко комбінуються між собою та з іншим одягом.</p> */}
        <p>- Тканина: полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#000', '#967b64', '#0000ff'],
    colorsImg: [
      {
        id: 'naturalWhite',
        img: require('../Images/products/natural/naturalWhite.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'naturalBlue',
        img: require('../Images/products/natural/naturalBlue.jpg'),
        colorName: 'Синій',
      },
      {
        id: 'naturalBlack',
        img: require('../Images/products/natural/naturalBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'naturalBezevy',
        img: require('../Images/products/natural/naturalBezevy.jpg'),
        colorName: 'Бежевий',
      },
      {
        id: 'naturalBlack2',
        img: require('../Images/products/natural/naturalBlack2.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'naturalWhite2',
        img: require('../Images/products/natural/naturalWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'naturalBlue2',
        img: require('../Images/products/natural/naturalBlue2.jpg'),
        colorName: 'Синій',
      },
      {
        id: 'naturalWhite3',
        img: require('../Images/products/natural/naturalWhite3.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56', '58-60'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>Ваш обхват грудей</th>
              <th>Обхват грудей виробу</th>
              <th>Довжина позаду</th>
              <th>Довжина попереду</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>42-44</td>
              <td>84-96 см</td>
              <td>114 см</td>
              <td>78 см</td>
              <td>62 см</td>
            </tr>
            <tr>
              <td>46-48</td>
              <td>97-106 см</td>
              <td>118 см</td>
              <td>78 см</td>
              <td>62 см</td>
            </tr>
            <tr>
              <td>50-52</td>
              <td>107-116 см</td>
              <td>124 см</td>
              <td>80 см</td>
              <td>64 см</td>
            </tr>
            <tr>
              <td>54-56</td>
              <td>117-122 см</td>
              <td>132 см</td>
              <td>83 см</td>
              <td>68 см</td>
            </tr>
            <tr>
              <td>58-60</td>
              <td>120-135 см</td>
              <td>142 см</td>
              <td>83 см</td>
              <td>69 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'volani',
    imageSrc: require('../Images/products/volani/volaniWhite.jpg'),
    type: 'Volani',
    price: 955,
    todayPrice: 699,
    discount: 30,
    aboutTitle:
      'Сорочка в якій неймовірне все! Акцентний витягнутий комірець в поєднанні з прямими рукавами, котрі легким рухом перетворюються в ніжні, обʼємні фонарики котрі ви бачите на фото. Сорочка гарно сидить на будь якому типі фігури і доповнить ваш образ.',
    aboutText: (
      <div>
        <p>- Тканина: полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#967b64', '#0000ff'],
    colorsImg: [
      {
        id: 'volaniWhite',
        img: require('../Images/products/volani/volaniWhite.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'Volanibzh',
        img: require('../Images/products/volani/Volanibzh.jpg'),
        colorName: 'Бежевий',
      },

      {
        id: 'volaniBlue',
        img: require('../Images/products/volani/volaniBlue.jpg'),
        colorName: 'Синій',
      },

      {
        id: 'volaniWhite2',
        img: require('../Images/products/volani/volaniWhite2.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'volaniBezevy',
        img: require('../Images/products/volani/volaniBezevy.jpg'),
        colorName: 'Бежевий',
      },

      {
        id: 'VolaniBlue2',
        img: require('../Images/products/volani/VolaniBlue2.jpg'),
        colorName: 'Синій',
      },

      {
        id: 'VolaniRiKha',
        img: require('../Images/products/volani/VolaniRiKha.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-44', '46-48', '50-52'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>Обхват грудей виробу</th>
              <th>Ваш обхват грудей</th>
              <th>Довжина попереду</th>
              <th>Довжина по спинці</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>42-44</td>
              <td>104см</td>
              <td>88-100 см</td>
              <td>60 см</td>
              <td>60 см</td>
            </tr>
            <tr>
              <td>46-48</td>
              <td>112 см</td>
              <td>101-108 см</td>
              <td>62 см</td>
              <td>62 см</td>
            </tr>
            <tr>
              <td>50-52</td>
              <td>120 см</td>
              <td>109-116 см</td>
              <td>64 см</td>
              <td>64 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'longBlouse',
    imageSrc: require('../Images/products/longBlouse/longBlouseWhite.jpg'),
    type: 'Long-Blouse',
    price: 1070,
    todayPrice: 749,
    discount: 30,
    aboutTitle:
      'Легка сукня-сорочка з легкої та дихаючої бавовни. Рукава довгі, мають гудзики на манжетах, також є кишеня на грудях. Низ заокруглений із розрізами по боках, для візуального подовження ніг. Лінія плеча приспущена. Прямий крій сукні-сорочка відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури.',
    aboutText: (
      <div>
        <p>- Тканина: полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff'],
    colorsImg: [
      {
        id: 'longBlouseWhite',
        img: require('../Images/products/longBlouse/longBlouseWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'longBlouseWhite2',
        img: require('../Images/products/longBlouse/longBlouseWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'longBlouseWhite3',
        img: require('../Images/products/longBlouse/longBlouseWhite3.jpg'),
        colorName: 'Білий',
      },

      {
        id: 'longBlouseWhite4',
        img: require('../Images/products/longBlouse/longBlouseWhite4.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'longBlouseWhite5',
        img: require('../Images/products/longBlouse/longBlouseWhite5.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-46', '48-52'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-46</th>
              <th>48-52</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>110 см</td>
              <td>125 см</td>
            </tr>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>90-105 см</td>
              <td>105-120 см</td>
            </tr>
            <tr>
              <td>Довжина попереду</td>
              <td>82 см</td>
              <td>83 см</td>
            </tr>
            <tr>
              <td>Довжина позаду</td>
              <td>91 см</td>
              <td>95 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>74 см</td>
              <td>75 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'over2',
    imageSrc: require('../Images/products/over2/over2White.jpg'),
    type: 'Over2',
    price: 939,
    todayPrice: 682,
    discount: 30,

    fabricOptions: [
      {
        id: 'superSoft',
        fabric: 'Супер-софт',
        price: 939,
        todayPrice: 682,
      },
      {
        id: 'cotton',
        fabric: 'Полірована бавовна',
        price: 1210,
        todayPrice: 847,
      },
    ],
    colorsImgCotton: [
      {
        id: 'over2White',
        img: require('../Images/products/over2/over2White.jpg'),
        colorName: 'Білий',
      },
    ],
    aboutTitle:
      'Найелегантніша модель нашої лінійки. Можна носити як оверсайз так і більш приталено. Має дві кишені на грудях та розрізи з боків, завдяки яким сорочка вільно сидить в стегнах. А опущена лінія плеча додасть до образу легкості.',
    aboutText: (
      <div>
        <p>- Тканина: cупер-софт або полірована бавовна на вибір; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', ' #ff0000', '#0000ff', '#000000', '#00BFFF'],
    colorsImg: [
      {
        id: 'over2White',
        img: require('../Images/products/over2/over2White.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'over2Skyblue',
        img: require('../Images/products/over2/over2Skyblue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'over2Red2',
        img: require('../Images/products/over2/over2Red2.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'over2Black',
        img: require('../Images/products/over2/over2Black.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'over2Blue2',
        img: require('../Images/products/over2/over2Blue2.jpg'),
        colorName: 'Синій',
      },
      {
        id: 'over2White2',
        img: require('../Images/products/over2/over2White2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'over2Red',
        img: require('../Images/products/over2/over2Red.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'over2White3',
        img: require('../Images/products/over2/over2White3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'over2Blue',
        img: require('../Images/products/over2/over2Blue.jpg'),
        colorName: 'Синій',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56', '58-60'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>48-52</th>
              <th>50-52</th>
              <th>54-56</th>
              <th>58-60</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>108 см</td>
              <td>114 см</td>
              <td>120 см</td>
              <td>128 см</td>
              <td>142 см</td>
            </tr>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>88-102 см</td>
              <td>94-108 см</td>
              <td>102-114 см</td>
              <td>108-122 см</td>
              <td>116-134 см</td>
            </tr>
            <tr>
              <td>Довжина попереду</td>
              <td>66 см</td>
              <td>68 см</td>
              <td>70 см</td>
              <td>72 см</td>
              <td>74 см</td>
            </tr>
            <tr>
              <td>Довжина по спинці</td>
              <td>72 см</td>
              <td>74 см</td>
              <td>76 см</td>
              <td>76 см</td>
              <td>76 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'lastivka',
    imageSrc: require('../Images/products/lastivka/lastivkaWhite.jpg'),
    type: 'Ластівка',
    price: 970,
    todayPrice: 697,
    discount: 30,

    fabricOptions: [
      {
        id: 'superSoft',
        fabric: 'Супер-софт',
        price: 970,
        todayPrice: 697,
      },
      {
        id: 'cotton',
        fabric: 'Полірована бавовна',
        price: 1270,
        todayPrice: 889,
      },
    ],
    colorsImgCotton: [
      {
        id: 'lastivkaWhite',
        img: require('../Images/products/lastivka/lastivkaWhite.jpg'),
        colorName: 'Білий',
      },
    ],
    aboutTitle:
      'Найоригінальніша модель нашої лінійки. Чудово сидить як оверсайз, так і злегка приталено.  Позаду має подовжену спинку, з боків розрізи на рівні стегон, для комфортного та вільного носіння без відчуття стиснення. Має одну кишеню зліва на грудях, приспущену лінію плеча та ґудзики на спинці для регулювання довжини розрізу.',
    aboutText: (
      <div>
        <p>- Тканина:cупер-софт, полірована бавовна; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', ' #ff0000', '#2596be', '#0000ff', '#000000'],
    colorsImg: [
      {
        id: 'lastivkaWhite',
        img: require('../Images/products/lastivka/lastivkaWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaWhiteBlue',
        img: require('../Images/products/lastivka/lastivkaWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'lastivkaBlack',
        img: require('../Images/products/lastivka/lastivkaBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'lastivkaRed',
        img: require('../Images/products/lastivka/lastivkaRed.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'lastivkaBlue',
        img: require('../Images/products/lastivka/lastivkaBlue.jpg'),
        colorName: 'Синій',
      },

      {
        id: 'lastivkaWhite2',
        img: require('../Images/products/lastivka/lastivkaWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaRed2',
        img: require('../Images/products/lastivka/lastivkaRed2.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'lastivkaWhite3',
        img: require('../Images/products/lastivka/lastivkaWhite3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaWhiteBlue2',
        img: require('../Images/products/lastivka/lastivkaWhiteBlue2.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'lastivkaBlack2',
        img: require('../Images/products/lastivka/lastivkaBlack2.jpg'),
        colorName: 'Чорний',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>48-52</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>110 см</td>
              <td>118 см</td>
              <td>126 см</td>
              <td>134 см</td>
            </tr>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>88-108 см</td>
              <td>106-116 см</td>
              <td>114-124 см</td>
              <td>122-130 см</td>
            </tr>
            <tr>
              <td>Довжина попереду</td>
              <td>68 см</td>
              <td>70 см</td>
              <td>72 см</td>
              <td>74 см</td>
            </tr>
            <tr>
              <td>Довжина по спинці</td>
              <td>78 см</td>
              <td>80 см</td>
              <td>82 см</td>
              <td>82 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'baroko',
    imageSrc: require('../Images/products/baroko/barokoWhite.jpg'),
    type: 'Бароко',
    price: 941,
    todayPrice: 659,
    discount: 30,
    aboutTitle:
      'Ця блузка підкорить ваше серденько, прямий крій, спущена лінія плеча котра переходить в рукав реглан з ніжними воланчиками на замість манжету. Також дана модель має  центральну планку котра спадає ніжними лініями вниз і завдяки цьому візуально страдає обʼєм. І маленька родзинка це V-подібний виріз в поєднанні з комірцем сіткою.',
    aboutText: (
      <div>
        <p>- Тканина: супер-софт; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#000000'],
    colorsImg: [
      {
        id: 'barokoWhite',
        img: require('../Images/products/baroko/barokoWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'barokoBlack',
        img: require('../Images/products/baroko/barokoBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'barokoWhite2',
        img: require('../Images/products/baroko/barokoWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'barokoBlack2',
        img: require('../Images/products/baroko/barokoBlack2.jpg'),
        colorName: 'Чорний',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>46-48</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>82-96 см</td>
              <td>97-104 см</td>
              <td>105-109 см</td>
              <td>110-116 см</td>
            </tr>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>108 см</td>
              <td>114 см</td>
              <td>120 см</td>
              <td>124 см</td>
            </tr>

            <tr>
              <td>Довжина по спині</td>
              <td>60 см</td>
              <td>62 см</td>
              <td>64 см</td>
              <td>66 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'romance',
    imageSrc: require('../Images/products/romance/romanceWhite.jpg'),
    type: 'Romance',
    price: 989,
    todayPrice: 692,
    discount: 30,
    aboutTitle:
      'Приємна та м`яка сорочка з декоративними гудзиками попереду. Рукава довгі і мають петельку, завдяки якій можна вкоротити рукав. Злегка подовжена спинка додає невимушеності образу та допоможе прибрати недоліки фігури візуально зменшуючи сідниці та стегна. А завдяки прямому крою сорочка чудово виглядає на різних параметрах та типах фігури.',
    aboutText: (
      <div>
        <p>- Тканина: штапельний софт; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#00ff00', '#2596be'],
    colorsImg: [
      {
        id: 'romanceWhite',
        img: require('../Images/products/romance/romanceWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'romanceWhiteBlue',
        img: require('../Images/products/romance/romanceWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'romanceGreen',
        img: require('../Images/products/romance/romanceGreen.jpg'),
        colorName: 'Зелений',
      },
      {
        id: 'romanceWhite2',
        img: require('../Images/products/romance/romanceWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'romanceWhiteBlue2',
        img: require('../Images/products/romance/romanceWhiteBlue2.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'romanceGreen2',
        img: require('../Images/products/romance/romanceGreen2.jpg'),
        colorName: 'Зелений',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>46-48</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>108 см</td>
              <td>114 см</td>
              <td>124 см</td>
              <td>134 см</td>
            </tr>

            <tr>
              <td>Ваш обхват грудей</td>
              <td>88-103 см</td>
              <td>104-110 см</td>
              <td>111-119 см</td>
              <td>120-130 см</td>
            </tr>
            <tr>
              <td>Обхват стегон виробу</td>
              <td>112 см</td>
              <td>118 см</td>
              <td>128 см</td>
              <td>138 см</td>
            </tr>

            <tr>
              <td>Довжина</td>
              <td>74 см</td>
              <td>76 см</td>
              <td>76 см</td>
              <td>78 см</td>
            </tr>
            <tr>
              <td>Рукав</td>
              <td>53 см</td>
              <td>53 см</td>
              <td>54 см</td>
              <td>55 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'oversize',
    imageSrc: require('../Images/products/oversize/oversizeWhite.jpg'),
    type: 'Oversize',
    price: 842,
    todayPrice: 680,
    discount: 30,
    aboutTitle:
      'Базова м`яка сорочка з однією кишенею. Гарно підходить на офіційні та навчальні заходи, завдяки універсальному вигляду та фасону її також можна носити як сорочку-накидку на топи чи майки. Рукава довгі, манжети на гудзиках. Прямий крій сорочки та універсальний фасон чудово виглядає на різних параметрах та типах фігури, що спрощує підбір розміру не  ризикуючи стильним силуетом.',
    aboutText: (
      <div>
        <p>- Тканина: супер софт; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff', '#000000', '#2596be'],
    colorsImg: [
      {
        id: 'oversizeWhite',
        img: require('../Images/products/oversize/oversizeWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'oversizeBlack',
        img: require('../Images/products/oversize/oversizeBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'oversizeWhite2',
        img: require('../Images/products/oversize/oversizeWhite2.jpg'),
        colorName: 'Білий',
      },
    
    ],
    sizes: ['S', 'M', 'L'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
          <tr>
              <th>Розмір</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
           
            </tr>
          <tr>
              <td>Довжина виробу</td>
              <td>69 см</td>
              <td>72 см</td>
              <td>75 см</td>
                      </tr>
                      <tr>
              <td>Довжина рукава</td>
              <td>58,5 см</td>
              <td>60 см</td>
              <td>61 см</td>
            </tr>
           
          </thead>
          <tbody>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>98 см</td>
              <td>104 см</td>
              <td>114 см</td>
            </tr>

            <tr>
              <td>Ваш обхват грудей</td>
              <td>85-97 см</td>
              <td>97-103 см</td>
              <td>103-113 см</td>
            </tr>
           

          </tbody>
        </table>
      </div>
    ),
  },

  {
    id: 'classic',
    imageSrc: require('../Images/products/classic/classicWhite.jpg'),
    type: 'Classic',
    price: 829,
    todayPrice: 628,
    discount: 30,
    fabricOptions: [
      {
        id: 'superSoft',
        fabric: 'Супер-софт',
        price: 970,
        todayPrice: 628,
      },
      {
        id: 'cotton',
        fabric: 'Полірована бавовна',
        price: 1270,
        todayPrice: 829,
      },
    ],
    colorsImgCotton: [
      {
        id: 'classicWhite',
        img: require('../Images/products/classic/classicWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'classicBlack',
        img: require('../Images/products/classic/classicBlack.jpg'),
        colorName: 'Чорний',
      },
    ],
    aboutTitle:
      'Класична та елегантна якісна сорочка з довгими рукавами. Гудзики приховані за планкою, додаючи зовнішньому вигляду естетичної лаконічності. Сорочка завдяки своєму стриманому вигляду чудово підходить для офіційних та навчальних закладів. Прямий крій сорочки відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури та параметрах.',
    aboutText: (
      <div>
        <p>- Тканина: супер софт або полірована бавовна на вибір; </p>
        <p>- Прямий крій; </p>
        <p>- Made in Ukraine. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">
          Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
        <p><h3>Можливий опт:</h3></p>
        <ul>
          <li>- Вартість від 5 до 10 шт: 460 грн</li>
          <li>- Вартість від 10 до 30  шт: 420 грн</li>
          <li>- Вартість від 30 до 50  шт: 390 грн</li>
        </ul>
      </div>
    ),
    colors: ['#ffffff', '#000000', '#2596be','#0000ff'],
    colorsImg: [
      {
        id: 'classicWhite',
        img: require('../Images/products/classic/classicWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'classicBlack',
        img: require('../Images/products/classic/classicBlack.jpg'),
        colorName: 'Чорний',
      },

      {
        id: 'classicWhiteBlue',
        img: require('../Images/products/classic/classicWhiteBlue.jpg'),
        colorName: 'Блакитний',
      },
      
      {
        id: 'classicDarkBlue',
        img: require('../Images/products/classic/classicDarkBlue.jpg'),
        colorName: 'Темно-синій',
      },
      
      {
        id: 'classicWhite2',
        img: require('../Images/products/classic/classicWhite2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'classicBlack2',
        img: require('../Images/products/classic/classicBlack2.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'classicDarkBlue2',
        img: require('../Images/products/classic/classicDarkBlue2.jpg'),
        colorName: 'Темно-синій',
      },
      {
        id: 'classicWhiteBlue2',
        img: require('../Images/products/classic/classicWhiteBlue2.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'classicBlack3',
        img: require('../Images/products/classic/classicBlack3.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'classicWhitecot',
        img: require('../Images/products/classic/classicWhitecot.jpg'),
        colorName: 'Білий - полірована бавовна',
      }, 
      {
        id: 'classicBlackcotton',
        img: require('../Images/products/classic/classicBlackcotton.jpg'),
        colorName: 'Чорний - полірована бавовна',
      },

    
    ],
    sizes: ['S-M', 'L', 'XL','XXL'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>S-M</th>
              <th>L</th>
              <th>XL</th>
              <th>XXL</th>
              <th>3-4XL</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Довжина виробу</td>
              <td>67,5 см</td>
              <td>68 см</td>
              <td>68,5 см</td>
              <td>69 см</td>
              <td>69 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>59,5 см</td>
              <td>60 см</td>
              <td>60,5 см</td>
              <td>61 см</td>
              <td>61 см</td>
            </tr>

            <tr>
              <td>Обхват грудей виробу</td>
              <td>106 см</td>
              <td>110 см</td>
              <td>112 см</td>
              <td>116 см</td>
              <td>130 см</td>
            </tr>

            <tr>
              <td>Ваш обхват грудей</td>
              <td>86-98 см</td>
              <td>94-104 см</td>
              <td>98-108 см</td>
              <td>102-112 см</td>
              <td>112-124 см</td>
            </tr>
                       
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'charm',
    imageSrc: require('../Images/products/charm/charm1.jpg'),
    type: 'Шарм',
    price: 1440,
    todayPrice: 957,
    discount: 30,
    aboutTitle:
      'Витончена блуза прямого класичного крою з легким розширенням до низу з неперевершено-стильними деталями з мережива та гарно оформленої декоративної брошки.',
    aboutText: (
      <div>
        <p>- Тканина: м'який та ефектний супер-софт котрий себе високо зарекомендував у якості основної тканини для блуз та суконь. </p>
        <p>- Крій з легким роширенням до низу. </p>
        <p>- Декорації: вдало підібране мереживо додає ніжності та витонченості образу й слугуватиме комфортним рішенням прийдешньої теплої весни. Відстібна брошка додає завершенності образу наче вишенька на торті. </p>
        <p>- Made in Ukraine. Задіяні найкращі спеціалісти та фабрики Харкова та Одеси. </p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">- Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до
          адреси!
        </p>
      </div>
    ),
    colors: ['#ffffff'],
    colorsImg: [
      {
        id: 'charm1',
        img: require('../Images/products/charm/charm1.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'charm3',
        img: require('../Images/products/charm/charm2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'charm3',
        img: require('../Images/products/charm/charm3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'charm4',
        img: require('../Images/products/charm/charm4.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>46-48</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>84-94 см</td>
              <td>94-102 см</td>
              <td>102-112 см</td>
              <td>110-118 см</td>
            </tr>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>98 см</td>
              <td>106 см</td>
              <td>116 см</td>
              <td>122 см</td>
            </tr>

            <tr>
              <td>Обхват виробу в стегнах</td>
              <td>102 см</td>
              <td>110 см</td>
              <td>122 см</td>
              <td>130 см</td>
            </tr>
            <tr>
              <td>Довжина</td>
              <td>68 см</td>
              <td>70 см</td>
              <td>70 см</td>
              <td>70 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'fluer',
    imageSrc: require('../Images/products/Fluer/Fluer1.jpg'),
    type: 'Флер',
    price: 1136,
    todayPrice: 795,
    discount: 30,
    aboutTitle:
      'Вишукана легкість у кожному русі!',
    aboutText: (
      <div>
        <p>Елегантна блуза вільного крою з ефектними фестонами, що гармонійно підкреслюють жіночний силует. Повітряні оборки вздовж лінії декольте візуально витягують фігуру, додаючи грації та легкості образу. А хвилясті рукави з каскадними рюшами створюють витончену гру об'ємів, роблячи руки ще більш тендітними. </p>
        <p>- Тканина: м'який та приємний на дотик супер-софт – ідеальний вибір для легких блуз і суконь.</p>
        <p>- Фасон: прямий, вільний крій, що дарує комфорт та підходить для будь-якого типу фігури.</p>
        <p>- Декор: хвилясті фестони вздовж вирізу витягують силует і роблять акцент на лінії шиї, а волани на рукавах додають романтичності та візуальної легкості. </p>
        <p>- Силует: Струмливий крій  в тандемі з V-подібним вирізом та каскадними оборками створює ефект витонченого пісочного годинника. </p>
        <p>- Виготовлено в Україні – над створенням моделі працювали найкращі спеціалісти.</p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">Доставка: Новою поштою та Укрпоштою – до відділення або кур'єром до дверей.
        </p>
      </div>
    ),
    colors: ['#ffffff'],
    colorsImg: [
      {
        id: 'Fluer1',
        img: require('../Images/products/Fluer/Fluer1.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer2',
        img: require('../Images/products/Fluer/Fluer2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer3',
        img: require('../Images/products/Fluer/Fluer3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer4',
        img: require('../Images/products/Fluer/Fluer4.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer5',
        img: require('../Images/products/Fluer/Fluer5.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-46', '48-52', '54-58'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-46</th>
              <th>48-52</th>
              <th>54-58</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>84-96 см</td>
              <td>94-106 см</td>
              <td>104-116 см</td>
            </tr>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>100 см</td>
              <td>110 см</td>
              <td>120 см</td>
            </tr>

            <tr>
              <td>Довжина виробу</td>
              <td>65 см</td>
              <td>68 см</td>
              <td>71 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>54 см</td>
              <td>54,5 см</td>
              <td>55 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'Viktoria',
    imageSrc: require('../Images/products/Viktori/Viktori1.jpg'),
    type: 'Viktori',
    price: 1142,
    todayPrice: 799,
    discount: 30,
    aboutTitle:
      'Елегантна біла блуза з витонченими декоративними складками та лаконічним бантом для стильного акценту',
    aboutText: (
      <div>
        <p>- Комір-стійка з ніжними рюшами додає витонченості, а делікатні зборки на манжетах підкреслюють тендітність рук. </p>
        <p>- Вертикальні защипи візуально витягують силует, роблячи його стрункішим.</p>
        <p>- Завдяки класичному крою блуза ідеально поєднується як з діловими костюмами, так і з casual-гардеробом</p>
        <p>- Чорна стрічка на комірі додає контрасту, що робить образ більш виразним. </p>
        <p>  Цей стильний варіант чудово підійде для офісу, ділових зустрічей або особливих подій, де важливо виглядати бездоганно</p>
        <p>- Виготовлено в Україні – над створенням моделі працювали найкращі спеціалісти.</p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">Доставка: Новою поштою та Укрпоштою – до відділення або кур'єром до дверей.
        </p>
      </div>
    ),
    colors: ['#ffffff'],
    colorsImg: [
      {
        id: 'Fluer1',
        img: require('../Images/products/Viktori/Viktori1.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer2',
        img: require('../Images/products/Viktori/Viktori2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer3',
        img: require('../Images/products/Viktori/Viktori3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer4',
        img: require('../Images/products/Viktori/Viktori4.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Fluer5',
        img: require('../Images/products/Viktori/Viktori5.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-44', '46-48', '50-52', '54-56'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-44</th>
              <th>46-48</th>
              <th>50-52</th>
              <th>54-56</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>84-94 см</td>
              <td>90-98 см</td>
              <td>96-104 см</td>
              <td>105-115 см</td>
            </tr>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>96 см</td>
              <td>102 см</td>
              <td>108 см</td>
              <td>120 см</td>
            </tr>

            <tr>
              <td>Довжина виробу</td>
              <td>64 см</td>
              <td>68 см</td>
              <td>68 см</td>
              <td>69 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>58 см</td>
              <td>58,5 см</td>
              <td>59 см</td>
              <td>59 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'Laura',
    imageSrc: require('../Images/products/laura/laura1.jpg'),
    type: 'Laura',
    price: 1158,
    todayPrice: 810,
    discount: 30,
    aboutTitle:
      'Шовкова блуза із акцентним розрізом та коміром — стильне рішення для сучасного жіночого гардеробу',
    aboutText: (
      <div>
        <p>– Гладка фактура шовку армані м’яко переливається при світлі, створюючи ефект елегантного блиску.   </p>
        <p>– Нестандартний виріз додає образу жіночності та візуально витягує силует.  </p>
        <p>– Подовжений комір із загостреними краями створює візуальний акцент у зоні декольте.  </p>
        <p>– Вільний крій не сковує рухів і дозволяє носити блузу як заправленою, так і навипуск.   </p>
        <p>– Довгі рукави з легко зібраними манжетами додають м’якості формам і завершеності образу.  </p>
        <p>– Глибокі кольори — білий, шоколадний, бордо та чорний — універсальні для різних сезонів і стилів.</p>
        <p>Ця модель чудово підходить для офісу, зустрічей, стильних вечорів або як елемент капсульного гардеробу.</p>
        <p>- Виготовлена в Україні – продумано до дрібниць з урахуванням естетики та комфорту.</p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">Доставка: Новою поштою та Укрпоштою – до відділення або кур’єром до дверей.</p>
      </div>
    ),
    colors: ['#ffffff', '#8f0c2b', '#4d393b','#241a19'],
    colorsImg: [
      {
        id: 'laura1',
        img: require('../Images/products/laura/laura1.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'laura2',
        img: require('../Images/products/laura/laura2.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'laura3',
        img: require('../Images/products/laura/laura4.jpg'),
        colorName: 'Шоколадний',
      },
      {
        id: 'laura4',
        img: require('../Images/products/laura/laura15.jpg'),
        colorName: 'Бургунді',
      },
      {
        id: 'laura5',
        img: require('../Images/products/laura/laura3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'laura6',
        img: require('../Images/products/laura/laura12.jpg'),
        colorName: 'Червоний',
      },
      {
        id: 'laura7',
        img: require('../Images/products/laura/laura5.jpg'),
        colorName: 'Шоколадний',
      },
      {
        id: 'laura8',
        img: require('../Images/products/laura/laura11.jpg'),
        colorName: 'Бургунді',
      },
    ],
    sizes: ['42-46', '48-52'],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-46</th>
              <th>48-52</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>82-96 см</td>
              <td>94-108 см</td>
            </tr>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>102 см</td>
              <td>114 см</td>
            </tr>
            <tr>
              <td>Довжина виробу від плеча</td>
              <td>71 см</td>
              <td>75 см</td>
            </tr>
            <tr>
              <td>Довжина рукава</td>
              <td>65 см</td>
              <td>67 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'Paryzh',
    imageSrc: require('../Images/products/paryzh/Paryzh1.jpg'),
    type: 'Paryzh',
    price: 1205,
    todayPrice: 845,
    discount: 30,
    aboutTitle:
      'Лляна сорочка “Париж” — легкість, що дихає стилем',
    aboutText: (
      <div>
        <p>- Натуральний європейський льон преміум якості — ідеальний для теплої пори, дихає і дарує комфорт у кожному русі. </p>
        <p>- Об’ємні рукави з м’якими зборками та широкими манжетами — трендова деталь, що додає вишуканості навіть найпростішому образу.</p>
        <p>- Гарно тримає форму, підходить як до повсякденного, так і до святкового гардеробу.</p>
        <p>- Ідеальна в парі з брюками, джинсами, шортами чи спідницями — створює відчуття невимушеної елегантності у кожному поєднанні. </p>
        <p>  Кожна сорочка створена з турботою — із якісного льону, який приємний до тіла, гарно носиться і з роками лише розкриває свою м’якість.</p>
        <p>- Виготовлено в Україні — з любов’ю до стилю та свободи.</p>
        <p class="indented">Оплата: Накладний платіж з передплатою 86 грн <i>(входить в суму замовлення, рахується передплатою за примірку, повертається у випадку браку)</i>  <b>або</b> повна передплата.</p>
        <p class="indented">Доставка: Новою поштою чи Укрпоштою — у відділення або кур'єром до дверей.
        </p>
      </div>
    ),
    colors: ['#ffffff'],
    colorsImg: [
      {
        id: 'Paryzh1',
        img: require('../Images/products/paryzh/Paryzh1.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Paryzh2',
        img: require('../Images/products/paryzh/paryzh2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Paryzh3',
        img: require('../Images/products/paryzh/paryzh3.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Paryzh4',
        img: require('../Images/products/paryzh/paryzh4.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Paryzh5',
        img: require('../Images/products/paryzh/paryzh5.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Paryzh6',
        img: require('../Images/products/paryzh/paryzh6.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'Paryzh7',
        img: require('../Images/products/paryzh/paryzh7.jpg'),
        colorName: 'Білий',
      },
    ],
    sizes: ['42-46', '48-52',],
    sizeTable: (
      <div>
        {' '}
        <table className="productSize-table">
          <thead>
            <tr>
              <th>Розмір</th>
              <th>42-46</th>
              <th>48-52</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ваш обхват грудей</td>
              <td>86-104 см</td>
              <td>98-114 см</td>
            </tr>
            <tr>
              <td>Обхват грудей виробу</td>
              <td>110 см</td>
              <td>120 см</td>
            </tr>

            <tr>
              <td>Довжина виробу</td>
              <td>67 см</td>
              <td>70 см</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];
