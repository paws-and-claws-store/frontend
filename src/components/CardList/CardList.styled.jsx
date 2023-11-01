import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
<<<<<<< HEAD
  gap: ${props => props.theme.spacing.step * 5}px; */
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: ${props => props.gridColumns};
=======
  gap: ${props => props.theme.spacing.step * 5}px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
>>>>>>> dev
  grid-column-gap: 20px;
  grid-row-gap: 20px; */
`;

export const ListItem = styled.li``;
