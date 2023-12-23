export const selectCartStore = state => state.cart.cartItems;
export const selectBreadCrumbsStore = state => state.breadcrumbs.breadcrumbs;
export const selectSearchQueryStore = state => state.search.query;
export const selectSortingTypeStore = state => state.sorting.type; // select current type of sorting
export const selectSortingTypeStoreDefault = state => state.sorting.defaultType; // select default type of sorting
export const selectViewedProducts = state => state.viewedProducts.viewedList;
export const selectPriceValue = state => state.priceRange.value;
export const selectIsPriceRangeSet = state => state.priceRange.isPriceRangeSet; // select to get setted or not price range filter now
export const selectIsBrandsFilterSet = state => state.brandsFilter.isBrandsSet; // select to get setted or not brands filter now
export const selectPriceValueInput = state => state.priceRange.value;
export const selectIsClearSetPriceRange = state => state.priceRange.isClearSet; // status of clear button set on Price Range filter
export const selectIsClearSetBrandsFilter = state => state.brandsFilter.isClearSet; // status of clear button set on Brands filter
export const selectBrandsFilter = state => state.brandsFilter.brands; // select list of selectrd brands in Brands filter
export const selectDefaultPriceRange = state => state.priceRange.defaultPriceRange; // select default price range for query
export const selectCheckedBrands = state => state.brandsFilter.checkedBrands;
export const selectCheckboxStates = state => state.brandsFilter.checkboxStates;
export const selectDefaultBrands = state => state.brandsFilter.defaultBrands; // select default brands for query
