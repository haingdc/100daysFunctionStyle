import { Either } from '../lib/types.ts'

const identity = a => a

console.log( Either.of(2).fold(identity, identity) )