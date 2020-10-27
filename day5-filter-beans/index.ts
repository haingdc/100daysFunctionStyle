import { filterTo } from "./filter-beans.ts";

var seeds = ['🌽', '🥦', '🥬', '🍇', '🍒', '🌽', '🍌', '🥕', '🥝'];
var [corns, cauliFlowers, others] = filterTo([], seeds);