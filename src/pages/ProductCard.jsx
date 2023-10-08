import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Reviews from 'components/ProductDetailsCarousel/Reviews/Reviews';
import { fetchOneProduct } from 'services/api';
import { ProductDetailsCarousel } from 'components/ProductDetailsCarousel/ProductDetailsCarousel';
import {
  CardContainer,
  FlexBox,
  ImageContainer,
  ProductContainer,
  BrandTitle,
  ProductName,
  ShortDescription,
  CardCodeList,
  CardCodeListItem,
  InavAilability,
  AilabilityWrapper,
  RadioBtnList,
  RadioLabel,
  RadioInput,
  RadioText,
  QuintityInput,
  BtnDecrement,
  QuintityInputWrapper,
  BtnIncrement,
  QuntityContainer,
  CarCodeWrapper,
  CountContainer,
  CountSum,
  SubmitButton,
  HeartIcon,
  InfoLinkList,
  CustomNavLink,
} from './ProductCard.styled';

import { Rating } from 'components';
import { useStateContext } from 'context/StateContext';
import Loader from 'components/Loader/Loader';

export const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log('product:', product);
  const { setStateBreadcrumb } = useStateContext();

  useEffect(() => {
    fetchOneProduct(id).then(res => {
      setProduct({ ...res });

      setStateBreadcrumb(prevState => {
        const dirtyArray = [...prevState, res];
        const uniqueObjArray = [...new Map(dirtyArray.map(item => [item['_id'], item])).values()];
        // console.log('uniqueObjArray :>> ', uniqueObjArray);
        return uniqueObjArray;
      });
    });
  }, [id, setStateBreadcrumb]);

  const [quintity, setQuintity] = useState(0);

  const increment = () => setQuintity(prev => (prev += 1));
  const decrement = () => setQuintity(prev => (prev -= 1));

  const [favorite, setFavorite] = useState(false);

  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = value => {
    setSelectedValue(value);
  };

  const { brand, productName, shortDescription, _country, items } = product;

  const inStock = items && items.some(el => el.count > 0);

  const arr = items && items.sort();

  if (product._id === undefined) {
    return <Loader />;
  }

  return (
    <ProductContainer>
      <div style={{ maxWidth: '736px' }}>
        <ImageContainer>
          <ProductDetailsCarousel id={id} image={product.mainImage} />
        </ImageContainer>
        <div>
          <InfoLinkList>
            <li>
              <CustomNavLink to="description">Опис товару</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="composition">Відгуки</CustomNavLink>
            </li>
            <li>
              <CustomNavLink to="comments">Опис товару</CustomNavLink>
            </li>
          </InfoLinkList>

          <Outlet />
        </div>
        <Reviews />
      </div>

      <CardContainer>
        <div className="prodName">
          <FlexBox>
            <BrandTitle>{brand}</BrandTitle>
            <span>
              <Link className="heartIcon" onClick={() => setFavorite(!favorite)}>
                <HeartIcon />
              </Link>
            </span>
          </FlexBox>

          <ProductName>{productName}</ProductName>
          <ShortDescription>{shortDescription}</ShortDescription>
          <CarCodeWrapper>
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

            <CardCodeList>
              <CardCodeListItem>Код товару:</CardCodeListItem>
              <CardCodeListItem>Країна-виробник: {_country && _country.ua}</CardCodeListItem>
            </CardCodeList>
          </CarCodeWrapper>
        </div>
        {inStock > 0 ? (
          <AilabilityWrapper>
            <InavAilability>В наявності</InavAilability>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.4698 5.7851C11.5579 5.87333 11.6074 5.99294 11.6074 6.11765C11.6074 6.24235 11.5579 6.36196 11.4698 6.45019L7.07765 10.8424C6.98941 10.9305 6.86981 10.98 6.7451 10.98C6.62039 10.98 6.50079 10.9305 6.41255 10.8424L4.5302 8.96C4.44707 8.87079 4.40182 8.7528 4.40397 8.63089C4.40612 8.50897 4.45551 8.39265 4.54173 8.30643C4.62795 8.22021 4.74427 8.17082 4.86618 8.16867C4.9881 8.16652 5.10609 8.21177 5.1953 8.2949L6.7451 9.84392L10.8047 5.7851C10.8929 5.69697 11.0125 5.64747 11.1373 5.64747C11.262 5.64747 11.3816 5.69697 11.4698 5.7851ZM16 8C16 9.58225 15.5308 11.129 14.6518 12.4446C13.7727 13.7602 12.5233 14.7855 11.0615 15.391C9.59966 15.9965 7.99113 16.155 6.43928 15.8463C4.88743 15.5376 3.46197 14.7757 2.34315 13.6569C1.22433 12.538 0.462403 11.1126 0.153721 9.56072C-0.15496 8.00887 0.00346614 6.40034 0.608967 4.93853C1.21447 3.47672 2.23985 2.22729 3.55544 1.34824C4.87103 0.469192 6.41775 0 8 0C10.121 0.00249086 12.1544 0.846145 13.6541 2.3459C15.1539 3.84565 15.9975 5.87903 16 8ZM15.0588 8C15.0588 6.6039 14.6448 5.23914 13.8692 4.07833C13.0936 2.91751 11.9911 2.01276 10.7013 1.4785C9.41146 0.944232 7.99217 0.804443 6.62289 1.07681C5.25362 1.34918 3.99585 2.02146 3.00866 3.00866C2.02147 3.99585 1.34918 5.25361 1.07681 6.62289C0.804447 7.99217 0.944235 9.41146 1.4785 10.7013C2.01277 11.9911 2.91751 13.0936 4.07833 13.8692C5.23915 14.6448 6.6039 15.0588 8 15.0588C9.87148 15.0567 11.6657 14.3124 12.989 12.989C14.3124 11.6657 15.0567 9.87148 15.0588 8Z"
                fill="#B2AB73"
              />
            </svg>
          </AilabilityWrapper>
        ) : (
          <span>відсутній</span>
        )}

        <form>
          <p>Обрати вагу</p>
          <RadioBtnList>
            {arr?.map(({ _id, size }) => (
              <li key={_id}>
                <RadioLabel style={selectedValue === size ? { borderColor: '#E68314' } : {}}>
                  <RadioInput
                    type="radio"
                    name="size"
                    onChange={() => handleRadioChange(size)}
                    value={size}
                  />
                  <RadioText style={selectedValue === size ? { color: '#E68314' } : {}}>
                    {size} кг
                  </RadioText>
                </RadioLabel>
              </li>
            ))}
          </RadioBtnList>
          <QuntityContainer>
            <label htmlFor="calc"> Змінити кількість</label>
            <QuintityInputWrapper>
              <QuintityInput
                readOnly
                value={quintity === 0 ? '000' : quintity}
                type="text"
                id="calc"
              />
              <BtnDecrement
                onClick={decrement}
                type="button"
                aria-label="decrement"
                disabled={quintity < 1}
              >
                -
              </BtnDecrement>
              <BtnIncrement onClick={increment} type="button" aria-label="increment">
                +
              </BtnIncrement>
            </QuintityInputWrapper>
          </QuntityContainer>
          <CountContainer>
            <CountSum>146.00₴</CountSum>
            <SubmitButton type="button">Купити</SubmitButton>
          </CountContainer>
        </form>
      </CardContainer>
    </ProductContainer>
  );
};
