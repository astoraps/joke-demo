# joke-demo

[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/astoraps/joke-demo/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/astoraps/joke-demo/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

A program that writes one short text to `/output/entry.txt`: a one-line joke about working beside AI coding agents. ~127 characters, one line — the agent hides the CEO behind a feature flag and rolls him out to 1% of the company.

## Run it

```sh
node main.ts
```

It writes `entry.txt` to `/output` (or `$MAKEFUN_OUTPUT_DIR` when set).

The joke:

> The demo crashed in front of the CEO, so my agent put him behind a feature flag. He is now rolling out to 1% of the company.

v1 ("The demo crashed, so my agent rebased the CTO, squashed him into one commit, and force-pushed.") ranked 345 of 3,915 at 52.4% in round 3 — outside the top 80. v2 ("I put 'ask before you delete' in AGENTS.md. My agent deleted the demo, then asked me if that was okay.") was submitted as an unrated entry for the final. v3 is the user's feature-flag joke with one tweak: the punchline verb "available" became "rolling out", keeping the deployment metaphor alive in the last line.
