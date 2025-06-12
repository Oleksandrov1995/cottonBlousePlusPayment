import { productsTypeData } from 'data/productsTypeData';
import './ChooseType.css';
import { Link} from 'react-router-dom';
export const ChooseType = () => {

  return (
    <section id="chooseColor" className="product">
      <h2>Обери свою сорочку</h2>
      <ul className="product-list">
        {productsTypeData.map(product => (
          <li className="product-item" key={product.id}>
           <Link to={`/product/${product.id}`} >
            <img className="product-img" src={product.imageSrc} alt="Костюм" />
            </Link>
            <img
              className="discount-img"
              src={require('Images/discount.png')}
              alt=""
            />
            <p className="discount-text">-{product.discount}%</p>
            <p className="todayPrice-text">Ціна сьогодні:</p>
            <p className="productPrice-text">{product.price} грн</p>
            <p className="productTodayPrice-text">{product.todayPrice} грн</p>
            <p className="product-type">{product.type}</p>
            <p className="product-colorText">Кольори в наявності:</p>
           
                <ul className="color-dots">{product.colors.map(color => (
                <li key={color} className="color-dot" style={{ backgroundColor: color }}> </li>
              ))}</ul>
            
           
            <Link className="product-link" to={`/product/${product.id}`} >
            Детальніше
            </Link>
           
          </li>
        ))}
      </ul>
    </section>
  );
};
