import { useEffect, useState } from 'react';
import {
  BTNDec,
  BTNInc,
  BoxCard,
  BrandNameSt,
  Button,
  FixedBlock,
  Image,
  ImageBox,
  NotAvailableText,
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
import { displaySize } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCartItem,
  removeCartItem,
  updateCartItem,
} from 'redux/slice/cartSlice';
import {
  selectCartStore,
  selectIsPriceRangeSet,
  selectSortingTypeStore,
} from 'redux/selectors/selectors';
import { Notify } from 'notiflix';

// import { CardList } from 'components';

// import { HeartIcon } from 'components/Icons';

export const Card = ({ el, onClick }) => {
  const dispatch = useDispatch();
  const cardCountRedux = useSelector(selectCartStore);

  const [elType, setElType] = useState(el.items[0]);
  const { productCode } = elType;
  const [favourite, setFavourite] = useState(el.favourite || false);
  const [cardCount, setCardCount] = useState(null);
  const isPriceRangeSet = useSelector(selectIsPriceRangeSet); // redux state of price range is setted
  const sortingType = useSelector(selectSortingTypeStore); // extract sorting type from the Redux store

  const changeFavourite = () => {
    setFavourite(!favourite);
  };

  const changeElType = productCode => {
    const newElType = el.items.find(el => el.productCode === productCode);
    setElType(newElType);
    setCardCount(null);
  };

  useEffect(() => {
    const productCount = cardCountRedux?.find(
      item => item.productCode === productCode,
    );
    if (productCount) {
      setCardCount(productCount.cardCount);
    }
  }, [cardCountRedux, productCode]);

  useEffect(() => {
    if (isPriceRangeSet) {
      setElType(el.items[0]);
    }
  }, [el.items, isPriceRangeSet]); // if price range is setted, rerender component

  useEffect(() => {
    setElType(el.items[0]);
  }, [el.items, sortingType]); // if sorting type is changed, rerender component

  const handleIncrement = () => {
    if (cardCount === null) {
      setCardCount(1);
      dispatch(
        addCartItem({
          brand: el.brand,
          mainImage: el.mainImage,
          productName: el.productName,
          shortDescription: el.shortDescription,
          count: elType.count,
          productCode: productCode,
          price: elType.price,
          sale: elType.sale,
          size: elType.size,
          cardCount: 1,
          pet: el._pet,
          variant: el._variant,
          category: el._category,
          id: el._id,
        }),
      );
    } else if (cardCount < elType.count) {
      setCardCount(cardCount + 1);
      dispatch(updateCartItem({ productCode, newCount: cardCount + 1 }));
    } else {
      Notify.info('На жаль, на складі відсутня необхідна кількість товару.');

      setCardCount(elType.count);
      dispatch(updateCartItem({ productCode, newCount: elType.count }));
    }
  };

  const handleDecrement = () => {
    if (cardCount > 1) {
      setCardCount(cardCount - 1);
      dispatch(updateCartItem({ productCode, newCount: cardCount - 1 }));
    } else {
      setCardCount(null);
      dispatch(removeCartItem(productCode));
    }
  };

  const handleChange = e => {
    if (!e.target.validity.valid) {
      return;
    }

    if (e.target.value === '') {
      setCardCount('');
    }

    const newCount = Number(e.target.value);

    if (newCount > elType.count) {
      setCardCount(elType.count);
      Notify.info('На жаль, на складі відсутня необхідна кількість товару.');
      return dispatch(updateCartItem({ productCode, newCount: elType.count }));
    }

    if (newCount < 1) {
      return;
    }

    setCardCount(newCount);
    dispatch(updateCartItem({ productCode, newCount }));
  };

  const handleBlur = () => {
    if (cardCount === '') {
      Notify.warning('Мінімальна кількість для замовлення - 1 шт.');
      setCardCount(1);
      dispatch(updateCartItem({ productCode, newCount: 1 }));
    }
  };

  const onSubmitCardHandler = e => {
    e.preventDefault();
    if (cardCount === null) {
      setCardCount(1);
      dispatch(
        addCartItem({
          brand: el.brand,
          mainImage: el.mainImage,
          productName: el.productName,
          shortDescription: el.shortDescription,
          count: elType.count,
          productCode: productCode,
          price: elType.price,
          sale: elType.sale,
          size: elType.size,
          cardCount: 1,
          pet: el._pet,
          variant: el._variant,
          category: el._category,
          id: el._id,
        }),
      );
    } else {
      dispatch(updateCartItem({ productCode, newCount: cardCount }));
    }
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
                    productCode === elType.productCode && count === 0
                      ? 'active unavailable'
                      : productCode === elType.productCode
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
        to={`/catalog/${el._pet._id}/${el._category._id}/${el._variant._id}/${el._id}`}
        // to={`${elType.productCode}`}
        onClick={() => onClick(el)}
      >
        {elType.count === 0 && (
          <NotAvailableText>Товар відсутній</NotAvailableText>
        )}
        <ImageBox count={elType.count}>
          <Image src={el.mainImage} alt={el.productName} />
        </ImageBox>
      </Link>

      <div>
        <div>
          <div>
            <BrandNameSt to={'/brands'}>{el.brand}</BrandNameSt>
            <Link
              to={`/catalog/${el._pet._id}/${el._category._id}/${el._variant._id}/${el._id}`}
              onClick={() => onClick(el)}
            >
              <FixedBlock style={{ height: '48px' }}>
                <ProductNameSt>{el.productName}</ProductNameSt>
              </FixedBlock>
              <FixedBlock style={{ height: '40px' }}>
                <ShortDiscriptionSt>{el.shortDescription}</ShortDiscriptionSt>
              </FixedBlock>
            </Link>
          </div>

          {elType.count > 0 ? (
            <Rating className="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />

              <span>
                <span>({el.reviews.length})</span>
              </span>
            </Rating>
          ) : (
            <Rating style={{}} className="rating">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />

              <span>({el.reviews.length})</span>
            </Rating>
          )}
        </div>
        <Wrapper>
          {elType.sale ? (
            <PriceBox>
              <PriceSt count={elType.count}>
                {elType.sale.toFixed(2)}
                <SymbolCurrency>₴</SymbolCurrency>
              </PriceSt>
              <PriceSt className="line-through-text">
                <span className="line-through-text">
                  {elType.price.toFixed(2)}
                </span>
                <SymbolCurrency>₴</SymbolCurrency>
              </PriceSt>
            </PriceBox>
          ) : (
            <PriceBox>
              <PriceSt count={elType.count}>
                {elType.price.toFixed(2)}
                <SymbolCurrency>₴</SymbolCurrency>
              </PriceSt>
            </PriceBox>
          )}

          {elType.count === 0 ? (
            <Button name="buy" disabled={true}>
              Купити
            </Button>
          ) : !cardCount && cardCount !== '' ? (
            <Button name="buy" disabled={false} onClick={onSubmitCardHandler}>
              Купити
            </Button>
          ) : (
            <QTYBox onSubmit={onSubmitCardHandler}>
              <BTNDec name="decrement" onClick={handleDecrement} type="button">
                <span>-</span>
              </BTNDec>
              <input
                id={el._id}
                type="text"
                minLength={1}
                maxLength={3}
                size={3}
                pattern="[0-9]*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={cardCount}
              />
              <BTNInc name="increment" onClick={handleIncrement} type="button">
                <span>+</span>
              </BTNInc>
              <button type="submit" style={{ display: 'none' }}></button>
            </QTYBox>
          )}
        </Wrapper>
      </div>
    </BoxCard>
  );
};
