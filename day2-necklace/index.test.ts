import { assertEquals, assert } from 'https://deno.land/std@0.74.0/testing/asserts.ts';
import { same_necklace } from './same_necklace.ts';

Deno.test('test', () => {
  const x2  = same_necklace("nicole"      , "icolen"      );
  const x3  = same_necklace("nicole"      , "lenico"      );
  const x4  = same_necklace("nicole"      , "coneli"      );
  const x5  = same_necklace("aabaaaaabaab", "aabaabaabaaa");
  const x6  = same_necklace("abc"         , "cba"         );
  const x7  = same_necklace("xxyyy"       , "xxxyy"       );
  const x8  = same_necklace("xyxxz"       , "xxyxz"       );
  const x9  = same_necklace("x"           , "x"           );
  const x10 = same_necklace("x"           , "xx"          );
  const x11 = same_necklace("x"           , ""            );
  const x12 = same_necklace(""            , ""            );
  assertEquals(x2, true);
  assertEquals(x3, true);
  assertEquals(x4, false);
  assertEquals(x5, true);
  assertEquals(x6, false);
  assertEquals(x7, false);
  assertEquals(x8, false);
  assertEquals(x9, true);
  assertEquals(x10, false);
  assertEquals(x11, false);
  assertEquals(x12, true);
});
