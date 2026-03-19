---
subject: blockchain
number: 7
title: View and Pure Functions in Solidity
aim: Implement view function and pure function in solidity.
---

# View and Pure Functions in Solidity

## Part A — View Function

```solidity
pragma solidity ^0.8.0;

contract Test {

    uint num1 = 2;
    uint num2 = 4;

    function getResult() public view returns (
        uint product,
        uint sum
    ){
        product = num1 * num2;
        sum = num1 + num2;
    }
}
```

## Part B - Pure Function

```solidity
pragma solidity ^0.8.0;

contract Test {

    function getResult() public pure returns (
        uint product,
        uint sum
    ){
        uint num1 = 2;
        uint num2 = 4;

        product = num1 * num2;
        sum = num1 + num2;
    }
}
```