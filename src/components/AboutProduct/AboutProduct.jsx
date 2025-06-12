import './AboutProduct.css'

export const AboutProduct = () => {
  return (
    <section className='aboutProduct'>
      <ul className='aboutProduct-list'>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct1.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Лекала</h4>
          <p className='aboutProduct-listText'>Детально продумана конструкція виробів дає можливість зручно підібрати розмір на будь-які параметри не втрачаючи стильний вигляд.</p>
        </li>
        <li className='aboutProduct-item'>
          <img className='about-img' src={require('../../Images/aboutProduct2.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Тканина</h4>
          <p className='aboutProduct-listText'>Натуральна бавовна та практичний суперсофт — обидва типи тканин дихаючі, приємні до тіла та еластичні. А завдяки мінімальному додаванню поліестеру сорочка більш стійка до зминання.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct3.jpg')} alt="Жилетки на вішаку" />
          <h4 className='aboutProduct-listTitle'>Комірці</h4>
          <p className='aboutProduct-listText'>Добре укріплені та проглажені, при цьому не втрачають м'якості і комфорту. Також їх можна перегладити і змінити форму.</p>
        </li>
        <li className='aboutProduct-item '>
          <img className='about-img' src={require('../../Images/aboutProduct4.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Вирізи</h4>
          <p className='aboutProduct-listText'>Спроектовані так щоб виконувати не тільки естетичну функцію, а і надавати свободу для стегон та більшої провітрюваності.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct5.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Манжети</h4>
          <p className='aboutProduct-listText'>Як і комірці укріплені флізеліном, проглажені, тримають форму, гармонійно виглядають на кисті руки, підкреслюючи їх витонченість.</p>
        </li>
       
      </ul>
    </section>
  );
};
