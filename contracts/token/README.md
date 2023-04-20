# Token

## Description

The issue with this smart contract is overflowing. If you notice, its version
is 0.6.0 and SafeMath isn't being used. Because the balances are `uint`, we just
need to give it a value 1 unit bigger than whatever we have to get the maximum
amount of tokens.

## Command Sequence

```
> await contract.transfer(""0x0000000000000000000000000000000000000000", 21)
get maximum amount of tokens
```
