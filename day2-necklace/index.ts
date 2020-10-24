import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';

const log = console.log.bind(console);

R.pipe(
  same_necklace,
  log,
)('nicole', 'icolen');

function same_necklace(str1: string, str2: string) {
  return str1 === str1;
}
