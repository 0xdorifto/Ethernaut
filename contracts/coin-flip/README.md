# Coin Flip

## Description

The problem with this smart contract is that is uses blockchain data as a source
of randomness, when this is deterministic.

If you want to have randomness in the blockchain you have to use oracles.

In order to hack this contract you just need to call `flip()` with the correct
guess 10 times.

## Command Sequence

This vulnerability isn't exploitable through the console.
