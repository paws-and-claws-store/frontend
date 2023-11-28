import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BreadcrumbsLinkStyled = styled(Link)`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-right: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbsNoLinkStyled = styled.div`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-right: 15px;
`;

export const BreadcrumbsDivStyled = styled.div`
  display: flex;
  align-items: center;
  height: 20px;

  color: ${props => props.theme.colors.green};
  &:last-child {
    color: ${props => props.theme.colors.orange};
    cursor: default;
  }
`;

export const BreadcrumbsMainPageLinkStyled = styled(Link)`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  margin-right: 15px;
  color: ${props => props.theme.colors.green};

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  &:hover {
    text-decoration: underline;
  }
`;

export const BreadcrumbsiconStyled = styled.div`
  margin-right: 15px;
`;

export const BreadcrumbsContainerStyled = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
`;
