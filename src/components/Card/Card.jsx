import { useEffect, useState } from 'react';
import {
  BTNDec,
  BTNInc,
  BoxCard,
  BrandNameSt,
  Button,
  Image,
  PriceBox,
  PriceSt,
  ProductNameSt,
  QTYBox,
  Rating,
  ShortDiscriptionSt,
  SymbolCurrency,
  WeightList,
  WeightListItem,
  WidthLink,
  Wrapper,
} from './Card.styled';
import { Link } from 'react-router-dom';
import { HeartIcon, StarIcon } from 'components/Icons';
import { useStateContext } from 'context/StateContext';
import { displaySize } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from 'redux/cartSlice';
import { selectCartStore } from 'redux/selectors';

// import { CardList } from 'components';

// import { HeartIcon } from 'components/Icons';

const LS_KEY = 'cartList';

export const Card = ({ el, onClick }) => {
  const dispatch = useDispatch();
  const cardCountRedux = useSelector(selectCartStore);
  // console.log('cardCountRedux :>> ', cardCountRedux);

  const { cartList, setCartList } = useStateContext();
  const [
    card,
    // setCard
  ] = useState(el);

  const [elType, setElType] = useState(el.items[0]);
  const { count } = elType;

  const [favourite, setFavourite] = useState(el.favourite || false);

  const [cardCount, setCardCount] = useState(null);

  const changeFavourite = () => {
    setFavourite(!favourite);
  };

  // change item size
  const changeElType = productCode => {
    const newElType = card.items.find(el => el.productCode === productCode);
    setElType(newElType);
    // setCardCount(null);
  };

  useEffect(() => {
    const productCount = cardCountRedux[elType.productCode];
    if (productCount) {
      setCardCount(productCount);
    }
  }, [cardCountRedux, elType]);

  const handleClick = e => {
    setCardCount(1);
    const presentProductCode = elType.productCode;

    if (e.currentTarget.name === 'increment') {
      setCardCount(prevState => prevState + 1);
      let countIncrement = cardCount + 1;
      dispatch(setCartItems([presentProductCode, countIncrement]));
    }
    if (e.currentTarget.name === 'decrement') {
      let countDecrement = cardCount - 1;
      setCardCount(prevState => prevState - 1);

      dispatch(setCartItems([presentProductCode, countDecrement]));
    }
    if (e.currentTarget.name === 'buy') {
      dispatch(setCartItems([presentProductCode, 1]));
    }
  };

  const handleChange = e => {
    if (!e.target.validity.valid) {
      return;
    }

    if (e.target.validity.valid) {
      if (e.target.value === '') {
        setCardCount('');
        return;
      }

      setCardCount(Number(e.target.value));
    }
  };

  const onSubmitCardHandler = e => {
    e.preventDefault();
    const presentProductCode = elType.productCode;
    dispatch(setCartItems([presentProductCode, cardCount]));
  };

  return (
    <BoxCard>
      <WeightList>
        {el.items.length > 0 &&
          el.items.map(({ size, productCode, price, sale, count }) => {
            return (
              <WeightListItem key={productCode}>
                <WidthLink
                  className={
                    productCode === elType.productCode
                      ? 'active'
                      : count === 0
                      ? 'unavailable'
                      : undefined
                  }
                  onClick={() => changeElType(productCode)}
                >
                  {displaySize(size)}
                </WidthLink>
              </WeightListItem>
            );
          })}
      </WeightList>

      <Link className="heartIcon" onClick={changeFavourite}>
        {favourite ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28 11.9322C28.0018 12.7484 27.8418 13.5569 27.5292 14.3108C27.2166 15.0648 26.7575 15.7493 26.1787 16.3247L16.6116 26.0332C16.5319 26.1142 16.4368 26.1785 16.332 26.2224C16.2271 26.2663 16.1146 26.2889 16.001 26.2889C15.8873 26.2889 15.7748 26.2663 15.6699 26.2224C15.5651 26.1785 15.47 26.1142 15.3903 26.0332L5.82322 16.3247C4.65684 15.1597 4.00101 13.5791 4 11.9306C3.999 10.2821 4.6529 8.70073 5.81786 7.53434C6.98283 6.36796 8.56342 5.71213 10.2119 5.71112C11.8604 5.71012 13.4418 6.36402 14.6082 7.52899L16.001 8.83067L17.4033 7.5247C18.2738 6.65862 19.3812 6.06982 20.586 5.83266C21.7908 5.59549 23.0388 5.72058 24.1725 6.19214C25.3063 6.66369 26.2749 7.46058 26.9561 8.48218C27.6373 9.50378 28.0005 10.7043 28 11.9322Z"
              fill="#E68314"
            />
          </svg>
        ) : (
          <HeartIcon />
        )}
      </Link>

      <Link
        to={`/catalog/${card._pet._id}/${card._category._id}/${card._variant._id}/${card._id}`}
        // to={`${elType.productCode}`}
      >
        <Image src={card.mainImage} alt={card.productName} />
      </Link>
      <div>
        <div>
          <div>
            <Link to={'/brands'}>
              <BrandNameSt>{card.brand}</BrandNameSt>
            </Link>
            <Link
              to={`/catalog/${card._pet._id}/${card._category._id}/${card._variant._id}/${card._id}`}
            >
              <div>
                <ProductNameSt>{card.productName}</ProductNameSt>
              </div>
              <ShortDiscriptionSt>{card.shortDescription}</ShortDiscriptionSt>
            </Link>
          </div>

          {count > 0 ? (
            <Rating className="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />

              <span>({card.reviews.length})</span>
            </Rating>
          ) : (
            <Rating style={{ visibility: 'hidden' }} className="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />

              <span>({card.reviews.length})</span>
            </Rating>
          )}
        </div>
        <Wrapper>
          {count === 0 ? (
            <span style={{ fontWeight: 600, fontSize: '12px', color: 'grey' }}>
              Товар відсутній
            </span>
          ) : elType.sale ? (
            <PriceBox>
              <PriceSt>
                {elType.sale.toFixed(2)}
                <SymbolCurrency>₴</SymbolCurrency>
              </PriceSt>
              <PriceSt className="line-through-text">
                {elType.price.toFixed(2)}
                <SymbolCurrency>₴</SymbolCurrency>
              </PriceSt>
            </PriceBox>
          ) : (
            <PriceBox>
              <PriceSt>
                {elType.price.toFixed(2)}
                <SymbolCurrency>₴</SymbolCurrency>
              </PriceSt>
            </PriceBox>
          )}

          {count === 0 ? (
            <Button name="buy" disabled={true}>
              Купити
            </Button>
          ) : !cardCount && cardCount !== '' ? (
            <Button name="buy" disabled={false} onClick={handleClick}>
              Купити
            </Button>
          ) : (
            <QTYBox onSubmit={onSubmitCardHandler}>
              <BTNDec name="decrement" onClick={handleClick} type="button">
                <span>-</span>
              </BTNDec>
              <input
                id={card._id}
                type="text"
                minLength={1}
                maxLength={3}
                size={3}
                pattern="[0-9]*"
                onChange={handleChange}
                value={cardCount}
              />
              <BTNInc name="increment" onClick={handleClick} type="button">
                <span>+</span>
              </BTNInc>
              <button type="submit" style={{ display: 'none' }}></button>
            </QTYBox>
          )}
          {/* {!cardCount || cardCount !== '' ? (
            <Button name="buy" disabled={false} onClick={handleClick}>
              Купити
            </Button>
          ) : (
            <QTYBox onSubmit={onSubmitCardHandler}>
              <BTNDec name="decrement" onClick={handleClick} type="button">
                <span>-</span>
              </BTNDec>
              <input
                id={card._id}
                type="text"
                minLength={1}
                maxLength={3}
                size={3}
                pattern="[0-9]*"
                onChange={handleChange}
                value={cardCount}
              />
              <BTNInc name="increment" onClick={handleClick} type="button">
                <span>+</span>
              </BTNInc>
              <button type="submit" style={{ display: 'none' }}></button>
            </QTYBox>
          )} */}
        </Wrapper>
      </div>
    </BoxCard>
  );
};
