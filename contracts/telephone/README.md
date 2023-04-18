# Telephone

## Description

The vulnerability in this smart contract lies in the fact that the owner is
changeable. To make `tx.origin != msg.sender` we just need to create a transaction
chain with multiple smart contracts, because `tx.origin` is the first chain
member and `msg.sender` is the last chain member to make a call.

## Command Sequence

This vulnerability isn't exploitable through the console.
