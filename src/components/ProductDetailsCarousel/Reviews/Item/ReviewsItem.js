import React from 'react';
import { Item, Comment, Nickname, DateComment } from './Item.styled';

const ReviewsItem = () => {
  return (
    <>
      <Item>
        <Comment>
          Я просто захоплений якістю цього корму для собак! Мій чотирилапий
          друг, Рекс, завжди був вибагливим стосовно їжі, але цей корм змінив
          усе. Він їсть його з таким задоволенням, начебто кожен прикладний раз
          це свято.
        </Comment>
        <Nickname>Кирило Буданов</Nickname>
        <DateComment>25.07. 2023</DateComment>
      </Item>
      <Item>
        <Comment>
          Я просто захоплений якістю цього корму для собак! Мій чотирилапий
          друг, Рекс, завжди був вибагливим стосовно їжі, але цей корм змінив
          усе. Він їсть його з таким задоволенням, начебто кожен прикладний раз
          це свято.{' '}
        </Comment>
        <Nickname>Кирило Буданов</Nickname>
        <DateComment>25.07. 2023</DateComment>
      </Item>
    </>
  );
};

export default ReviewsItem;
