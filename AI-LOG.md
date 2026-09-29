# AI-LOG.md

## 2026-09-30 — harness (AGENTS.md, Prettier, CI)
Tool: Claude (chat). Antigravity not used yet at this step.
Asked for: a step-by-step plan for the harness part of the assignment (rules file, a second gate, CI)
Kept: CI workflow, "lint" script, the AGENTS.md sections Project / Commands / Contract / Never
Changed: nothing changed
Rejected: nothing rejected at this step
By hand: ran `npm test` myself and confirmed it fails with "not implemented"; created the files, ran npm run lint, committed, pushed

## 2026-09-30 — brief (BRIEF.md)
Tool: Claude (chat). Antigravity not used yet at this step.
Asked for: a brief template, then a review of my draft against the rubric.
Kept: the template sections Goal / Files / Contract / Errors / Constraints / Done when]
Changed: BRIEF.md filename, allowing test/cart.test.js, options rules, and more detailed error rules
Rejected: nothing rejected at this step
By hand: wrote the Contract, Errors and pricing rules from README in my own words, my first draft before review

## 2026-09-30 — implementation & unit tests (src/cart.js, test/cart.test.js)
Tool: Antigravity IDE (Gemini 3.6 Flash).
Asked for: implementation of `cartTotal(items, options)` in `src/cart.js` and comprehensive unit tests in `test/cart.test.js` satisfying all edge cases in `BRIEF.md`.
Kept: exact validation rules for null/undefined inputs, price non-negative check, qty positive integer check, empty cart return 0, subtotal calculation, VAT calculation, free shipping threshold check (`subtotal >= freeShipFrom`), Math.round integer result, and 7 new modular test cases in `test/cart.test.js`.
Changed: formatted both files with Prettier so `npm run lint` passes without warnings.
Rejected: none.
By hand: verified `npm test` passed 8/8 tests, ran `npm run lint`, reviewed git status and git diff.

## 2026-09-30 — self assessment report (SELF_ASSESSMENT_REPORT.md)
Tool: Antigravity IDE (Gemini 3.6 Flash).
Asked for: creation of `SELF_ASSESSMENT_REPORT.md` aligned with the 5 rubric criteria, including evidence links, lines, commits, and self-given total score.
Kept: rubric criteria table structure, score breakdown (30/30, 20/20, 20/20, 15/15, 15/15 = 100/100), evidence lines pointing to exact files, test cases, and commits.
Changed: none.
Rejected: none.
By hand: reviewed self-assessment claims against repository evidence and verified score total calculation.