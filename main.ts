// Roast Your Own Agent: one original line roasting my own AI agent.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const roast = "I asked my agent to roast itself. It wrote a 12-step plan, asked three clarifying questions, then billed the stalling as 'deep work.'";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), roast, "utf8");
