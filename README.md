# Pegasus Finance

[Verified Deployed Vault Address:](https://sepolia-blockscout.lisk.com/address/0xb7738817DbD16F9e588b4F493D283d1C729cd682#code)

## Overview

Pegasus Finance is a decentralized finance (DeFi) application built on the Lisk blockchain. It enables users to deposit LSK tokens as collateral to mint a stablecoin, PegasusUSD, against it. This platform allows users to leverage their LSK holdings without selling them, providing a flexible means to manage debt and collateral through smart contracts.

## Features

1. **High LTV with Low Minimum Collateral Requirement:** Inspired by similar platforms, Pegasus Finance implements a unique redemption system that ensures a hard price floor of $1 for PegasusUSD. This system manages the Minimum Collateral Requirement (MCR) efficiently:

   - Collateral from all vaults is pooled, facilitating pro-rated redemption across vaults, maintaining efficiency regardless of the number of active vaults.

   - A modest increase in MCR discourages excessive minting while preserving system efficiency.

2. **Negative Interest Rates:** To address the challenge of bear markets where the stablecoin's value may exceed $1 due to reduced borrowing demand, Pegasus Finance employs a negative interest rate mechanism:

   - Each redemption slightly raises the MCR, reinforcing the $1 floor and keeping the price above $1 in less volatile conditions.

   - The system dynamically reduces the MCR to a maximum of 105%, offering relief to those who minted at higher MCR levels, effectively functioning as a negative interest rate to stabilize the price by expanding supply.

3. **Miscellaneous Features:** Tailored for leverage traders, the protocol permits the creation of multiple vaults, aiding in the management of diverse trading strategies.

TL;DR: Pegasus Finance presents an innovative solution for USD borrowing with high Loan-to-Value (LTV) ratios and minimal MCR, ensuring stability and efficiency within the stablecoin ecosystem.

## Technical Details

### Smart Contracts

- **VaultManager.sol**: Manages vault operations such as creation, updates, and liquidations.
- **PegasusUSD.sol**: ERC-20 compliant token contract for the mintable and burnable stablecoin pegged to the USD.
- **PriceFeed Interface**: Supplies real-time price data for LSK, essential for determining collateral value Using RedStone.
- **Libraries**: Assists with fixed-point arithmetic, error handling, and constant values.

### Key Functions




- `createVault(uint128 initialColl)`: Establishes a new vault with the specified initial LSK collateral.
- `increaseVaultColl(uint vaultId, uint128 collIncrease)`: Adds collateral to a specific vault.
- `decreaseVaultColl(uint vaultId, uint128 collDecrease)`: Reduces collateral in a specific vault.
- `increaseVaultDebt(uint vaultId, uint128 debtIncrease)`: Increases debt in a specific vault by minting PegasusUSD.
- `decreaseVaultDebt(uint vaultId, uint128 debtDecrease)`: Reduces debt in a specific vault by burning PegasusUSD.
- `liquidate(address owner, uint vaultId)`: Initiates liquidation of an undercollateralized vault.

### Technologies Used

- **Solidity**: The programming language for developing smart contracts on the Lisk blockchain.
- **Hardhat**: A development framework for deploying and testing smart contracts.

## Installation and Setup

1. **Prerequisites**:
   - Node.js and npm
   - Git

2. **Clone the Repository**:
   - git clone <https://github.com/onyediakchi-david/pegasus-finance.git>
   - cd pegasus-finance

## Demo

[Demo](https://github.com/onyedikachi-david/pegasus-finance/assets/51977119/ac0665c2-6eec-436a-913c-56b9fbf5cdcd)


## Future Work

- Alot 

