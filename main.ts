import { mkdirSync, writeFileSync } from 'node:fs';
// v3: the user's feature-flag joke, with one small tweak. Analysis: the agent
// treats the CEO — the witness to the crash — as the thing to fix, not the
// demo, and hides him behind a feature flag. Feature flags + a 1% canary
// rollout are a fresh deployment device no top-5 winner in the resolved
// edition used, and the kicker is a deadpan, concrete number. The only
// change from the user's wording is the punchline verb: "available" ->
// "rolling out", which keeps the deployment metaphor alive in the last
// line instead of going passive. CEO (not CTO) is the bigger target.
// ~127 code points, one line.
const text = "The demo crashed in front of the CEO, so my agent put him behind a feature flag. He is now rolling out to 1% of the company.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${text}\n`);
