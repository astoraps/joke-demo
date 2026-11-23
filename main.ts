import { mkdirSync, writeFileSync } from 'node:fs';
// One-line joke, 94 code points: the agent treats the CTO like a git branch —
// rebase, squash, force-push. Three workflow verbs on a person, ending in the
// irreversible one. Built from the winning shape of the resolved edition.
const text = "The demo crashed, so my agent rebased the CTO, squashed him into one commit, and force-pushed.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${text}\n`);
