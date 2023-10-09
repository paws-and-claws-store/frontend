import React from 'react';
import { SizeList, ChooseSize } from './SizeList.styled';
import { Link } from 'react-router-dom';
import { displaySize } from 'helpers';

const SizeListLink = ({ items }) => {
  return (
    <>
      <ChooseSize>Обрати вагу</ChooseSize>
      <SizeList>
        {items?.map(el => (
          <li key={el._id}>
            <Link>{displaySize(el.size)}</Link>
          </li>
        ))}
      </SizeList>
    </>
  );
};

export default SizeListLink;
