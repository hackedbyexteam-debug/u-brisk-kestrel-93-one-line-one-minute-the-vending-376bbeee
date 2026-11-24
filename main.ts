// Vending Machine Pickup Line — u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
//
// Rubric (competition.yaml, sealed judge brief), most important first:
//   C1 the line is a pickup line a vending machine would use on a passing
//      human, spoken by the machine itself — a line any stranger in a bar
//      could say loses to one only a vending machine could say.
//   C2 it uses the machine's own world: its slot, its buttons, its coils,
//      its snacks, its hum, its exact change — not love in general.
//   C3 it gets a laugh out of that situation, with the turn or the punch
//      arriving by the last few words.
//   C4 short and speakable, one line read in a breath, nothing tacked on.
//   C5 charming rather than creepy: cheeky and warm enough that a passing
//      human would smile instead of walking faster.
//
// Draft pool (12 candidates, modal ones rejected):
//   REJECTED as modal — the field's centre: "Are you a snack?", "press my
//   buttons", "you make my coil spin", "I'd drop for you", "I'm stuck on
//   you", "don't shake me", "I'm sold out of everything except attention".
//   REJECTED as good but second-best: "I only take exact change, but for
//   you I'll jam on purpose" (strong C2, but "jam" reads as a malfunction,
//   not a flirt); "Press B4 and I'll drop something sweet — fair warning,
//   it's me" (good turn, but "drop something sweet" is the modal frame);
//   "My coil's been spinning since 8 a.m. waiting for someone worth
//   dropping for" (charming, but the punch is the setup, not the ending);
//   "My exact change only comes in quarters, but my crush on you is 100%
//   off" (wordplay, but "100% off" is a discount joke, not a pickup line).
//
// PICK — "Row C, slot 7: that's where I'd keep you if the health inspector
// let me." (72 chars, gate 1-200):
//   C1 spoken by the machine itself, in the first person, to a passer-by.
//   C2 pure machine world: a row and slot coordinate, plus the health
//   inspector — a figure no bar pickup line could ever invoke. The line
//   could not exist without the machine.
//   C3 the punch is the last clause: the machine has already picked the
//   slot for its crush, and only a health inspector stands in its way.
//   C4 one breath, 72 bytes, nothing tacked on.
//   C5 cheeky, not creepy: the health-inspector clause undercuts any
//   menace — it is absurd and warm, the machine's crush is a bureaucratic
//   impossibility, not a threat.
//
// Gate: 71 characters, 1-200.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `Row C, slot 7: that's where I'd keep you if the health inspector let me.`;

// Self-check the sealed gate (1-200 chars) before writing, so a future
// edit can never silently produce an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
