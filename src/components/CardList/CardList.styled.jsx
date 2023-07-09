import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.step * 5}px;
`;

export const ListItem = styled.li``;
