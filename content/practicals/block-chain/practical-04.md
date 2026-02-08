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
    string public message = "Hello";
    
    function doOperations(uint a, uint b) public pure returns (
        uint sum,
        uint product,
        bool isAGreater,
        bool bothPositive
    ) {
        sum = a + b;
        product = a * b;
        isAGreater = a > b;
        bothPositive = (a > 0 && b > 0);
    }
    
    function sumUsingLoop(uint n) public pure returns(uint) {
        uint total = 0;
        for (uint i = 1; i <=n; i++){
            total += i ;
        }
        return total;
    }
    
    function counToTen() public pure returns(uint) {
        uint x = 0;
        while (x < 10) {
            x++;
        }
        return x;
        }
        function checkNumber(uint value)public pure returns(string memory) {
            if(value > 100) {
                return "Greator than 100";
            } else if (value == 100) {
                return "Equal to 100";
            } else {
                return "Less than 100";
            }
            }
     }

```