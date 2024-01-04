pragma solidity ^0.8.13;

contract TestNoExplicitType {
    function test() internal pure returns (uint) {
        uint256 result = 0;
        return result;
    }
}
