// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function unlock(bytes32 _password) external;
}

contract VaultAttacker {
    constructor(address targetAddress, bytes32 _password) {
        targetInterface target = targetInterface(targetAddress);
        target.unlock(_password);
    }
}
