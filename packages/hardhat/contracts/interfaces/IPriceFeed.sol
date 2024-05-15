// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IPriceFeed {
	// -- Events --
	event UpdatePrice(uint128 updatedAt, uint128 price);

	// -- Functions --
	function getPrice() external view returns (uint256);

	function getScale() external view returns (uint);
}
