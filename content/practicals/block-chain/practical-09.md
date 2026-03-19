---
subject: blockchain
number: 9
title: Inheritance and Constructor in Solidity
aim: Implement and demonstrate the use of inheritance and constructor in solidity.
---

# Inheritance and Constructor in Solidity

## Code
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Person {

    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}

contract Student is Person {

    uint public rollNo;

    constructor(string memory _name, uint _rollNo)
        Person(_name)
    {
        rollNo = _rollNo;
    }

    function getDetails() public view returns (string memory, uint) {
        return (name, rollNo);
    }
}