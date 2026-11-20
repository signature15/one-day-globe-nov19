/**
 * THURSDAY WORLD SHEET is the repository's one-page news broadsheet image.
 * It presents a cream-paper edition dated Thursday 19 November 2026.
 * The square page treats that date as the organizing principle for every item.
 * Its masthead gives the sheet a clear newspaper identity at the top of the page.
 * A red date marker makes the Thursday edition immediately legible.
 * Beneath the masthead, a stat band distills the day's news into key figures.
 * The main reading area gathers forty stories from around the world.
 * Lead reports receive the strongest visual emphasis in the editorial hierarchy.
 * Supporting cards and shorter briefs keep the remaining coverage compact.
 * Region labels show how the day's reporting is distributed geographically.
 * A region tally makes that geographic balance visible at a glance.
 * The cream ground and restrained ink palette reinforce the printed-paper metaphor.
 * The layout is designed to feel like a complete daily sheet, not a news feed.
 * A date-check footer closes the edition and verifies the Thursday scope.
 * Together, the masthead, statistics, tally, stories, and footer document one day.
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
