/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    PriceFeed: {
      address: "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint128",
              name: "updatedAt",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "price",
              type: "uint128",
            },
          ],
          name: "UpdatePrice",
          type: "event",
        },
        {
          inputs: [],
          name: "getPrice",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getScale",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "isOwner",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "oracleAddress",
              type: "address",
            },
          ],
          name: "setAddresses",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "price",
              type: "uint128",
            },
          ],
          name: "setPriceForced",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "updatePrice",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {
        isOwner: "contracts/dependencies/Ownable.sol",
        owner: "contracts/dependencies/Ownable.sol",
        getPrice: "contracts/interfaces/IPriceFeed.sol",
        getScale: "contracts/interfaces/IPriceFeed.sol",
        updatePrice: "contracts/interfaces/IPriceFeed.sol",
      },
    },
    VaultManager: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "coll",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "dri",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "cri",
              type: "uint128",
            },
          ],
          name: "CreateVault",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "coll",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "dri",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "cri",
              type: "uint128",
            },
          ],
          name: "DecreaseVaultColl",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "debt",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "dri",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "cri",
              type: "uint128",
            },
          ],
          name: "DecreaseVaultDebt",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "coll",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "dri",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "cri",
              type: "uint128",
            },
          ],
          name: "IncreaseVaultColl",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "debt",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "dri",
              type: "uint128",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "cri",
              type: "uint128",
            },
          ],
          name: "IncreaseVaultDebt",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "liquidator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
          ],
          name: "Liquidate",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "redeemer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "debt",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "coll",
              type: "uint256",
            },
          ],
          name: "Redeem",
          type: "event",
        },
        {
          inputs: [],
          name: "collLocked",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "initialColl",
              type: "uint128",
            },
          ],
          name: "createVault",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "collDecrease",
              type: "uint128",
            },
          ],
          name: "decreaseVaultColl",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "debtDecrease",
              type: "uint128",
            },
          ],
          name: "decreaseVaultDebt",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "collIncrease",
              type: "uint128",
            },
          ],
          name: "increaseVaultColl",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "debtIncrease",
              type: "uint128",
            },
          ],
          name: "increaseVaultDebt",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_pricefeed",
              type: "address",
            },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "lastVaultId",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "vaultId",
              type: "uint256",
            },
          ],
          name: "liquidate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "minimumCollRatio",
          outputs: [
            {
              internalType: "uint96",
              name: "ratio",
              type: "uint96",
            },
            {
              internalType: "uint96",
              name: "dRatio",
              type: "uint96",
            },
            {
              internalType: "uint64",
              name: "lastUpdate",
              type: "uint64",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rebaseIndices",
          outputs: [
            {
              internalType: "uint128",
              name: "debtRebaseIndex",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "collRebaseIndex",
              type: "uint128",
            },
            {
              internalType: "uint256",
              name: "lastUpdate",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "debtToRedeem",
              type: "uint256",
            },
          ],
          name: "redeem",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          name: "vaults",
          outputs: [
            {
              internalType: "uint128",
              name: "debt",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "collateral",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "lastDebtRebaseIndex",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "lastCollRebaseIndex",
              type: "uint128",
            },
            {
              internalType: "bool",
              name: "isActive",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {
        createVault: "contracts/interfaces/IVaultManager.sol",
        decreaseVaultColl: "contracts/interfaces/IVaultManager.sol",
        decreaseVaultDebt: "contracts/interfaces/IVaultManager.sol",
        increaseVaultColl: "contracts/interfaces/IVaultManager.sol",
        increaseVaultDebt: "contracts/interfaces/IVaultManager.sol",
        liquidate: "contracts/interfaces/IVaultManager.sol",
        redeem: "contracts/interfaces/IVaultManager.sol",
      },
    },
    YourContract: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "premium",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
