script:
  test : clear && deno test ./day5-filter-beans/index.test.ts
  start: clear && deno run -c tsconfig.json ./day5-filter-beans/index.ts