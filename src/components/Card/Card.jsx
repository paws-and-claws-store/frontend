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
import { HeartIcon } from 'components/Icons';
import { useStateContext } from 'context/StateContext';
import { displaySize } from 'helpers';
import { CardList } from 'components';

// import { HeartIcon } from 'components/Icons';

const LS_KEY = 'cartList';

export const Card = ({ el, onClick }) => {
  const { cartList, setCartList } = useStateContext();
  const [
    card,
    // setCard
  ] = useState(el);

  const [elType, setElType] = useState(el.items[0]);

  const [favourite, setFavourite] = useState(el.favourite || false);

  const [count, setCount] = useState(null);

  const changeFavourite = () => {
    setFavourite(!favourite);
  };

  const changeElType = productCode => {
    const newElType = card.items.find(el => el.productCode === productCode);
    setElType(newElType);
    setCount(null);
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
  }, [card._id, cartList, count]);

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
      const indexProductToUpd = cartLocalStorageItems[indexProductLocalStorage].items.findIndex(
        item => item.productCode === productCodetoUpdate,
      );
      const cardItems = cartLocalStorageItems[indexProductLocalStorage].items;
      const countOfProduct = cardItems[indexProductToUpd];
      return countOfProduct.count;
    };

    const countProductCode = getCountProduct(productCode);
    setCount(countProductCode);
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
    const indexProductLocalStorageToUpdate = data.findIndex(item => item._id === card._id);
    const indexProductToUpd = data[indexProductLocalStorageToUpdate].items.findIndex(
      item => item.productCode === productCodetoUpdate,
    );

    const cardItems = data[indexProductLocalStorageToUpdate].items;

    cardItems[indexProductToUpd] = { ...cardItems[indexProductToUpd], count: countLSItems };

    return cardItems;
  };

  const changeCountInLocalStorageDecrementIncrementAndSet = (countLSItems, data) => {
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
    setCount(1);
  };

  const changeCountBuyLocalStorageFalseCode = data => {
    const productCodetoUpdate = elType.productCode;
    const indexProductToUpd = card.items.findIndex(
      item => item.productCode === productCodetoUpdate,
    );

    const cardItems = card.items;
    cardItems[indexProductToUpd] = { ...cardItems[indexProductToUpd], count: 1 };

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

    setCount(1);
    return;
  };

  const handleClick = e => {
    const presentProductCode = getPresentProductCode();

    if (e.currentTarget.name === 'increment') {
      setCount(prevState => prevState + 1);
      let countIncrement = count + 1;

      if (presentProductCode) {
        const cartLocalStorageItems = getCartLocalStorageItems();
        changeCountInLocalStorageDecrementIncrementAndSet(countIncrement, cartLocalStorageItems);
      }
    }
    if (e.currentTarget.name === 'decrement') {
      let countDecrement = count - 1;
      setCount(prevState => prevState - 1);
      if (presentProductCode) {
        const cartLocalStorageItems = getCartLocalStorageItems();

        changeCountInLocalStorageDecrementIncrementAndSet(countDecrement, cartLocalStorageItems);
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
        setCount('');
        return;
      }

      setCount(Number(e.target.value));
    }
  };

  const onSubmitCardHandler = e => {
    e.preventDefault();
    const presentProductCode = getPresentProductCode();

    if (presentProductCode) {
      const cartLocalStorageItems = getCartLocalStorageItems();

      changeCountInLocalStorageDecrementIncrementAndSet(count, cartLocalStorageItems);
    }
  };

  return (
    <BoxCard>
      <WeightList>
        {el.items.length > 0 &&
          el.items.map(({ size, productCode }) => {
            // console.log('el.types', el.types[0]);
            return (
              <WeightListItem key={productCode}>
                <WidthLink
                  className={productCode === elType.productCode ? 'active' : undefined}
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
        to={`/${card._id}`}
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
              to={`/${card._id}`}
              // to={`${elType.productCode}`}
            >
              <div>
                <ProductNameSt>{card.productName}</ProductNameSt>
              </div>
              <ShortDiscriptionSt>{card.shortDescription}</ShortDiscriptionSt>
            </Link>
          </div>
          <Rating className="reiting">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="20"
                fill="none"
                viewBox="0 0 117 20"
              >
                <path
                  fill="#E68314"
                  d="M15.954 8.113a.876.876 0 00-.769-.61l-4.403-.38a.296.296 0 01-.246-.181l-1.72-4.1a.885.885 0 00-1.635 0l-1.718 4.1a.296.296 0 01-.246.18l-4.4.381a.889.889 0 00-.507 1.56l3.34 2.915a.296.296 0 01.096.296l-1.004 4.334a.88.88 0 00.346.924.871.871 0 00.977.04l3.785-2.296a.289.289 0 01.302 0l3.785 2.296a.888.888 0 001.322-.963l-1-4.336a.295.295 0 01.094-.296l3.34-2.915a.88.88 0 00.261-.949zm-.65.504l-3.34 2.914a.889.889 0 00-.284.874l1.002 4.335a.296.296 0 01-.438.324l-3.785-2.297a.88.88 0 00-.917 0l-3.785 2.297a.286.286 0 01-.322-.013.296.296 0 01-.115-.311l1.001-4.336a.889.889 0 00-.283-.874L.698 8.617a.296.296 0 01-.088-.32.296.296 0 01.255-.204l4.403-.381a.889.889 0 00.741-.542l1.72-4.1a.296.296 0 01.542 0l1.72 4.1a.889.889 0 00.74.542l4.404.38a.296.296 0 01.255.204.296.296 0 01-.086.32zM35.954 8.113a.876.876 0 00-.769-.61l-4.403-.38a.296.296 0 01-.246-.181l-1.72-4.1a.885.885 0 00-1.634 0l-1.719 4.1a.296.296 0 01-.246.18l-4.4.381a.889.889 0 00-.507 1.56l3.34 2.915a.296.296 0 01.096.296l-1.004 4.334a.88.88 0 00.346.924.871.871 0 00.977.04l3.785-2.296a.289.289 0 01.302 0l3.785 2.296a.888.888 0 001.322-.963l-1-4.336a.295.295 0 01.094-.296l3.34-2.915a.88.88 0 00.261-.949zm-.65.504l-3.34 2.914a.889.889 0 00-.284.874l1.002 4.335a.296.296 0 01-.438.324l-3.785-2.297a.88.88 0 00-.917 0l-3.785 2.297a.286.286 0 01-.322-.013.296.296 0 01-.115-.311l1.001-4.336a.889.889 0 00-.283-.874l-3.34-2.913a.296.296 0 01-.088-.32.296.296 0 01.255-.204l4.403-.381a.889.889 0 00.741-.542l1.72-4.1a.296.296 0 01.542 0l1.72 4.1a.888.888 0 00.74.542l4.404.38a.296.296 0 01.255.204.296.296 0 01-.086.32zM55.954 8.113a.876.876 0 00-.769-.61l-4.403-.38a.296.296 0 01-.246-.181l-1.72-4.1a.885.885 0 00-1.635 0l-1.718 4.1a.296.296 0 01-.246.18l-4.4.381a.889.889 0 00-.507 1.56l3.34 2.915a.296.296 0 01.096.296l-1.004 4.334a.88.88 0 00.346.924.871.871 0 00.977.04l3.785-2.296a.289.289 0 01.302 0l3.785 2.296a.888.888 0 001.322-.963l-1-4.336a.295.295 0 01.094-.296l3.34-2.915a.88.88 0 00.261-.949zm-.65.504l-3.34 2.914a.889.889 0 00-.284.874l1.002 4.335a.296.296 0 01-.438.324l-3.785-2.297a.88.88 0 00-.917 0l-3.785 2.297a.286.286 0 01-.322-.013.296.296 0 01-.115-.311l1.001-4.336a.889.889 0 00-.283-.874l-3.34-2.913a.296.296 0 01-.088-.32.296.296 0 01.255-.204l4.403-.381a.889.889 0 00.741-.542l1.72-4.1a.296.296 0 01.542 0l1.72 4.1a.888.888 0 00.74.542l4.404.38a.296.296 0 01.255.204.296.296 0 01-.086.32zM75.954 8.113a.876.876 0 00-.769-.61l-4.403-.38a.296.296 0 01-.246-.181l-1.72-4.1a.885.885 0 00-1.635 0l-1.718 4.1a.296.296 0 01-.246.18l-4.4.381a.889.889 0 00-.507 1.56l3.34 2.915a.296.296 0 01.096.296l-1.004 4.334a.88.88 0 00.346.924.871.871 0 00.977.04l3.785-2.296a.289.289 0 01.302 0l3.785 2.296a.888.888 0 001.322-.963l-1-4.336a.295.295 0 01.094-.296l3.34-2.915a.88.88 0 00.261-.949zm-.65.504l-3.34 2.914a.889.889 0 00-.284.874l1.002 4.335a.296.296 0 01-.438.324l-3.785-2.297a.88.88 0 00-.917 0l-3.785 2.297a.286.286 0 01-.322-.013.296.296 0 01-.115-.311l1.001-4.336a.889.889 0 00-.283-.874l-3.34-2.913a.296.296 0 01-.088-.32.296.296 0 01.255-.204l4.403-.381a.889.889 0 00.741-.542l1.72-4.1a.296.296 0 01.542 0l1.72 4.1a.888.888 0 00.74.542l4.404.38a.296.296 0 01.255.204.296.296 0 01-.086.32zM95.954 8.113a.876.876 0 00-.769-.61l-4.403-.38a.296.296 0 01-.246-.181l-1.72-4.1a.885.885 0 00-1.635 0l-1.718 4.1a.296.296 0 01-.246.18l-4.4.381a.889.889 0 00-.507 1.56l3.34 2.915a.296.296 0 01.096.296l-1.004 4.334a.88.88 0 00.346.924.871.871 0 00.977.04l3.785-2.296a.289.289 0 01.302 0l3.785 2.296a.888.888 0 001.322-.963l-1-4.336a.295.295 0 01.094-.296l3.34-2.915a.88.88 0 00.261-.949zm-.65.504l-3.34 2.914a.889.889 0 00-.284.874l1.002 4.335a.296.296 0 01-.438.324l-3.785-2.297a.88.88 0 00-.917 0l-3.785 2.297a.286.286 0 01-.322-.013.296.296 0 01-.115-.311l1.001-4.336a.889.889 0 00-.283-.874l-3.34-2.913a.296.296 0 01-.088-.32.296.296 0 01.255-.204l4.403-.381a.889.889 0 00.741-.542l1.72-4.1a.296.296 0 01.542 0l1.72 4.1a.888.888 0 00.74.542l4.404.38a.296.296 0 01.255.204.296.296 0 01-.086.32z"
                ></path>
                <path
                  fill="#C8C8C8"
                  d="M99.536 11.91c0-1.194.151-2.321.453-3.382.301-1.06.734-2.055 1.297-2.983h.806a9.087 9.087 0 00-.667 1.328c-.198.494-.371 1.02-.517 1.58-.145.561-.258 1.134-.338 1.721a12.918 12.918 0 00-.119 1.735c0 .766.07 1.538.209 2.317.139.779.331 1.518.577 2.217.248.7.533 1.31.855 1.83h-.806a12.19 12.19 0 01-1.297-2.988 12.287 12.287 0 01-.453-3.376zm7.613 5.23c-.716 0-1.327-.206-1.835-.617-.503-.415-.891-1.013-1.163-1.795-.268-.782-.403-1.722-.403-2.819 0-1.094.135-2.03.403-2.809.272-.782.661-1.38 1.168-1.795.511-.417 1.121-.626 1.83-.626.709 0 1.317.209 1.825.626.51.415.899 1.013 1.168 1.795.272.779.408 1.715.408 2.81 0 1.096-.136 2.036-.408 2.818-.269.782-.656 1.38-1.163 1.795-.504.41-1.114.616-1.83.616zm0-.836c.785 0 1.399-.383 1.839-1.148.441-.77.662-1.851.662-3.247 0-.928-.101-1.72-.304-2.376-.198-.66-.485-1.164-.86-1.512a1.886 1.886 0 00-1.337-.522c-.779 0-1.39.388-1.835 1.164-.444.772-.666 1.854-.666 3.246 0 .928.1 1.72.299 2.377.202.656.488 1.156.86 1.5.374.346.822.518 1.342.518zm7.607-4.395c0 1.193-.151 2.32-.453 3.38a12.123 12.123 0 01-1.297 2.984h-.806c.242-.391.462-.834.661-1.328.203-.494.377-1.02.522-1.58.146-.56.259-1.134.338-1.72a12.832 12.832 0 00-.089-4.053 13.858 13.858 0 00-.582-2.217 9.346 9.346 0 00-.85-1.83h.806c.563.932.995 1.928 1.297 2.988.302 1.061.453 2.186.453 3.376z"
                ></path>
              </svg>
            </span>
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
          {!count && count !== '' ? (
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
                value={count}
              />
              <BTNInc name="increment" onClick={handleClick} type="button">
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
