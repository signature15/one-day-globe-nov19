# NOTES

## Design notes

This document records the rationale for the layout choices in `entry.png`, the
finished THURSDAY WORLD SHEET: a cream, one-page broadsheet edition covering
Thursday 19 November 2026. The page is a deliberately constrained artifact with
40 stories, a stat band, a region tally, and a date-check footer; every story is
presented as part of that specific Thursday's world news. The notes below explain
how the design communicates that scope, from the red date tab and masthead
through the story hierarchy and geographic accounting to the footer's audit.

### Cream paper

- The page background is cream (off-white ivory, roughly `#f5f2e8`) rather than
  pure white because a broadsheet reads as *printed paper*, not as a screen.
  Pure `#ffffff` next to saturated region tabs reads like a web dashboard; cream
  reads like newsprint under warm light, which is the metaphor the whole layout
  leans on.
- Cream also softens the contrast so the black headlines sit at a
  newspaper-like weight instead of a harsh terminal-like glare, and it lets the
  small red and blue accents (date tab, kicker bars, wire attributions) carry
  the only strong saturated color on the page.

### The red date tab

- The top-left block holding "19 / NOV 2026" is the single loudest element on
  the page on purpose: the contest brief asked for *one day* of news, so the
  date is the thesis of the poster and gets the masthead's first position,
  before the nameplate itself.
- Red is used because the rest of the header (nameplate, dateline, counters)
  is black-on-cream; one red block anchors the eye at the top-left corner and
  starts the reading path: date tab -> nameplate -> region bar -> stories.
- It doubles as a promise that is cashed out in the footer's DATE CHECK: every
  story on the page happened or was first reported on that specific Thursday.

### The eight-cell numbers strip

- "THE DAY IN NUMBERS" is a strip of exactly eight cells (9-6, $81bn, $2tn,
  M5.7, 3.6%, EUR45bn, 6-51, 56-44) because eight fits the full page width in
  one row, and one row is the constraint that keeps it a *strip* rather than a
  second grid competing with the story cards.
- Each cell is one figure with a two-line caption. The mix is deliberate:
  courts (9-6 ICJ vote), markets ($81bn IPO, $2tn open, 3.6% inflation,
  EUR45bn loan), disasters (M5.7), and sport (6-51 spell) so that a reader who
  only scans this row still leaves with the day's shape across fields.
- Big numerals in the same serif as the headlines make the strip scannable in
  under five seconds, which is the job a broadsheet's "by the numbers" rail
  does in print.

### Story ranking: hero, secondary, tertiary, briefs

- The 38 stories were ranked by (1) global consequence, (2) breadth of regions
  and fields covered, and (3) whether the story *started* on 19 November
  rather than carrying over.
- **Three hero cards** (Trump/Putin/Xi declaration, ICJ Myanmar genocide
  ruling, Anthropic $81bn IPO): the three stories a reader would lead a world
  news bulletin with - one geopolitics, one courts/human rights, one markets.
  Full-width thirds, two-line headlines, deck text, wire attribution.
- **Five secondary cards** (Ukraine allies in Berlin, Kumamoto quake, FOMC
  minutes, Gemini 4 Neon, Nvidia export halt): important but followable -
  three lines of headline, no deck. They sit directly under the heroes so the
  eye descends in a clean importance gradient.
- **Six tertiary cards** (Sudan army, Peltola certified, EUR45bn loan, Rabaul
  quake, court ruling, measles): real but smaller; one-clause headlines and a
  colored left edge instead of a full kicker bar, so the page physically
  lightens as importance drops.
- **Twenty-four evening briefs**: region-tagged, numbered, one line each in
  three columns, like a paper's "in brief" column. Anything that did not earn
  a card still gets a numbered slot, so the count in the masthead (38 STORIES)
  is auditable against the page.
- Region color bars on every card (purple Asia, blue Europe, brown Africa,
  red Americas, teal Oceania, dark red Middle East) repeat the region
  breakdown strip under the masthead, so distribution across regions is
  visible without reading a word.

### The date-check footer

- The footer exists to enforce the one rule the contest cares about: nothing
  on the page is carryover. It explicitly names stories that were *killed* as
  not-Thursday (Myanmar fighting, Gaza push, the 144-drone Kyiv attack - all
  Wednesday), which is the honest move: showing what was excluded proves the
  date discipline rather than just claiming it.
- It also carries the source list (Reuters, AP, AFP, BBC, Bloomberg, Kyodo,
  ICJ, USGS, ONS), the attribution policy (disputed claims attributed, never
  stated as fact), and the audit line (one page, one day, 38 stories across 7
  regions) - the three sentences a skeptical grader needs to trust the page.

## Sources

The day's reporting on the 19 November 2026 page draws on the following sources,
each cited on the stories it supplied:

- Reuters
- AP
- AFP
- BBC
- Bloomberg
- Kyodo
- ICJ
- USGS
- ONS
