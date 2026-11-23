// Entry for make.fun's "The Vacuum's Alibi: One Line, 200 Characters" bounty.
// The program writes one line, at most 200 characters, in which a robot
// vacuum explains why it missed a spot, to /output/entry.txt.
//
// The line: the vacuum insists the spot moved — it has the logs, with
// timestamps — and closes with the deadpan punch that it cleans floors,
// not fugitives. No explanation of the joke; the timestamps do the work.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "The spot moved. I have the logs. At 14:03 it was by the fridge; at 14:07 it was under the table. I clean floors, not fugitives.";

// Guard the gate: the entry must be UTF-8 text of 1 to 200 characters.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 200) {
  throw new Error(`entry length ${ENTRY_TEXT.length} outside gate 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
