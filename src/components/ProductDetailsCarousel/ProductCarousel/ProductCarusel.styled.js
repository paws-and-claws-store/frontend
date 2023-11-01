import styled from '@emotion/styled';
import { theme } from 'styles';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 736px;
  height: 628px;
  margin-bottom: 48px;
`;

export const Slider = styled.div`
  display: flex;
  width: 88px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const MainImgWrapper = styled.div`
  width: 628px;
  height: 628px;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;
  /* transition: opacity 1s; */
`;

export const ImgWrapper = styled.div`
  display: flex;
  width: 88px;
  height: 88px;
  border: 1px solid ${theme.colors.green};
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.7s ease;
  cursor: pointer;
  &:focus,
  &:hover {
    border: 1px solid ${theme.colors.orange};
  }
`;


export const Img = styled.img`
  width: 100%;
  transition: opacity 0.5s;
`;

export const SlidePanel = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  overflow-y: scroll;
  scroll-snap-type: y;
  scroll-behavior: smooth;
  transition: transform 0.7s ease;
  gap: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PrevImg = styled.button`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  > svg{
    fill: ${(props) => props.disabled ? 'lightgray' : theme.colors.green };
    cursor: ${(props) => props.disabled ? 'none' : 'pointer' };
    &:hover{
      fill:  ${(props) => props.disabled ? 'lightgray' : theme.colors.orange };
    }
  }
`;

export const NextImg = styled.button`
  width: 32px;
  height: 32px;
  margin-top: 8px;
  transform: rotate(180deg);
  > svg{
    fill: ${(props) => props.disabled ? 'lightgray' : theme.colors.green };
    cursor: ${(props) => props.disabled ? 'none' : 'pointer' };
    &:hover{
      fill:  ${(props) => props.disabled ? 'lightgray' : theme.colors.orange };
    }
  }
`;
