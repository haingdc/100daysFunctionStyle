import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';
import { same_necklace } from './same_necklace.ts';

const log = console.log.bind(console);

R.pipe(
  same_necklace,
  log,
)('nicole', 'enicol');