// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract simplestorage{
    uint256 public a;

    function input( uint256 _value ) public {
        a = _value;
    }

    function output() public view returns(uint256) {
        return a;
    }
}