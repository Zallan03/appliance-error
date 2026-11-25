// The Funniest Honest Appliance Error.
// v2 — revised in this session: added the flat coda "I checked." —
// it deepens the machine's put-upon voice and makes the single-sock
// twist land twice instead of once.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "DRYER ERROR: I have been tumbling the same sock for 40 minutes. There was only ever one sock. I checked.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
