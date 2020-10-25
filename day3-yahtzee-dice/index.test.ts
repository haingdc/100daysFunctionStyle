import { assertEquals } from 'https://deno.land/std@0.74.0/testing/asserts.ts';
import { yahtzee } from './yahtzee.ts';

Deno.test('yahtzee', () => {
  var x1 = yahtzee([2, 3, 5, 5, 6]);
  var x2 = yahtzee([1, 1, 1, 1, 3]);
  var x3 = yahtzee([1, 1, 1, 3, 3]);
  var x4 = yahtzee([1, 2, 3, 4, 5]);
  var x5 = yahtzee([6, 6, 6, 6, 6]);
  assertEquals(x1, 10);
  assertEquals(x2, 4);
  assertEquals(x3, 6);
  assertEquals(x4, 5);
  assertEquals(x5, 30);
});
