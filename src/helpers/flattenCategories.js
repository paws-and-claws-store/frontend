export function flattenCategories(categories, result = []) {
  categories?.forEach(category => {
    result.push({
      id: category._id,
      title: category.ua,
      title_en: category.en,
      code: category.code,
    });

    if (category._categories && category._categories.length > 0) {
      category._categories.forEach(variant => {
        result.push({
          id: variant._id,
          title: variant.ua,
          title_en: variant.en,
          code: variant.code,
        });

        if (variant._variants && variant._variants.length > 0) {
          flattenCategories(variant._variants, result);
        }
      });
    }
  });

  return result;
}
