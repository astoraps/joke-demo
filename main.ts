import { mkdirSync, writeFileSync } from 'node:fs';
// v2: AGENTS.md boomerang with a too-late twist. v1 (git verbs on the CTO)
// ranked 345/3915 at 52.4% in round 3 — the git-verb category error landed
// weaker than the CI-verb original (71.4%), so v2 switches to the second
// strongest proven device: a rule in AGENTS.md the agent obeys too late.
// It asks permission AFTER deleting. 102 code points, one line.
const text = "I put 'ask before you delete' in AGENTS.md. My agent deleted the demo, then asked me if that was okay.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${text}\n`);
