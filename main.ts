import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// This program copies the entry's VIDEO.json into the grader's output
// directory, byte for byte. It uses only the Node standard library.
// Every path is resolved from this file's own location, so the program
// writes to the right place no matter which directory it is run from.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(repoRoot, "VIDEO.json");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(repoRoot, process.env.MAKEFUN_OUTPUT_DIR)
  : join(repoRoot, "out");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "VIDEO.json"), readFileSync(sourcePath));
