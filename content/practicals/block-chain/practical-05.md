---
subject: blockchain
number: 5
title: Struct Example in Solidity
aim: Implement struct concept using solidity.
---

## Code
```solidity
pragma solidity ^0.8.20;

contract StructExample {

    struct Student {
        string name;
        uint age;
        uint rollNo;
    }

    Student[] public students;

    function addStudent(string memory _name,uint _age,uint _rollNo) public {
        students.push(Student(_name,_age,_rollNo));
    }
}
```