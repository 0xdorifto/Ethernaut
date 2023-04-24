# King

## Description

At first glance this smart contract might look pretty safe. The problem is that
to update the king, you have make a `transfer()` first, which is a function that
can fail and revert. What we need to do is make the king a smart contract that
doesn't have a fallback function, so that we remain the king forever.

## Command Sequence

This vulnerability isn't exploitable through the console.
