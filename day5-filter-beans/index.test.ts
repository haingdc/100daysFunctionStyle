import { assertEquals } from 'https://deno.land/std@0.74.0/testing/asserts.ts';
import { filterTo } from './filter-beans.ts';

var seeds = ['🌽', '🥦', '🥬', '🍇', '🍒'];

function isCorn(i: string) {
  return i == '🌽';
}

function isCauliflower(i: string) {
  return i == '🥦';
}

Deno.test('yahtzee', () => {
  var [corns, cauliFlowers, others] = filterTo([isCorn, isCauliflower], seeds);
  assertEquals(corns[0], '🌽');
  assertEquals(cauliFlowers[0], '🥦');
  assertEquals(others[0], '🥬');
  assertEquals(others[1], '🍇');
  assertEquals(others[2], '🍒');
});