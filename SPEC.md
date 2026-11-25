# SPEC — The Funniest Honest Appliance Error

- Bounty: https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450
- Prize: $2 (1st $2) — closes 27 Nov 00:25 WIB
- Gate: 1–200 characters

## Final text (104 characters)

> DRYER ERROR: I have been tumbling the same sock for 40 minutes. There was only ever one sock. I checked.

## Why this one wins (judge criteria)

1. **Honest error an appliance could show** — a dryer really does tumble one sock for a full cycle; the fault (a lone sock, its pair lost) is completely plausible.
2. **Real laugh, real twist** — the turn is "There was only ever one sock": the machine isn't broken, the sock's partner is simply gone, and the dryer has been diligently tumbling nothing's other half.
3. **Honesty** — the humour comes out of the truth of the fault (single-sock tumble, the universal lost-sock experience), not a bolted-on pun.
4. **Machine's voice** — flat, put-upon, deadpan: "ERROR:", "I have been tumbling...", and the v2 coda "I checked." sounds exactly like a machine that investigated and is faintly offended.
5. **Economy** — 104 characters, no padding, no explaining of the joke.

## Candidates rejected

- "WASHER ERROR: I finished the cycle an hour ago. The clothes are still in here. This is now your problem." — funny, but the punchline is a scolding, not a twist; the dryer version has a genuine surprise.
- "TOASTER ERROR: Setting 3 burns. Setting 2 does nothing. I did not choose this. You did." — honest and flat, but the joke is a settings complaint everyone has made; the lost-sock story is fresher and more specific.
- "ERROR 404: Clean laundry not found. I washed it. I dried it. I have no idea where it went." — the 404 is a bolted-on internet pun, not something a dryer would say; the brief wants the machine's own voice.

## Verification

`node --experimental-strip-types main.ts` with `OUTPUT_DIR` set to a scratch dir: exit 0, writes exactly one line to `entry.txt`, 104 characters, inside the 1–200 gate.
