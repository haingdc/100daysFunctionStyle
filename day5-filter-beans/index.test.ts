import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';
import { assertEquals } from 'https://deno.land/std@0.74.0/testing/asserts.ts';
import { filterTo } from './filter-beans.ts';

var seeds = ['🌽', '🥦', '🥬', '🍇', '🍒', '🌽', '🍌', '🥕', '🥝'];

function isCorn(i: string) {
  return i == '🌽';
}

function isCauliflower(i: string) {
  return i == '🥦';
}

Deno.test('filter beans', () => {
  var [corns, cauliFlowers, others] = filterTo([isCorn, isCauliflower, R.identity], seeds);
  assertEquals(corns[0], '🌽');
  assertEquals(cauliFlowers[0], '🥦');
  assertEquals(others[0], '🥬');
  assertEquals(others[1], '🍇');
  assertEquals(others[2], '🍒');
});