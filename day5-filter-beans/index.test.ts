import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';
import { assertEquals } from 'https://deno.land/std@0.74.0/testing/asserts.ts';
import { filterTo } from './filter-beans.ts';

var seeds = ['🌽', '🥦', '🥬', '🍇', '🍒', '🌽', '🍌', '🥕', '🥝', '🥭'];

function isCorn(i: string) {
  return i == '🌽';
}

function isCauliflower(i: string) {
  return i == '🥦';
}

function isMango(i: string) {
  return i == '🥭';
}

Deno.test('filter beans', () => {
  var [corns, cauliFlowers, others] = filterTo([isCorn, isCauliflower, R.identity], seeds);
  assertEquals(corns[0], '🌽');
  assertEquals(cauliFlowers[0], '🥦');
  assertEquals(others[0], '🥬');
  assertEquals(others[1], '🍇');
  assertEquals(others[2], '🍒');
});

Deno.test('filter beans 2', () => {
  var [corns, cauliFlowers, mangoes, others] = filterTo([isCorn, isCauliflower, isMango, R.identity], seeds);
  assertEquals(corns[0], '🌽');
  assertEquals(cauliFlowers[0], '🥦');
  assertEquals(mangoes[0], '🥭');
  assertEquals(others[0], '🥬');
  assertEquals(others[1], '🍇');
  assertEquals(others[2], '🍒');
});

Deno.test('edge case: empty array', () => {
  var groups = filterTo([isCorn, isCauliflower, R.identity], []);
  var [corns, cauliFlowers, others] = groups;
  assertEquals(corns.length, 0);
  assertEquals(cauliFlowers.length, 0);
  assertEquals(others.length, 0);
});

Deno.test('edge case: no predicate to remain', () => {
  var groups = filterTo([isCorn, isCauliflower], seeds);
  var [corns, cauliFlowers] = groups;
  assertEquals(groups.length, 2);
});