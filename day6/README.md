script:
  test : clear && deno test ./day6/index.test.ts
  start: clear && deno run -c tsconfig.json ./day6/index.ts