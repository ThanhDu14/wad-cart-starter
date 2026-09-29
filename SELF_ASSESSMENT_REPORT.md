# Self-assessment — IA#1

Submitted by: <student ID> — <full name>
Total I claim: 100 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `src/cart.js`: returns 467400 as number for worked example, 0 for empty cart, handles free-shipping threshold (`subtotal >= freeShipFrom`), throws `RangeError` for price < 0, non-integer/non-positive qty, null inputs; rounded to whole đồng (`Math.round`) |
| Tests | 20 | 20 | `test/cart.test.js`: 8 focused tests covering worked example, empty cart, free-shipping threshold (`free shipping when subtotal reaches threshold`), shipping fee below threshold, RangeError price, RangeError qty, RangeError null inputs, and rounding |
| Harness | 20 | 20 | `AGENT.md` (stack, commands, contract, 4 never rules), `package.json` lint script (`prettier --check`), `.github/workflows/ci.yml` (runs lint & test on push), commit `57b670e` |
| Brief | 15 | 15 | `BRIEF.md`: specifies allowed files (`src/cart.js`, `test/cart.test.js`), forbidden files, contract, error rules, and "no dependencies", commit `80c05a2` |
| AI-LOG.md | 15 | 15 | `AI-LOG.md`: 4 step entries (harness, brief, implementation & unit tests, self assessment report) detailing tool, asked for, kept, changed, rejected, and by hand verification |

## What I did not manage
None — all specification rules, edge cases, tests, harness files, brief, and AI log entries were implemented and verified green via `npm test` and `npm run lint`.

## What I would do differently
Commit after adding each individual unit test case during the TDD loop to make the git history even more granular.
