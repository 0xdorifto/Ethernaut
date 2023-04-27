# Gatekeeper One

## Description

To solve this challenge we must get over the three "gates".

For the first gate, we just need to invoke this smart contract through another
smart contract, just like in [#4 Telephone](contracts/telephone).

For the 2nd gate, we must calculate how much gas we need to send so the function
is a multiple of 8191. For this we create a test to attempt the transaction
until one succeeds.

For the 3rd gate, we use the last verification has a baseline, since it's the
hardest to verify, and then just add an extra bit in the section that is going
to be sliced so the second verification is valid.

## Command Sequence

This vulnerability isn't exploitable through the console.
