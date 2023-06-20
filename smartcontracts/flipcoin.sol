// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract coinflip{
    address private owner;
    uint256 public contractBalance;

    event flipcoined(address indexed player, bool result, uint256 winningAmt);

    constructor(){
        owner = msg.sender;
    }

    function FlipCoin() public payable {
        require(msg.value > 0, "garib ho kya bhai!?");

        uint256 bet = msg.value;
        uint256 winning = 0;

        //function to generate a random number between 0 and 1;

        uint256 random = uint256(keccak256(abi.encode(block.timestamp , msg.sender))) % 2;

        bool playerwins;

        if( random == 0 ){
            playerwins = true;
        }
        else{
            playerwins = false;
        }

        if(playerwins){
            winning = bet * 2;
            payable(msg.sender).transfer(winning);
            contractBalance -= bet;
        }
        else{
            contractBalance +=bet;
        }
        emit flipcoined(msg.sender, playerwins, winning);
    }

}