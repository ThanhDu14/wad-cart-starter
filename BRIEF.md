# Brief: cartTotal

## Goal
Implement `cartTotal(items, options)` in `src/cart.js`
and make `npm test` pass. The harness (Prettier, CI, this brief,
AGENT.md, AI-LOG.md) must remain untouched.

## Files you may touch
- src/cart.js
- test/cart.test.js (add new tests only; never edit or delete the existing test)

## Do not touch
- AGENT.md
- AI-LOG.md
- package.json
- package-lock.json
- README.md

## Contract
- Input `items`: `[{ name: string, price: number, qty: number }]`
- Input `options`: `{ vatRate?: number, freeShipFrom?: number, shipFee?: number }`
- Output: a single number: `subtotal + vat + shipping`, rounded to nearest integer
- Rules: 
  - subtotal: sum of `price × qty` for each item
  - VAT: `vatRate × subtotal` (0 when vatRate is not given or 0)
  - shipping: `0` when `subtotal ≥ freeShipFrom`, otherwise `shipFee`
    (0 when freeShipFrom and shipFee are not given or 0)
  - an empty items array gives a total of `0` (no VAT, no shipping)
- Worked example: 2 × 180000 + 1 × 45000 = 405000 subtotal, VAT 32400, shipping 30000 (below the 500000 threshold) → 467400

## Errors
- `price` must be a non-negative number; throw `RangeError` if not
- `qty` must be a positive integer; throw `RangeError` if not
- throw on `null` or `undefined` for `items`, `options` or either

## Constraints
- No external packages
- ES modules

## Done when
- `npm test` passes