export function normalizeProductsResponse(response) {
  return response?.products || response?.data || response || [];
}

export function buildMarqueeProducts(products, limit = 8) {
  const selectedProducts = products.slice(0, limit);

  return [...selectedProducts, ...selectedProducts];
}
