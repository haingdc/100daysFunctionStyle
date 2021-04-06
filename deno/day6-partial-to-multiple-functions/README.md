script:
  test : clear && deno test ./day6-partial-to-multiple-functions/index.test.ts
  start: clear && deno run -c tsconfig.json ./day6-partial-to-multiple-functions/index.ts