import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';
import { same_necklace, same_necklace_imperative_way } from './same_necklace.ts';

const log = console.log.bind(console);

R.pipe(
  same_necklace,
  log,
)('nicole', 'enicol');

R.pipe(
  same_necklace_imperative_way,
  log
)('1234', '3421');