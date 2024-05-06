import { ethers } from "hardhat";
import { PegasusUSD, PriceFeed, VaultManager } from "../typechain-types";
import { expect } from "chai";

describe("VaultManager", function () {
  let VaultManager, PegasusUSD, PriceFeed, owner, addr1, addr2;
  let vaultManager: VaultManager;
  let pegasusUSD: PegasusUSD;
  let priceFeed: PriceFeed;
  before(async () => {
    VaultManager = await ethers.getContractFactory("VaultManager");
    vaultManager = (await VaultManager.deploy()) as VaultManager;
    await vaultManager.waitForDeployment();

    PegasusUSD = await ethers.getContractFactory("PegasusUSD");
    pegasusUSD = (await PegasusUSD.deploy()) as PegasusUSD;
    await pegasusUSD.waitForDeployment();

    PriceFeed = await ethers.getContractFactory("PriceFeed");
    priceFeed = (await PriceFeed.deploy()) as PriceFeed;
    await priceFeed.waitForDeployment();

    [owner, addr1, addr2] = await ethers.getSigners();

    await vaultManager.initialize(priceFeed.getAddress());
    console.log(await vaultManager.getAddress());
  });
  describe("Deployment", function () {
    it("Should create a vault", async function () {
      await vaultManager.createVault(ethers.parseEther("1"), { value: ethers.parseEther("1") });
      console.log(await vaultManager.vaults);
    });
  });

  it("Should increase vault collateral", async function () {
    await vaultManager.createVault(ethers.parseEther("1"), { value: ethers.parseEther("1") });
    await vaultManager.increaseVaultColl(1, ethers.parseEther("1"), { value: ethers.parseEther("1") });
  });

  it("Should increase vault collateral", async () => {
    await vaultManager.createVault(ethers.parseEther("1"), { value: ethers.parseEther("1") });
    await vaultManager.decreaseVaultColl(1, ethers.parseEther("1"));
  });

  it("Should decrease vault debt", async () => {
    await vaultManager.createVault(ethers.parseEther("1"), { value: ethers.parseEther("1") });
    await vaultManager.increaseVaultDebt(1, ethers.parseEther("1"));
    await vaultManager.decreaseVaultDebt(1, ethers.parseEther("1"));
  });

  // it("S");
});
