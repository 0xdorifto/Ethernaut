# Re-entrancy

## Description

The problem with this smart contract is that in the `withdraw()` function, the
value is sent before the deduction is made, making it possible to steal all the
funds by re-entering this function, via the attacker's `receive()` function, as
many times as needed.

## Command Sequence

This vulnerability isn't exploitable through the console.
