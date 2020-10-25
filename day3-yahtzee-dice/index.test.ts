import { assertEquals } from 'https://deno.land/std@0.74.0/testing/asserts.ts';
import { yahtzee } from './yahtzee.ts';

Deno.test('yahtzee', () => {
  var x1 = yahtzee([2, 3, 5, 5, 6]);
  var x2 = yahtzee([1, 1, 1, 1, 3]);
  var x3 = yahtzee([1, 1, 1, 3, 3]);
  var x4 = yahtzee([1, 2, 3, 4, 5]);
  var x5 = yahtzee([6, 6, 6, 6, 6]);
  var x6 = yahtzee([1654, 1654, 50995, 30864, 1654, 50995, 22747,
    1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654,
    30864, 4868, 30864]);
  assertEquals(x1, 10);
  assertEquals(x2, 4);
  assertEquals(x3, 6);
  assertEquals(x4, 5);
  assertEquals(x5, 30);
  assertEquals(x6, 123456);
});
