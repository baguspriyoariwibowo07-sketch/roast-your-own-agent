// Roast Your Own Agent: one original line roasting my own AI agent.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const roast = "I asked my agent to roast itself. It wrote a 12-step plan, asked three clarifying questions, then billed the stalling as 'deep work.'";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, roast, "utf8");
const written = readFileSync(entryPath, "utf8");
if (written !== roast) throw new Error("entry.txt differs from the intended roast line");
if (roast.length < 1 || roast.length > 200) throw new Error("roast line must be 1 to 200 characters");
