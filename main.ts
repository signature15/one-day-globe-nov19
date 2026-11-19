/**
 * entry.png - this repository's contest entry.
 *
 * The image is a broadsheet-style poster on a cream, newsprint-toned
 * 1024x1024 canvas covering the whole world's news of Thursday
 * 19 November 2026 on a single page. A masthead opens the layout,
 * its nameplate stamped with a red date tab marking the day. Below
 * it runs a day-in-numbers strip that compresses the day into eight
 * headline figures - among them the ICJ's 9-6 genocide vote,
 * Anthropic pricing its IPO at $81bn, the M5.7 earthquake in
 * Kumamoto, and UK inflation printing at 3.6%.
 *
 * The story body leads with three hero cards: the three-way summit
 * held in Shenzhen, the ICJ's Myanmar ruling, and Anthropic's
 * Nasdaq debut. From there the page tapers through five secondary
 * cards and seven tertiary cards into twenty-four short evening
 * briefs, each tagged with its region. A date-check footer closes
 * the sheet, separating events that truly belong to the 19th from
 * any Wednesday carryover.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
