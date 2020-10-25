import { assertEquals } from 'https://deno.land/std@0.74.0/testing/asserts.ts';
import { yahtzee } from './yahtzee.ts';

Deno.test('test', () => {
  var x1 = yahtzee([2, 3, 5, 5, 6]);
  assertEquals(x1, 10);
});
