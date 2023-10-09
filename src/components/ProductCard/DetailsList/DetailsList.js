import React from 'react';
import { InfoLinkList, CustomNavLink } from './DetailsList.styled';

const DetailsList = () => {
  return (
    <InfoLinkList>
      <li>
        <CustomNavLink to="description">Опис товару</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="composition">Склад</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to="comments">Відгуки</CustomNavLink>
      </li>
    </InfoLinkList>
  );
};

export default DetailsList;
