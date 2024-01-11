import React, { useEffect, useState } from 'react';
import {
  QuntityContainer,
  QuintityInputWrapper,
  QuintityInput,
  BtnDecrement,
  BtnIncrement,
  CountContainer,
  SubmitButton,
  InCartLink,
  ChangeQuntityLabel,
  PriceBox,
  OldPrice,
  PriceSt,
  SymbolCurrency,
} from './QuntityProduct.styled';
import { addCartItem, updateCartItem } from 'redux/slice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartStore } from 'redux/selectors/selectors';
import { Notify } from 'notiflix';

const QuntityProduct = ({ inStock, prodType, prodDescription }) => {
  const [quintity, setQuintity] = useState(1);
  const [isFocused, setIsFocused] = useState(false);
  const [inCart, setInCart] = useState(false);
  const cardCountRedux = useSelector(selectCartStore);

  const dispatch = useDispatch();
  const productCode = prodType.productCode;
  const count = prodType.count;

  useEffect(() => {
    const productCount = cardCountRedux?.find(
      item => item.productCode === productCode,
    );
    if (productCount) {
      setQuintity(productCount.cardCount);
      setInCart(true);
    } else {
      setQuintity(1);
      setInCart(false);
    }

    setIsFocused(false);
  }, [productCode, cardCountRedux]);

  const increment = () => {
    if (quintity < prodType.count) {
      setQuintity(Number(quintity) + 1);
    } else {
      Notify.info('На жаль, на складі відсутня необхідна кількість товару.');
      setQuintity(prodType.count);
    }

    if (inCart && quintity < prodType.count) {
      dispatch(updateCartItem({ productCode, newCount: quintity + 1 }));
    }
  };

  const decrement = () => {
    if (quintity > 1) {
      setQuintity(Number(quintity) - 1);
    }

    if (inCart) {
      dispatch(updateCartItem({ productCode, newCount: quintity - 1 }));
    }
  };

  const hendleInputChange = e => {
    if (!e.target.validity.valid) {
      return;
    }

    if (e.target.value === '') {
      setQuintity('');
      return;
    }

    const newCount = Number(e.currentTarget.value);

    if (newCount < 1) {
      return;
    }

    if (newCount > prodType.count) {
      Notify.info('На жаль, на складі відсутня необхідна кількість товару.');
      setQuintity(prodType.count);
      return dispatch(
        updateCartItem({ productCode, newCount: prodType.count }),
      );
    }
    setQuintity(newCount);
    dispatch(updateCartItem({ productCode, newCount }));
  };

  const handleBlur = () => {
    if (quintity === '') {
      Notify.warning('Мінімальна кількість для замовлення - 1 шт.');
      setQuintity(1);
      dispatch(updateCartItem({ productCode, newCount: 1 }));
      setIsFocused(false);
      // return;
    }
    // setIsFocused(false);
    // dispatch(updateCartItem({ productCode, newCount: quintity }));
  };

  const handleKeyPres = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsFocused(false);
      dispatch(updateCartItem({ productCode, newCount: quintity }));
    }
  };

  const clickToBuy = () => {
    if (quintity > 0) {
      return handleClickBuy();
    } else return Notify.warning('Мінімальна кількість для замовлення - 1 шт.');
  };

  const handleClickBuy = () => {
    dispatch(
      addCartItem({
        brand: prodDescription.brand,
        mainImage: prodDescription.mainImage,
        productName: prodDescription.productName,
        shortDescription: prodDescription.shortDescription,
        count: prodType.count,
        productCode: prodType.productCode,
        price: prodType.price,
        sale: prodType.sale,
        size: prodType.size,
        cardCount: quintity,
        pet: prodDescription._pet,
        variant: prodDescription._variant,
        category: prodDescription._category,
        id: prodDescription._id,
      }),
    );
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
              onFocus={() => setIsFocused(true)}
              style={{ borderColor: isFocused ? '#e68314' : '#cac299' }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
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
              disabled={quintity >= count}
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

        {prodType.sale ? (
          <PriceBox>
            <PriceSt count={count}>
              {prodType.sale.toFixed(2)}

              <SymbolCurrency>₴</SymbolCurrency>
            </PriceSt>
            <PriceSt className="line-through-text">
              <OldPrice>{prodType.price.toFixed(2)}</OldPrice>

              <SymbolCurrency
                style={{ fontSize: '18px', lineHeight: 'normal' }}
              >
                ₴
              </SymbolCurrency>
            </PriceSt>
          </PriceBox>
        ) : (
          <PriceBox>
            <PriceSt count={count}>
              {prodType.price.toFixed(2)}
              <SymbolCurrency>₴</SymbolCurrency>
            </PriceSt>
          </PriceBox>
        )}

        {inCart ? (
          <InCartLink to="/cart">У кошику</InCartLink>
        ) : (
          <SubmitButton
            disabled={inStock ? false : true}
            type="button"
            // onClick={handleClickBuy}
            onClick={clickToBuy}
          >
            Купити
          </SubmitButton>
        )}
      </CountContainer>
    </form>
  );
};

export default QuntityProduct;
