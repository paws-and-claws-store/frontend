import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокрутити сторінку до верхньої частини при зміні маршруту
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
