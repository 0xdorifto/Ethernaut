# Gatekeeper Two

## Description

This challenge is very similar to the previous one. The first gate is exactly
the same, we just need to call this smart contract from another one. The second
gate requires the attacker smart contract to be empty, so we must call the
function from the constructor. To solve the third gate we need a `XOR` operation
to give out a `1111...111` result, so what we do is `XOR` the known value with
`1111...1111` (A XOR B = C <=> A XOR C = B).

## Command Sequence

This vulnerability isn't exploitable through the console.
