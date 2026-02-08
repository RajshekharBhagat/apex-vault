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

    Student public student;
    Student[] public students;

    function setStudent(
        string memory _name,
        uint _age,
        uint _rollNo
    ) public {
        student = Student(_name, _age, _rollNo);
    }

    function addStudent(
        string memory _name,
        uint _age,
        uint _rollNo
    ) public {
        students.push(Student(_name, _age, _rollNo));
    }

    function getStudent(uint index) public view returns (Student memory) {
        return students[index];
    }

    function updateStudent(
        uint index,
        string memory _name,
        uint _age,
        uint _rollNo
    ) public {
        students[index].name = _name;
        students[index].age = _age;
        students[index].rollNo = _rollNo;
    }
}

```