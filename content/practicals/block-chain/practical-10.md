---
subject: blockchain
number: 10
title: Withdrawal Pattern in Solidity
aim: Implement and demonstrate the use of withdrawal pattern in solidity.
---

# Withdrawal Pattern in Solidity

## Code
```solidity
pragma solidity ^0.8.0;

contract WithdrawalPattern {

    mapping(address => uint) public pendingWithdrawals;

    function deposit() public payable {
        pendingWithdrawals[msg.sender] += msg.value;
    }

    function withdraw() public {
        uint amount = pendingWithdrawals[msg.sender];
        require(amount > 0, "No balance");

        pendingWithdrawals[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}