import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { image1, image2, image3, image4, image5 } from '../../images';

import { useState } from 'react';
import { CarouselStyle } from './Crousel.styled';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const banner = [
  {
    id: nanoid(3),
    img: image1,
    title: 'Порадуйте свого  улюбленця  ',
    discription:
      'Отримайте високоякісний корм для собак за вигідною ціною. Натуральні інгредієнти. Збалансоване харчування. Здорова шкіра і шерсть. Сильний імунітет. Знижена ціна.',
    linkName: 'Перейти в каталог',
    link: '/catalog',
  },
  {
    id: nanoid(3),
    img: image2,
    title: `Подбай про мяу-комфорт`,
    discription:
      'Освіжи свого котика з ніжністю. Шампунь для котів - здорова шкіра, шовкова шерсть. Доглянутість, яку вони заслуговують.',
    linkName: 'Купити зараз',
    link: '/catalog',
  },
  {
    id: nanoid(3),
    img: image3,
    title: 'Найкращий вибір для цуценят ',
    discription:
      'Збалансоване харчування для малих пухнастих друзів. Ми пропонуємо все необхідне для росту й розвитку цуценят.',
    linkName: 'Перейти в каталог',
    link: '/catalog',
  },
  {
    id: nanoid(3),
    img: image4,
    title: 'Турбота про найменших ',
    discription:
      'На сторінці корму для кошенят ви знайдете широкий вибір харчових продуктів, спеціально розроблених для задоволення потреб вашої маленької кішки. Вони містять збалансовані інгредієнти, необхідні для здорового зростання і розвитку.',
    linkName: 'Купити зараз',
    link: '/productCard',
  },
  {
    id: nanoid(3),
    img: image5,
    title: 'Очищення та догляд: Шампуні для собак',
    discription:
      'Найкращі шампуні для собак, що забезпечують ефективне та безпечне очищення їх шерсті. Ці шампуні спеціально розроблені, щоб забезпечити ніжний догляд, видалити бруд, неприємні запахи та залишити шерсть вашого улюбленця свіжою, чистою та доглянутою.',
    linkName: 'Купити зараз',
    link: '/productCard',
  },
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselStyle activeIndex={index} onSelect={handleSelect}>
      {banner.map(item => {
        return (
          <Carousel.Item key={item.id} interval={10000000}>
            <img className="d-block w-100" src={item.img} alt={item} />
            <Carousel.Caption>
              <div className="captionDescription">
                <h1 className="title">{item.title}</h1>
                <p className="discription">{item.discription}</p>
              </div>
              <Link to={item.link} className="bannerLink">
                {item.linkName}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </CarouselStyle>
  );
}

export default ControlledCarousel;
