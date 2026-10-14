# GPT UI Entry Point

Before creating or modifying UI, read project documents in this order:

1. `index.md`
2. `DESIGN.md`
3. Only the Component Contract files required for the current task
4. If the task affects SWAP, read `docs/SWAP.md` for the preserved FINAL reference.
5. If the task concerns `01~15 / AI 수정본`, also read `docs/SWAP_AI_REVISION.md` and inspect the current Figma screen.

After reading `DESIGN.md` and before starting UI implementation, report to the user:

- The screen's core action
- The applicable `DESIGN.md` rules
- Anything required for implementation that is not defined
- Any conflict between `DESIGN.md` rules and the user's request

Do not create or modify UI code or Figma screens until the user confirms that report.

Do not invent or add undefined Tokens, Components, design rules, values, variants, or states. Use only the currently defined system.

## SWAP version safety

- `AI INITIAL`, `FINAL`, and `AI 수정본` are distinct Figma versions; never silently overwrite comparison originals.
- `docs/SWAP.md` documents the preserved FINAL baseline. `docs/SWAP_AI_REVISION.md` documents the later AI revision and its outstanding work.
- AI-revision-only Figma components do **not** become global component APIs, React components, tokens, or approved variants by being documented.
- When user-provided target data differs from the currently observed Figma screen, report the discrepancy rather than claiming it is already applied. In particular, requested `sonorous / LOUDER` and visible `SONOROUS` are not yet identical.
- Keep Figma design completion, prototype wiring, GitHub implementation, and photo-asset verification separate in progress reports.
