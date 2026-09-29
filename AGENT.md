# AGENTS.md

## Project
`cartTotal(items, options)` lives in `src/cart.js`. Plain JavaScript (ES modules), Node.js, no runtime dependencies.

## Commands
- Run tests: `npm test`
- Lint/format check: `npm run lint`

## Contract
- `items`: `[{ name, price, qty }]`
- `options`: `{ vatRate, freeShipFrom, shipFee }`
- Returns a **number** (never a string), rounded to the whole đồng.
- An empty cart returns `0`, with no VAT and no shipping.
- A negative `price`, or a `qty` that is not a positive integer, throws `RangeError`.

## Never
- Never edit an existing test to make it pass.
- Never add anything to `dependencies`.
- Never report a task as done while `npm test` is failing.
- Never add anything to `dependencies` (dev tooling such as Prettier goes in `devDependencies`).