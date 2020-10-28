import * as R from 'https://x.nest.land/ramda@0.27.0/source/index.js';
import { filterTo } from "./filter-beans.ts";

var seeds = ['🌽', '🥦', '🥬', '🍇', '🍒', '🌽', '🍌', '🥕', '🥝'];
var groups = filterTo([isCorn, isCauliflower], seeds);
console.log('Result', { groups });

function isCorn(i: string) {
  return i == '🌽';
}

function isCauliflower(i: string) {
  return i == '🥦';
}