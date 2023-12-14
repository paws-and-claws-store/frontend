export const selectCartStore = state => state.cart.cartItems;
export const selectBreadCrumbsStore = state => state.breadcrumbs.breadcrumbs;
export const selectSearchQueryStore = state => state.search.query;
export const selectSortingTypeStore = state => state.sorting.type;
export const selectViewedProducts = state => state.viewedProducts.viewedList;
export const selectMinPriceRange = state => state.priceRange.minPriceRange;
export const selectMaxPriceRange = state => state.priceRange.maxPriceRange;
export const selectPriceValue = state => state.priceRange.value;
export const selectIsPriceRangeSet = state => state.priceRange.isPriceRangeSet;
export const selectPriceValueInput = state => state.priceRange.valueInput;
export const selectIsClearSetPriceRange = state => state.priceRange.isClearSet; // status of clear button set on Price Range filter
export const selectIsClearSetBrandsFilter = state => state.brandsFilter.isClearSet; // status of clear button set on Brands filter
export const selectBrandsFilter = state => state.brandsFilter.brands; // select list of selectrd brands in Brands filter
