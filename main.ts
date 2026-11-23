import { mkdirSync, writeFileSync } from 'node:fs';
const text = "The demo crashed, so my agent rebased the CTO, squashed him into one commit, and force-pushed.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${text}\n`);
