import {
  FilterSelectionButton,
  FilterSelectionContainer,
  FilterSelectionOption,
  FilterSelectionText,
} from './FilterSelectionLayout.styled';

export const FilterSelectionLayout = renderdata => {
  return (
    <FilterSelectionContainer>
      <FilterSelectionOption>
        <FilterSelectionText>Canagan</FilterSelectionText>
        <FilterSelectionButton />
      </FilterSelectionOption>
      <FilterSelectionOption>
        <FilterSelectionText>Royal Canin</FilterSelectionText>
        <FilterSelectionButton />
      </FilterSelectionOption>
      <FilterSelectionOption>
        <FilterSelectionText>Acana</FilterSelectionText>
        <FilterSelectionButton />
      </FilterSelectionOption>
      <FilterSelectionOption>
        <FilterSelectionText>Purina Pro Plan</FilterSelectionText>
        <FilterSelectionButton />
      </FilterSelectionOption>
      <FilterSelectionOption>
        <FilterSelectionText>30 ₴ - 2000 ₴</FilterSelectionText>
        <FilterSelectionButton />
      </FilterSelectionOption>
    </FilterSelectionContainer>
  );
};

// function renderBlock(data, type) {
//   return (
//     <>
//       {data && type ? (
//         <FilterSelectionOption>
//           <FilterSelectionText>
//             {type === 'brand' ? `${data}` : `  ${data[0]} ₴ - ${data[1]} ₴`}
//           </FilterSelectionText>
//           <FilterSelectionButton />
//         </FilterSelectionOption>
//       ) : null}
//     </>
//   );
// }
