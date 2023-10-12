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

// import { CardList } from 'components';

// import { HeartIcon } from 'components/Icons';

const LS_KEY = 'cartList';

export const Card = ({ el, onClick }) => {
  const { cartList, setCartList } = useStateContext();
  const [
    card,
    // setCard
  ] = useState(el);
  // console.log('card:', card);

  const [elType, setElType] = useState(el.items[0]);
  const { size, productCode, price, sale, count } = elType;
  console.log('count:', count);
  const [favourite, setFavourite] = useState(el.favourite || false);

  const [cardCount, setCardCount] = useState(null);

  const changeFavourite = () => {
    setFavourite(!favourite);
  };

  const changeElType = productCode => {
    const newElType = card.items.find(el => el.productCode === productCode);
    setElType(newElType);
    setCardCount(null);
  };

  useEffect(() => {
    const items = getCartLocalStorageItems();

    if (items) {
      setCartList(items);
    }
  }, [card._id, setCartList]);

  useEffect(() => {
    // card and card.id needs in dependencies section to initialize useffect when card and card.id have changes
    setCartLocalStorageItems(cartList);
  }, [card._id, cartList, cardCount]);

  useEffect(() => {
    const productCode = elType.productCode;

    const getCountProduct = data => {
      const cartLocalStorageItems = getCartLocalStorageItems();

      const indexProductLocalStorage = cartLocalStorageItems.findIndex(
        item => item._id === card._id,
      );
      if (indexProductLocalStorage === -1) {
        return;
      }

      const productCodetoUpdate = data;
      const indexProductToUpd = cartLocalStorageItems[
        indexProductLocalStorage
      ].items.findIndex(item => item.productCode === productCodetoUpdate);
      const cardItems = cartLocalStorageItems[indexProductLocalStorage].items;
      const countOfProduct = cardItems[indexProductToUpd];
      return countOfProduct.count;
    };

    const countProductCode = getCountProduct(productCode);
    setCardCount(countProductCode);
  }, [card._id, elType.productCode]);

  const getCartLocalStorageItems = () => {
    return JSON.parse(localStorage.getItem(LS_KEY));
  };

  const setCartLocalStorageItems = data => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(data));
  };

  const getPresentProductCode = () => {
    return cartList
      .flatMap(cart => cart.items)
      .map(item => item.productCode)
      .includes(elType.productCode);
  };

  const setCountToProduct = (countLSItems, data) => {
    const productCodetoUpdate = elType.productCode;
    const indexProductLocalStorageToUpdate = data.findIndex(
      item => item._id === card._id,
    );
    const indexProductToUpd = data[
      indexProductLocalStorageToUpdate
    ].items.findIndex(item => item.productCode === productCodetoUpdate);

    const cardItems = data[indexProductLocalStorageToUpdate].items;

    cardItems[indexProductToUpd] = {
      ...cardItems[indexProductToUpd],
      cardCount: countLSItems,
    };

    return cardItems;
  };

  const changeCountInLocalStorageDecrementIncrementAndSet = (
    countLSItems,
    data,
  ) => {
    const cardItems = setCountToProduct(countLSItems, data);
    setCartList(prev => {
      return prev.map(item => {
        if (item._id === card._id) {
          return { ...item, items: cardItems };
        }

        return item;
      });
    });
  };

  const changeCountBuyLocalStorageTrueCode = data => {
    const countLSItems = 1;
    const indexCard = data.findIndex(item => item._id === card._id);
    const cardItems = setCountToProduct(countLSItems, data);

    if (indexCard) {
      data[indexCard] = {
        ...data[indexCard],
        items: cardItems,
      };
    }

    setCartLocalStorageItems(data);

    setCartList(prevState => {
      return [...(getCartLocalStorageItems() || [])];
    });
    setCardCount(1);
  };

  const changeCountBuyLocalStorageFalseCode = data => {
    const productCodetoUpdate = elType.productCode;
    const indexProductToUpd = card.items.findIndex(
      item => item.productCode === productCodetoUpdate,
    );

    const cardItems = card.items;
    cardItems[indexProductToUpd] = {
      ...cardItems[indexProductToUpd],
      cardCount: 1,
    };

    const indexCard = data.findIndex(item => item._id === card._id);

    if (indexCard !== -1) {
      data[indexCard] = {
        ...data[indexCard],
        items: cardItems,
      };
    }

    const cartArray = [...data, { ...card }];

    setCartLocalStorageItems(cartArray);

    setCartList(prevState => {
      return [...(getCartLocalStorageItems() || [])];
    });

    setCardCount(1);
    return;
  };

  const handleClick = e => {
    const presentProductCode = getPresentProductCode();

    if (e.currentTarget.name === 'increment') {
      setCardCount(prevState => prevState + 1);
      let countIncrement = cardCount + 1;

      if (presentProductCode) {
        const cartLocalStorageItems = getCartLocalStorageItems();
        changeCountInLocalStorageDecrementIncrementAndSet(
          countIncrement,
          cartLocalStorageItems,
        );
      }
    }
    if (e.currentTarget.name === 'decrement') {
      let countDecrement = cardCount - 1;
      setCardCount(prevState => prevState - 1);
      if (presentProductCode) {
        const cartLocalStorageItems = getCartLocalStorageItems();

        changeCountInLocalStorageDecrementIncrementAndSet(
          countDecrement,
          cartLocalStorageItems,
        );
      }
    }
    if (e.currentTarget.name === 'buy') {
      if (presentProductCode) {
        const cartLocalStorageItems = getCartLocalStorageItems();
        changeCountBuyLocalStorageTrueCode(cartLocalStorageItems);
      }

      if (!presentProductCode) {
        const cartLocalStorageItems = getCartLocalStorageItems();
        changeCountBuyLocalStorageFalseCode(cartLocalStorageItems);
      }
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
    const presentProductCode = getPresentProductCode();

    if (presentProductCode) {
      const cartLocalStorageItems = getCartLocalStorageItems();

      changeCountInLocalStorageDecrementIncrementAndSet(
        cardCount,
        cartLocalStorageItems,
      );
    }
  };

  return (
    <BoxCard>
      <WeightList>
        {el.items.length > 0 &&
          el.items.map(({ size, productCode, price, sale, count }) => {
            // console.log('el.types', el.types[0]);
            return (
              <WeightListItem key={productCode}>
                <WidthLink
                  className={
                    productCode === elType.productCode ? 'active' : undefined
                  }
                  // onClick={() => changeCard(id)}
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

          <Rating className="rating">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />

            <span>({card.reviews.length})</span>
          </Rating>
        </div>
        <Wrapper>
          {elType.sale ? (
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

          {count !== 0 ? (
            <Button name="buy" disabled={false} onClick={handleClick}>
              Купити
            </Button>
          ) : (
            <Button name="buy" disabled={true} onClick={handleClick}>
              Купити
            </Button>
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
