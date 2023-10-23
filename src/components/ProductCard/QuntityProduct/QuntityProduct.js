import React, { useEffect, useState } from 'react';
import {
  QuntityContainer,
  QuintityInputWrapper,
  QuintityInput,
  BtnDecrement,
  BtnIncrement,
  CountContainer,
  SubmitButton,
  ChangeQuntityLabel,
  PriceBox,
  PriceSt,
  SymbolCurrency,
  TextOutOfStock,
} from './QuntityProduct.styled';
import { setCartItems } from 'redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors';

const QuntityProduct = ({ inStock, prodType }) => {

  const [quintity, setQuintity] = useState(1);
  const [productPrice, setProductPrice] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const cardCountRedux = useSelector(selectCartStore);
  const [inCart] = useState(cardCountRedux.hasOwnProperty(prodType.productCode));
  console.log("inCart:", inCart);
  
  console.log("cardCountRedux:", cardCountRedux.hasOwnProperty(prodType.productCode))
  const dispatch = useDispatch();

  

  useEffect(() => {
    setProductPrice(prodType.sale || prodType.price);
    setQuintity(1);
    setIsFocused(false)
  }, [prodType]);

  const increment = () => {
    setQuintity(prev => prev = parseInt(prev) + 1);
    if (prodType.sale) {
      setProductPrice(prevPrice => (prevPrice += prodType.sale));
    } else {
      setProductPrice(prevPrice => (prevPrice += prodType.price));
    }
  };

  const decrement = () => {
    setQuintity(prev => prev = parseInt(prev) - 1);
    if (prodType.sale) {
      setProductPrice(prevPrice => (prevPrice -= prodType.sale));
    } else {
      setProductPrice(prevPrice => (prevPrice -= prodType.price));
    }
  };

  const hendleInputChange = (e) => {
    const newQuintity = isNaN(e.currentTarget.value) ? 1 : e.currentTarget.value;

    setQuintity(newQuintity);
    if (prodType.sale) {
      setProductPrice(prodType.sale * newQuintity);
    } else {
      setProductPrice(prodType.price * newQuintity);
    }
    
  };

  const handleBlur = () => {
    if( Number(quintity) === 0 || quintity === ''){
        alert('Enter the required quantity')
        setQuintity(1)
        setProductPrice(prodType.sale || prodType.price)
        setIsFocused(true)
      }
  };

  const handleKeyPres = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      setIsFocused(true);
    }
  };

  const handleClick = () => {
    const presentProductCode = prodType.productCode;
    dispatch(setCartItems([presentProductCode, Number(quintity)]));
  };

  return (
    <form>
      {inStock && (
        <QuntityContainer>
          <ChangeQuntityLabel>Змінити кількість</ChangeQuntityLabel>
          <QuintityInputWrapper>
            <QuintityInput
              value={quintity}
              onChange={hendleInputChange}
              onBlur={handleBlur}
              onFocus={()=>setIsFocused(true)}
              style={{borderColor: isFocused ? '#e68314' : '#cac299'}}
              type="text"
              inputMode='numeric'
              id="calc"
              onKeyDown={handleKeyPres}
            />

            <BtnDecrement
              onClick={decrement}
              type="button"
              aria-label="decrement"
              disabled={quintity < 2}
            >
              -
            </BtnDecrement>

            <BtnIncrement
              onClick={increment}
              type="button"
              aria-label="increment"
            >
              +
            </BtnIncrement>

          </QuintityInputWrapper>
        </QuntityContainer>
      )}
      <CountContainer>
        {/* <CountSum inStock={inStock}>
          {inStock ? prodType.price.toFixed(2) : 'Товар відсутній'}
        </CountSum> */}

        {!inStock ? (
          <TextOutOfStock>Товар відсутній</TextOutOfStock>
        ) : prodType.sale ? (
          <PriceBox>
            <PriceSt>
              {productPrice.toFixed(2)}

              <SymbolCurrency>₴</SymbolCurrency>
            </PriceSt>
            <PriceSt className="line-through-text">
              {prodType.price.toFixed(2)}

              <SymbolCurrency
                style={{ fontSize: '18px', lineHeight: 'normal' }}
              >
                ₴
              </SymbolCurrency>
            </PriceSt>
          </PriceBox>
        ) : (
          <PriceBox>
            <PriceSt>
              {productPrice.toFixed(2)}

              <SymbolCurrency>₴</SymbolCurrency>
            </PriceSt>
          </PriceBox>
        )}

        <SubmitButton disabled={inStock ? false : true} type="button" onClick={handleClick}>
          Купити
        </SubmitButton>
      </CountContainer>
    </form>
  );
};

export default QuntityProduct;
