script:
  test : clear && deno test ./day3-yahtzee-dice/index.test.ts
  start: clear && deno run -c tsconfig.json ./day3-yahtzee-dice/index.ts