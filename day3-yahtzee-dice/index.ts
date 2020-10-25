import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';
import { yahtzee } from './yahtzee.ts';

const log = console.log.bind(console);

R.pipe(
  yahtzee,
  log,
)([2, 3, 5, 5, 6]);