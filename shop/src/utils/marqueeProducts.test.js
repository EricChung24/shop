import test from "node:test";
import assert from "node:assert/strict";

import { buildMarqueeProducts, normalizeProductsResponse } from "./marqueeProducts.js";

test("normalizeProductsResponse extracts products from API response", () => {
  const response = {
    products: [{ id: 1 }, { id: 2 }],
  };

  assert.deepEqual(normalizeProductsResponse(response), [{ id: 1 }, { id: 2 }]);
});

test("buildMarqueeProducts keeps only the first 8 products and duplicates them", () => {
  const products = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Product ${index + 1}`,
  }));

  const marqueeProducts = buildMarqueeProducts(products);

  assert.equal(marqueeProducts.length, 16);
  assert.deepEqual(
    marqueeProducts.slice(0, 8).map((product) => product.id),
    [1, 2, 3, 4, 5, 6, 7, 8],
  );
  assert.deepEqual(
    marqueeProducts.slice(8).map((product) => product.id),
    [1, 2, 3, 4, 5, 6, 7, 8],
  );
});

test("buildMarqueeProducts returns duplicated items even when fewer than 8 products exist", () => {
  const products = [
    { id: 1, title: "A" },
    { id: 2, title: "B" },
    { id: 3, title: "C" },
  ];

  const marqueeProducts = buildMarqueeProducts(products);

  assert.equal(marqueeProducts.length, 6);
  assert.deepEqual(
    marqueeProducts.map((product) => product.id),
    [1, 2, 3, 1, 2, 3],
  );
});
