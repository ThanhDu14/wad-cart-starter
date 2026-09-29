import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test("the example from the slides", () => {
  const items = [
    { name: "Áo thun", price: 180000, qty: 2 },
    { name: "Sổ tay", price: 45000, qty: 1 },
  ];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 467400);
});

test("empty cart returns 0", () => {
  const items = [];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.equal(cartTotal(items, options), 0);
});

test("free shipping when subtotal reaches threshold", () => {
  const items = [{ name: "Laptop", price: 600000, qty: 1 }];
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 };
  // Subtotal: 600000, VAT: 60000, Shipping: 0 (subtotal >= 500000) => Total: 660000
  assert.equal(cartTotal(items, options), 660000);
});

test("shipping fee applied when subtotal is below threshold", () => {
  const items = [{ name: "Bút", price: 100000, qty: 1 }];
  const options = { vatRate: 0.1, freeShipFrom: 500000, shipFee: 30000 };
  // Subtotal: 100000, VAT: 10000, Shipping: 30000 => Total: 140000
  assert.equal(cartTotal(items, options), 140000);
});

test("throws RangeError for negative price", () => {
  const items = [{ name: "Lỗi giá", price: -5000, qty: 1 }];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(() => cartTotal(items, options), RangeError);
});

test("throws RangeError for non-integer quantity", () => {
  const items1 = [{ name: "Lỗi qty thập phân", price: 50000, qty: 1.5 }];
  const items2 = [{ name: "Lỗi qty bằng 0", price: 50000, qty: 0 }];
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(() => cartTotal(items1, options), RangeError);
  assert.throws(() => cartTotal(items2, options), RangeError);
});

test("throws RangeError for null or undefined inputs", () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 };
  assert.throws(() => cartTotal(null, options), RangeError);
  assert.throws(() => cartTotal([], null), RangeError);
});

test("rounds result to the nearest whole đồng and returns a number", () => {
  const items = [{ name: "Món lẻ", price: 15000, qty: 1 }];
  const options = { vatRate: 0.083, freeShipFrom: 500000, shipFee: 10000 };
  // Subtotal: 15000, VAT: 1245, Shipping: 10000 => Total: 26245
  const result = cartTotal(items, options);
  assert.equal(typeof result, "number");
  assert.equal(result, 26245);
});
