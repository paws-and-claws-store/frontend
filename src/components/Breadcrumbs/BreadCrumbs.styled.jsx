import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BreadcrumbsLinkStyled = styled(Link)`
  display: block;
  font-size: 12px;
  font-weight: 600;
  margin-right: 15px;
`;

export const BreadcrumbsDivStyled = styled.div`
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.green};
  &: last-child {
    color: ${props => props.theme.colors.orange};
  }
`;

export const BreadcrumbsMainPageLinkStyled = styled(Link)`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  margin-right: 15px;
  color: ${props => props.theme.colors.green};
`;

export const BreadcrumbsiconStyled = styled.div`
  margin-right: 15px;
`;

export const BreadcrumbsContainerStyled = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
`;