import React, { useState, useEffect } from 'react';
import { ScrollToTopStyled } from './ScrollToTop.styled';
import { ScrollToTopIcon } from 'components/Icons/ScrollToTopIcon';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {showTopBtn && (
        <ScrollToTopStyled onClick={goToTop}>
          <ScrollToTopIcon />
        </ScrollToTopStyled>
      )}
    </>
  );
};
export default ScrollToTop;
