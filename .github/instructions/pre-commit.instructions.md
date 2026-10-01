---
name: pre-commit
description: Format and lint staged files before a commit, using the Husky pre-commit hook.
applyTo: '**/*.{js,feature,md,yml,yaml}'
---

# Pre-commit

`.husky/pre-commit` runs `lint-staged` on staged files. Do not skip the hook.

- `*.js`: `prettier --write`, then `eslint --fix`
- `*.feature`: `prettier --write`, then `gherkin-lint-plus`
- `*.md`, `*.yml`, `*.yaml`: `prettier --write`

After editing these files, run the matching commands and leave the tree formatted. A pull request runs `npm run format:check` and `npm run lint` before the smoke suite, so a commit that bypasses the hook still fails CI.

Feature phrasing is in `.github/instructions/writing-gherkin.instructions.md`.
