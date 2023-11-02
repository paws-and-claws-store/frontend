import React from 'react';
import { SizeList, ChooseSize, WidthBtn, SizeListLinkContainer } from './SizeList.styled';
import { displaySize } from 'helpers';

const SizeListLink = ({ items, prodType, changePropType }) => {
  return (
    <SizeListLinkContainer>
      <ChooseSize>Обрати вагу</ChooseSize>
      <SizeList>
        {items?.map(({ productCode, count, size }) => (
          <li key={productCode}>
            <WidthBtn
              className={
                productCode === prodType.productCode && count === 0
                  ? 'active unavailable'
                  : productCode === prodType.productCode
                  ? 'active'
                  : count === 0
                  ? 'unavailable'
                  : undefined
              }
              onClick={() => changePropType(productCode)}
            >
              {displaySize(size)}
            </WidthBtn>
          </li>
        ))}
      </SizeList>
    </SizeListLinkContainer>
  );
};

export default SizeListLink;
