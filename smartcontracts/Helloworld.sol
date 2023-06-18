// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract helloworld
 {
    string public message;

    constructor(){
        message = "hello harsh!";
    }

    function inputmessage( string memory input )public {
        message = input;
    }
}
