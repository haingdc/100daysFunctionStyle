const { Task } = require('../node/lib/types')

const readline = require('readline').createInterface({input: process.stdin, output: process.stdout})

const getInput = (q) =>
  Task(     (rej, res) => readline.question(   q, i => res(i.trim())   )     )

getInput('sup?').map(answer => answer.toUpperCase())
.fork(console.error, console.log)