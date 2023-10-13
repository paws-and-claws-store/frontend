import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'components';
import SizeListLink from '../SizeList/SizeList';
import { ReactComponent as Icon } from '../../../svg/CheckCircle.svg';

import {
  FlexBox,
  BrandTitle,
  ProductName,
  ShortDescription,
  CardCodeList,
  CardCodeListItem,
  InavAilability,
  AilabilityWrapper,
  CarCodeWrapper,
  HeartIcon,
  InStockText,
} from './MainInfo.styled';
import QuntityProduct from '../QuntityProduct/QuntityProduct';

const MainInfo = ({ product }) => {
  const { brand, productName, shortDescription, _country, items } = product;
  console.log(product);

  const inStock = items && items.every(el => el.count > 0);

  return (
    <>
      <div className="prodName" style={{ position: 'sticky', top: '10px' }}>
        <FlexBox>
          <BrandTitle>{brand}</BrandTitle>
          <span>
            <Link>
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
            <CardCodeListItem>
              Країна-виробник: {_country && _country.ua}
            </CardCodeListItem>
          </CardCodeList>
        </CarCodeWrapper>
      </div>
      {inStock > 0 ? (
        <AilabilityWrapper>
          <InavAilability>В наявності</InavAilability>
          <Icon />
        </AilabilityWrapper>
      ) : (
        <AilabilityWrapper>
          <InStockText>Немає в наявності</InStockText>
        </AilabilityWrapper>
      )}

      <SizeListLink items={items} />
      <QuntityProduct inStock={inStock} />
    </>
  );
};

export default MainInfo;
