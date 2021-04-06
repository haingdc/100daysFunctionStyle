script:
  test : clear && deno test ./day2-necklace/index.test.ts
  start: clear && deno run -c tsconfig.json ./day2-necklace/index.ts