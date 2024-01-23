pragma solidity ^0.8.13;

contract TestNoExplicitType {
    function test() internal pure returns (uint256 result) {
        uint256 mistakeVariable = 0;
        return mistakeVariable;
    }
}
