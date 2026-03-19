---
subject: blockchain
number: 8
title: Function Overloading and Mathematical Functions
aim: Implement and demonstrate the use of function overloading and mathematical functions in solidity.
---

# Function Overloading and Mathematical Functions in Solidity

## Code
```solidity
pragma solidity ^0.8.0;

contract MathFunction {

    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    function subtract(uint a, uint b) public pure returns (uint) {
        return a - b;
    }

    function multiply(uint a, uint b) public pure returns (uint) {
        return a * b;
    }

    function divide(uint a, uint b) public pure returns (uint) {
        require(b != 0, "Cannot divide by zero");
        return a / b;
    }

    function modulus(uint a, uint b) public pure returns (uint) {
        return a % b;
    }

    function power(uint a, uint b) public pure returns (uint) {
        return a ** b;
    }

    // Function Overloading
    function sum(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    function sum(uint a, uint b, uint c) public pure returns (uint) {
        return a + b + c;
    }

    function square(uint a) public pure returns (uint) {
        return a * a;
    }

    function square(int a) public pure returns (int) {
        return a * a;
    }
}