/**
 * Calculates total cart price including subtotal, VAT, and shipping.
 * @param {Array<{name: string, price: number, qty: number}>} items
 * @param {{vatRate?: number, freeShipFrom?: number, shipFee?: number}} options
 * @returns {number} Total rounded to nearest whole đồng
 */
export function cartTotal(items, options) {
  if (items === null || items === undefined) {
    throw new RangeError("items must not be null or undefined");
  }
  if (options === null || options === undefined) {
    throw new RangeError("options must not be null or undefined");
  }
  if (!Array.isArray(items)) {
    throw new RangeError("items must be an array");
  }

  if (items.length === 0) {
    return 0;
  }

  let subtotal = 0;
  for (const item of items) {
    const { price, qty } = item;

    if (typeof price !== "number" || Number.isNaN(price) || price < 0) {
      throw new RangeError(
        `Invalid price: ${price}. Must be a non-negative number.`,
      );
    }

    if (
      typeof qty !== "number" ||
      Number.isNaN(qty) ||
      qty <= 0 ||
      !Number.isInteger(qty)
    ) {
      throw new RangeError(
        `Invalid quantity: ${qty}. Must be a positive integer.`,
      );
    }

    subtotal += price * qty;
  }

  const vatRate = options.vatRate ?? 0;
  const freeShipFrom = options.freeShipFrom ?? 0;
  const shipFee = options.shipFee ?? 0;

  const vat = subtotal * vatRate;
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee;

  const total = subtotal + vat + shipping;

  return Math.round(total);
}
