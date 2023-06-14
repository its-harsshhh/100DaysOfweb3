// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingContract {
  struct Representative {
    string name;
    uint256 age;
    bool noPoliceRecord;
    string partyName;
  }

  mapping(address => Representative) public representatives;

  event RepresentativeAdded(address indexed representativeAddress, string name, string partyName);

  function addRepresentative(
    string memory _name,
    uint256 _age,
    bool _noPoliceRecord,
    string memory _partyName
  ) public {
    require(bytes(_name).length > 0, "Name is required");
    require(_age > 18, "Age must be greater than zero");
    require(bytes(_partyName).length > 0, "Party name is required");
    require(representatives[msg.sender].age == 0, "Representative already exists");

    representatives[msg.sender] = Representative(_name, _age, _noPoliceRecord, _partyName);
    emit RepresentativeAdded(msg.sender, _name, _partyName);
  }
}
