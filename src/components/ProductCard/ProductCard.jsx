import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ProductCard.css';
import * as React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { productsTypeData } from 'data/productsTypeData';
import CountTimeDown from '../CountTimeDown/CountTimeDown'

export const ProductCard = ({ modalOpen }) => {
 
  const { id } = useParams();
  useEffect(() => {
   
    window.scrollTo(0, 0);
  }, []);
  const selectedProduct = productsTypeData.find(product => id === product.id);

  const [productFabric, setProductFabric] = useState('');
  const [productColor, setProductColor] = useState({});
  const [productSize, setProductSize] = useState('');

  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');

    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const handleColorChange = event => {
    const selectedColorId = event.target.value;
    const selectedColor = selectedProduct.colorsImg.find(
      color => color.id === selectedColorId
    );

    setProductColor(selectedColor);
  };

  const handleFabricChange = event => {
    const selectedFabricId = event.target.value;
    const selectedFabric = selectedProduct?.fabricOptions?.find(
      fabric => fabric.id === selectedFabricId
    );
    setProductFabric(selectedFabric || '');
  };

  let todayPrice = productFabric ? productFabric.todayPrice : selectedProduct.todayPrice;
  let price = productFabric ? productFabric.price : selectedProduct.price;
console.log(price)
  const handleAddPRoduct = () => {
    const productToAdd = {
      id: `${selectedProduct.id}-${productColor.id}-${productSize}-${productFabric.id}`,
      type: selectedProduct.type,
      price: todayPrice,
      color: productColor.colorName,
      productFabric:productFabric.fabric,
      size: productSize,
      quantity: 1,
    };

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const isProductAdded = storedProducts.find(
      product => productToAdd.id === product.id
    );
    if (isProductAdded) {
      return modalOpen();
    }
    const updatedProducts = [...storedProducts, productToAdd];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
 
    modalOpen();
  };

 

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
   
      
      <div className="productCard">
        <Link className="backLink" to={`/`}>
        <ArrowBackIcon fontSize="large" />
      </Link>
        <h3 className="productType">Сорочка "{selectedProduct.type}"</h3>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          
          pagination={{
            clickable: true,
          }}
         navigation={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          className="productCardSwiper"
        >
          {selectedProduct &&
            selectedProduct.colorsImg.map(slide => (
              <SwiperSlide key={slide.id}>
                {' '}
                <img
                  className="reviews-img"
                  src={slide.img}
                  alt="Колір костюму"
                />
                <p className="productCardSwiperColor">{slide.colorName}</p>
              </SwiperSlide>
            ))}
        </Swiper>
        

    




        <p className="priceText">
          Ціна сьогодні:<span className="price">{price} грн</span><span className="todayPrice">{todayPrice} грн</span>
        </p>
        <div className="productOptions">


        {selectedProduct.fabricOptions && (
              <div className="productCardContainer">
                <label htmlFor="Fabric">Оберіть тип тканини:</label>
                <select
                  className="optionSelect"
                  onChange={handleFabricChange}
                  id="Fabric"
                  value={productFabric ? productFabric.id : '0'}
                >
                  <option value="0">- тканина -</option>
                  {selectedProduct.fabricOptions.map(fabric => (
                    <option key={fabric.id} value={fabric.id}>
                      {fabric.fabric}
                    </option>
                  ))}
                </select>
              </div>
            )}

       {selectedProduct && productFabric.id === 'cotton'&& (
       <div className='productCardContainer'>
       <label htmlFor="Color">Оберіть колір:</label>
       <select
         className="optionSelect"
         onChange={handleColorChange}
         id="Color"
         value={selectedProduct.colorsImgCotton.colorName}
       >
         <option value="0">- колір -</option>
         {selectedProduct.colorsImgCotton.reduce((uniqueColors, color) => {
           if (!uniqueColors.find(c => c.colorName === color.colorName)) {
             uniqueColors.push(color);
           }
           return uniqueColors;
         }, []).map(color => (
           <option key={color.id} value={color.id}>
             {color.colorName}
           </option>
         ))}
       </select>
     </div>
       )} 


        {selectedProduct && productFabric.id !== 'cotton'&& (
  <div className='productCardContainer'>
    <label htmlFor="Color">Оберіть колір:</label>
    <select
      className="optionSelect"
      onChange={handleColorChange}
      id="Color"
      value={selectedProduct.colorsImg.colorName}
    >
      <option value="0">- колір -</option>
      {selectedProduct.colorsImg.reduce((uniqueColors, color) => {
        if (!uniqueColors.find(c => c.colorName === color.colorName)) {
          uniqueColors.push(color);
        }
        return uniqueColors;
      }, []).map(color => (
        <option key={color.id} value={color.id}>
          {color.colorName}
        </option>
      ))}
    </select>
  </div>
)}



          {selectedProduct && (
            <div>
              <label htmlFor="Size">Оберіть розмір:</label>
              <select
                className="optionSelect"
                onChange={event => setProductSize(event.target.value)}
                id="Size"
                value={selectedProduct.size}
              >
                <option value="0">- розмір -</option>
                {selectedProduct.sizes.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
       
        <button className="productCardButton" onClick={handleAddPRoduct}>
          Оформити замовлення
        </button>

        <p className="aboutTitle">
          {selectedProduct && selectedProduct.aboutTitle}
        </p>
        <div className="aboutText">
          {selectedProduct && selectedProduct.aboutText}
        </div>
        <div className="sizesTable">
        <p className="sizeTitle">Заміри виробу</p>
        <div>{selectedProduct?.sizeTable}</div>
        </div>
        <div className="proposal-discount">
        <p className="proposal-discountPercent">-30%</p>
        <span className="proposal-discount-text">
        На топові універсально-базові
сорочки для будь-яких подій та заходів!
        </span>
      </div>
      <h3 className="proposal-text">Пропозиція діє ще:</h3>
      <CountTimeDown />
      <button className="productCardButton" onClick={handleAddPRoduct}>
          Оформити замовлення
        </button>
      <p className="proposal-text">
        Залишилося <span style={{ background: '#ff671e' }}>11</span> штук по
        акції. Встигніть замовити свій розмір!
      </p>
       
      </div>
    
  );
};
