# Elevator

## Description

This smart contract's vulnerability is that it works with an interface of
`msg.sender`. This means we can define `isLastFloor()` to give us the returns we
want.

## Command Sequence

This vulnerability isn't exploitable through the console.
