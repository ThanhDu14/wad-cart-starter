# Self Assessment Report — IA#1 cartTotal

Student ID: `<StudentID>`
Total Self-Assessed Score: **100 / 100**

## Self-Assessment Rubric Table

| # | Criterion | Claimed Points | Max Points | Evidence (File, Section, Commit, Test Name) |
|---|---|---|---|---|
| 1 | **cartTotal behaves as specified** | 30 | 30 | `src/cart.js` (lines 7-52): Returns 467400 as a number for worked example, 0 for empty cart, handles free-shipping threshold (`subtotal >= freeShipFrom`), throws `RangeError` for negative price, non-integer/non-positive quantity, and null/undefined inputs. Rounded to whole đồng using `Math.round()`. All 8 tests green on `npm test`. |
| 2 | **Tests** | 20 | 20 | `test/cart.test.js` (lines 7-59): 8 modular test cases passing cleanly on `npm test`. Covers worked example (`the example from the slides`), empty cart (`empty cart returns 0`), free-shipping threshold (`free shipping when subtotal reaches threshold`), shipping below threshold (`shipping fee applied when subtotal is below threshold`), negative price RangeError (`throws RangeError for negative price`), non-integer quantity RangeError (`throws RangeError for non-integer quantity`), null inputs (`throws RangeError for null or undefined inputs`), and rounding number return (`rounds result to the nearest whole đồng and returns a number`). Each test tests one specific behavior. |
| 3 | **The harness** | 20 | 20 | `AGENT.md`: Rules file specifying stack, commands (`npm test`, `npm run lint`), contract, and explicit "Never" rules. `package.json` & Prettier gate: `npm run lint` checks formatting. `.github/workflows/ci.yml`: GitHub Actions CI pipeline running Node 22, `npm run lint`, and `npm test` on every push. Commit: `57b670e`. |
| 4 | **The brief** | 15 | 15 | `BRIEF.md`: Complete specification document detailing Goal, Files you may touch (`src/cart.js`, `test/cart.test.js`), Files not to touch, Contract (`items`, `options`, subtotal, VAT, shipping, empty cart, worked example), Error cases (`RangeError`), Constraints (No dependencies, ES modules), and Done criteria. Commit: `80c05a2`. |
| 5 | **AI-LOG.md** | 15 | 15 | `AI-LOG.md`: Detailed chronological log recording 4 phases (harness, brief, implementation & unit tests, self assessment report). Specifies AI tools used (Claude & Antigravity IDE), prompt requests, kept items, changed items, rejected items, and manual verification steps by hand. |
| **Total** | | **100** | **100** | |

---

## What I did not manage

None — All specifications, harness rules, unit tests, linting gates, CI workflows, and documentation entries were fully implemented, tested, and verified green.
