---
subject: blockchain
number: 4
title: Solidity Basics
aim: Demonstrate variables, operators, loops, and decision making.
---

## Code
```solidity
pragma solidity ^0.8.20;

contract Basicconcepts {

    uint public number = 10;

    function sumUsingLoop(uint n) public pure returns(uint) {
        uint total = 0;
        for(uint i=1;i<=n;i++){
            total += i;
        }
        return total;
    }
}
```