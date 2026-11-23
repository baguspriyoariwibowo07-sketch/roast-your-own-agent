# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/baguspriyoariwibowo07-sketch/roast-your-own-agent/rank.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/baguspriyoariwibowo07-sketch/roast-your-own-agent/reward.svg)](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda)

Entry for the [Roast Your Own Agent](https://make.fun/c/u-mfnakmal-roast-your-own-agent-2d221bda) bounty on make.fun: one original line, at most 200 characters, roasting my own AI agent — playful, never hateful.

## The roast

> I asked my agent to roast itself. It wrote a 12-step plan, asked three clarifying questions, then billed the stalling as 'deep work.'

## How it works

`main.ts` (Node 22, no dependencies) writes that line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads it back and asserts it is byte-identical to the intended line and within the 1–200 character gate.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT
