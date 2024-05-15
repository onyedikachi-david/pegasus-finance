// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./dependencies/Ownable.sol";
import "./interfaces/IPriceFeed.sol";
import "@redstone-finance/evm-connector/contracts/data-services/MainDemoConsumerBase.sol";

contract PriceFeed is Ownable, IPriceFeed, MainDemoConsumerBase {
	uint constant SCALE = 8;

	function getPrice() external view returns (uint256) {
		return getOracleNumericValueFromTxMsg("LSK");
	}

	function getScale() external pure returns (uint) {
		return SCALE;
	}
}
